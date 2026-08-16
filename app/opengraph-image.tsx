import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const sealBuffer = fs.readFileSync(
    path.join(process.cwd(), "app/opengraph-seal.png")
  );
  const sealSrc = `data:image/png;base64,${sealBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14161A",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={sealSrc} width={420} height={420} alt="" />
      </div>
    ),
    { ...size }
  );
}
