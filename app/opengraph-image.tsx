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
          backgroundColor: "#0b0f2b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#f9fafb",
            fontSize: 140,
            fontWeight: 700,
            letterSpacing: 10,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          SAIL GTX
        </div>
      </div>
    ),
    size,
  );
}
