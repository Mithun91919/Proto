import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Mithun Raju, Senior UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Share preview for links to the site: name and role on the site's stone
 * ground, beside a real Studio screen. Drawn with the platform default sans,
 * since the site's own fonts are not in a format the image renderer reads.
 */
export default async function Image() {
  const shot = await readFile(
    path.join(process.cwd(), "public/work/ai-studio/hero-home.jpg"),
  );
  const src = `data:image/jpeg;base64,${shot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f1f0ec",
          color: "#14181a",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 500,
            padding: "64px 0 64px 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#0f5f5c" }}>
            PORTFOLIO
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 76, lineHeight: 1.02, fontWeight: 700 }}>
              Mithun Raju
            </div>
            <div style={{ display: "flex", fontSize: 34, marginTop: 20, color: "#3b4448" }}>
              Senior UX Designer
            </div>
            <div style={{ display: "flex", fontSize: 24, marginTop: 20, color: "#5a6468", lineHeight: 1.35 }}>
              Enterprise platforms, developer tools and AI products
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", flex: 1, paddingLeft: 24, paddingRight: 56 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            width={580}
            height={334}
            alt=""
            style={{
              borderRadius: 18,
              border: "1px solid #d5d3cc",
              boxShadow: "0 12px 40px rgba(20,24,26,0.12)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
