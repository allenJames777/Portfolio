import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* Link-preview image shown when the site is shared (LinkedIn, Messenger, Slack, etc.) */

export const alt = "Allen James Lluvido — Workflow Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#ffffff",
          color: "#111827",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={340}
          height={340}
          style={{ borderRadius: "50%", border: "6px solid #e5e7eb", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#6b7280", marginBottom: 12 }}>Hi, I&apos;m</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Allen James Lluvido</div>
          <div style={{ fontSize: 40, color: "#4b5563", marginTop: 16 }}>Workflow Engineer</div>
          <div style={{ fontSize: 28, color: "#6b7280", marginTop: 28, maxWidth: 620 }}>
            Automation, integrations, and data dashboards that help businesses work smarter.
          </div>
        </div>
      </div>
    ),
    size
  );
}
