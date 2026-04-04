import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0e1018",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "40px",
      }}
    >
      <div
        style={{
          color: "#6888c8",
          fontSize: "80px",
          fontWeight: "700",
          fontFamily: "sans-serif",
          letterSpacing: "-2px",
        }}
      >
        JR
      </div>
    </div>,
    { ...size },
  );
}
