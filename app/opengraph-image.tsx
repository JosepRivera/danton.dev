import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Josep Rivera — Full Stack Developer · NestJS · FastAPI · Lima, Perú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0e1018",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "64px 72px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(104,136,200,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Left: text content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "620px" }}>
        {/* Availability pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(104,136,200,0.08)",
            border: "1px solid rgba(104,136,200,0.25)",
            borderRadius: "8px",
            padding: "8px 16px",
            width: "fit-content",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#6888c8",
            }}
          />
          <span style={{ color: "#e0e8f8", fontSize: "14px", fontStyle: "italic" }}>
            "Creando software con propósito"
          </span>
        </div>

        {/* Name */}
        <div style={{ color: "#e0e8f8", fontSize: "64px", fontWeight: "700", lineHeight: 1.1 }}>
          Josep Rivera
        </div>

        {/* Title */}
        <div style={{ color: "#6888c8", fontSize: "28px", fontWeight: "600" }}>
          Full Stack Developer
        </div>

        {/* Stack pills */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
          {["NestJS", "FastAPI", "Docker", "PostgreSQL", "TypeScript"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "#181c28",
                border: "1px solid #282f44",
                borderRadius: "6px",
                padding: "4px 12px",
                color: "#a8b8e0",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Location */}
        <div style={{ color: "#8898b8", fontSize: "16px", marginTop: "8px" }}>
          📍 Lima, Perú · rivera-dev.vercel.app
        </div>
      </div>

      {/* Right: initials badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(104,136,200,0.10)",
          border: "2px solid rgba(104,136,200,0.25)",
          color: "#6888c8",
          fontSize: "72px",
          fontWeight: "700",
          flexShrink: 0,
        }}
      >
        JR
      </div>
    </div>,
    { ...size },
  );
}
