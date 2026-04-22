import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(16,36,61,1) 0%, rgba(38,66,91,1) 45%, rgba(92,119,141,1) 100%)",
          color: "white",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", opacity: 0.8 }}
          >
            San Francisco Real Estate
          </div>
          <div style={{ fontSize: 72, marginTop: 24, lineHeight: 1.08 }}>
            William Zhang
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.08 }}>
            Premium buyer and seller guidance
          </div>
        </div>
      </div>
    ),
    size,
  );
}
