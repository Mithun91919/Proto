import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Mithun Raju, Senior UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Share preview for links to the site: the portrait from the About page beside
 * the home page headline, on the site's pale ground. Drawn with the platform
 * default sans, since the site's own fonts are not in a format the image
 * renderer reads.
 *
 * The portrait is shown at 714 x 630 and shifted left so the 520-wide window
 * is centred on the face; that also crops out the corner watermark.
 */
export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), "public/mithun-raju.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7fbfc",
          color: "#0f1f26",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 680,
            padding: "0 32px 0 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1 }}>
            Mithun Raju
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 30,
              fontWeight: 600,
              marginTop: 24,
              lineHeight: 1.25,
              color: "#2b4450",
            }}
          >
            <div style={{ display: "flex" }}>Senior UX designer working across</div>
            <div style={{ display: "flex", color: "#0e7490" }}>enterprise platforms,</div>
            <div style={{ display: "flex" }}>developer tools and AI-enabled products.</div>
          </div>
        </div>
        <div style={{ display: "flex", width: 520, height: 630, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={714} height={630} alt="" style={{ marginLeft: -96 }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
