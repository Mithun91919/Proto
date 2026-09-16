"""Build the FixIt case-study hero composite.

The hero band (`SceneBannerFigure`) sizes its lead screen to the full
width of a 48rem stack, so it expects landscape art. Every FixIt asset
is a portrait phone capture — one passed in directly would render
~2350px tall. This arranges three of them into one landscape image on a
transparent ground, so they sit on the band's own dot texture rather
than inside a second frame (hence `bare` on the component).

Regenerate after replacing any of the source captures:

    python3 -m venv /tmp/heroenv && /tmp/heroenv/bin/pip install Pillow
    /tmp/heroenv/bin/python scripts/hero-composite.py

Next's image optimiser caches by URL, so clear `.next` after writing.
"""

from PIL import Image, ImageDraw, ImageFilter

SRC = "public/work/store-support"
OUT = f"{SRC}/hero-composite.png"
S = 1.5                       # render scale over the 1600x926 design space
# 1600x1333 (~1.2). The band is ~686px tall and the stack is a fixed 48rem
# (768px) wide, so a wider canvas centres short and strands dead band under
# it. At this ratio the composite nearly fills the band's height, and the
# stack's own -2.5rem right margin clips the right-hand phone into a bleed.
W, H = int(1600*S), int(1333*S)
PHONE_AR = 720/1432           # match the device ratio used in the clips

def phone(path, out_h, opacity=1.0, radius_frac=0.055):
    """Top-crop a full-page capture to the device ratio, round it, shadow it."""
    im = Image.open(path).convert("RGB")
    w, h = im.size
    need = int(w / PHONE_AR)
    if h >= need:
        im = im.crop((0, 0, w, need))
    else:
        # Shorter than the device ratio: extend using the capture's own
        # bottom row rather than cropping the width and clipping content.
        pad = Image.new("RGB", (w, need), im.getpixel((w // 2, h - 1)))
        pad.paste(im, (0, 0))
        im = pad

    out_w = int(out_h * PHONE_AR)
    im = im.resize((out_w, out_h), Image.LANCZOS).convert("RGBA")

    r = int(out_w * radius_frac)
    mask = Image.new("L", (out_w, out_h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, out_w-1, out_h-1], radius=r, fill=255)
    if opacity < 1.0:
        mask = mask.point(lambda v: int(v * opacity))
    im.putalpha(mask)

    # Hairline edge so a light screen doesn't melt into the dark band.
    edge = Image.new("RGBA", (out_w, out_h), (0, 0, 0, 0))
    ImageDraw.Draw(edge).rounded_rectangle(
        [0, 0, out_w-1, out_h-1], radius=r,
        outline=(234, 243, 245, int(70*opacity)), width=max(1, int(2*S)))
    im.alpha_composite(edge)

    # Baked shadow — the band has no surface of its own to cast onto.
    pad = int(60*S)
    shadow = Image.new("RGBA", (out_w+pad*2, out_h+pad*2), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle(
        [pad, pad+int(18*S), pad+out_w, pad+out_h+int(18*S)],
        radius=r, fill=(4, 12, 16, int(165*opacity)))
    shadow = shadow.filter(ImageFilter.GaussianBlur(int(26*S)))
    shadow.alpha_composite(im, (pad, pad))
    return shadow, pad

canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))

# x, y and height in the 1600x926 design space. Lead sits forward and bleeds
# off the bottom; the flanking two recede and are dimmed.
# Nothing bleeds off the canvas bottom: the band centres this image, so a
# phone cut at the canvas edge reads as cut in mid-air rather than running
# off the band. Horizontal bleed is left to the CSS.
layout = [
    (f"{SRC}/submit-issue.png",          90, 200, 1010, 0.45),
    (f"{SRC}/refrigeration-alarms.png", 1085, 200, 1010, 0.45),
    (f"{SRC}/home.png",                  550,  70, 1200, 1.00),
]
for path, x, y, h, op in layout:
    img, pad = phone(path, int(h*S), opacity=op)
    canvas.alpha_composite(img, (int(x*S)-pad, int(y*S)-pad))

canvas.save(OUT)
print("wrote", OUT, canvas.size)
