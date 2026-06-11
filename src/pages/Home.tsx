import { useEffect, useRef, useState } from "react";
import VortexGallery from "@/lib/VortexGallery";
import Lenis from "lenis";
import {
  siteConfig,
  navigationConfig,
  galleryConfig,
  infoPageConfig,
} from "@/config";
import ImageDetailOverlay from "@/components/ImageDetailOverlay";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vortexRef = useRef<VortexGallery | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = galleryConfig.images;
  const hasImages = images.length > 0;
  const cfg = infoPageConfig;
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!canvasRef.current || !hasImages) return;

    const vortex = new VortexGallery(
      canvasRef.current,
      images.map((i) => i.src)
    );
    vortexRef.current = vortex;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      vortex.destroy();
      lenis.destroy();
    };
  }, [hasImages, images]);

  useEffect(() => {
    vortexRef.current?.setPaused(selectedIdx !== null);
  }, [selectedIdx]);

  if (!hasImages) return null;

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const vortex = vortexRef.current;
    const canvas = canvasRef.current;
    if (!vortex || !canvas) return;
    const idx = vortex.pickAtScreen(e.clientX, e.clientY, canvas.getBoundingClientRect());
    if (idx !== null) setSelectedIdx(idx);
  };

  const scrollToInfo = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#f5f3ef" }}>
      {/* STICKY VORTEX — stays pinned while scrolling into info section */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            cursor: "pointer",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: isMobile ? "16px" : "24px",
              pointerEvents: "auto",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <img
              src="/images/logo-black.jpg"
              alt={siteConfig.brandName}
              style={{
                height: isMobile ? "40px" : "52px",
                width: "auto",
                display: "block",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {navigationConfig.infoLinkLabel && (
            <a
              href="#info"
              onClick={scrollToInfo}
              style={{
                position: "absolute",
                top: "22px",
                right: isMobile ? "16px" : "32px",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: 400,
                color: "#1a1a1a",
                textDecoration: "none",
                pointerEvents: "auto",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {navigationConfig.infoLinkLabel}
            </a>
          )}

          {siteConfig.copyright && (
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#1a1a1a",
                opacity: 0.5,
                letterSpacing: "0.02em",
              }}
            >
              {siteConfig.copyright}
            </div>
          )}
        </div>
      </div>

      {/* INFO / SERVICES SECTION */}
      <div
        id="info"
        style={{
          position: "relative",
          width: "100%",
          background: "#f5f3ef",
          color: "#1a1a1a",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.35fr) minmax(0, 1fr)",
            gap: isMobile ? "48px" : "64px",
            maxWidth: "1720px",
            margin: "0 auto",
            padding: isMobile ? "64px 24px 60px" : "120px 48px 80px",
            boxSizing: "border-box",
            alignItems: "start",
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          }}
        >
          {/* LEFT — Bio + Packages */}
          <div>
            {cfg.eyebrow && (
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#6b6560",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "0 0 28px 0",
                }}
              >
                {cfg.eyebrow}
              </p>
            )}

            {cfg.title && (
              <h1
                style={{
                  fontFamily: "'DM Serif Display', 'Times New Roman', serif",
                  fontSize: "clamp(32px, 3.6vw, 52px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                  margin: "0 0 40px 0",
                  color: "#1a1a1a",
                }}
              >
                {cfg.title}
              </h1>
            )}

            {cfg.paragraphs.length > 0 && (
              <div style={{ fontSize: "15px", lineHeight: 1.65, color: "#1a1a1a" }}>
                {cfg.paragraphs.map((p, i) => (
                  <p key={i} style={{ margin: "0 0 18px 0" }}>
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Packages */}
            <div style={{ marginTop: "60px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#1a1a1a",
                  margin: "0 0 28px 0",
                }}
              >
                Packages
              </h2>

              <PackageRow
                name="HOVER"
                subtitle="Entry-level aerial stills"
                description="8–12 edited high-res aerial photos plus one 15–30 second highlight clip. A 20–40 minute flight covering the high overview, front elevation reveal, top-down, oblique corners, and feature close-ups. Good for basic listings, small properties, and social content."
                price="$150 – $250"
              />
              <PackageRow
                name="SOAR"
                subtitle="Photos + cinematic video"
                badge="Most Popular"
                description="15–25 edited aerial photos, a 1–2 minute video with music and transitions, and vertical 9:16 cuts for social. The 45–60 minute flight includes orbits, top-downs, dynamic moves, and golden hour context shots. The right fit for most listings, home sales, and business promos."
                price="$300 – $500"
              />
              <PackageRow
                name="SUMMIT"
                subtitle="Premium video + extended coverage"
                description="25–40+ edited photos and a 2–5 minute video with professional color grading, optional voiceover, and multiple cuts. Timelapse, 360°, and before/after edits available. 60–90+ minutes across multiple locations. Built for luxury homes, large estates, weddings, and tourism campaigns."
                price="$600 – $1,000+"
              />
              <PackageRow
                name="CUSTOM / PEAK"
                subtitle="Multi-property & campaign work"
                description="Everything in SUMMIT plus live streaming, extended editing, multi-day shoots, interior/exterior bundles, and recurring content packages. Hourly rates available for construction progress, events, and scenic tourism work."
                price="$1,000+ or $200–$400/hr"
                last
              />
            </div>
          </div>

          {/* RIGHT — Contact + CTA */}
          {(cfg.contactLabel || cfg.contactEntries.length > 0 || siteConfig.copyright) && (
            <div style={{ paddingTop: isMobile ? "0" : "80px" }}>
              {cfg.contactLabel && (
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#6b6560",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "0 0 24px 0",
                  }}
                >
                  {cfg.contactLabel}
                </p>
              )}

              {cfg.contactEntries.length > 0 && (
                <dl
                  style={{
                    display: "grid",
                    gridTemplateColumns: "130px 1fr",
                    rowGap: "14px",
                    columnGap: "20px",
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {cfg.contactEntries.map((entry, i) => (
                    <ContactRow key={i} entry={entry} />
                  ))}
                </dl>
              )}

              <div style={{ marginTop: "40px" }}>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', 'Times New Roman', serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    margin: "0 0 12px 0",
                    lineHeight: 1.3,
                  }}
                >
                  Ready to see your property from above?
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#6b6560",
                    margin: "0 0 20px 0",
                  }}
                >
                  Send a few details and I'll get back within 24 hours with a quote and flight plan.
                </p>
                <a
                  href="mailto:hello@vantagepointmedia.co?subject=Quote%20Request%20-%20Vantage%20Point%20Media"
                  style={{
                    display: "inline-block",
                    padding: "12px 28px",
                    background: "#1a1a1a",
                    color: "#f5f3ef",
                    fontSize: "13px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#c17817"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
                >
                  Request a Quote
                </a>
              </div>

              {siteConfig.copyright && (
                <div
                  style={{
                    marginTop: "48px",
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(0,0,0,0.12)",
                    fontSize: "12px",
                    color: "#6b6560",
                    opacity: 0.8,
                    letterSpacing: "0.02em",
                  }}
                >
                  {siteConfig.copyright}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ImageDetailOverlay
        image={selectedIdx !== null ? images[selectedIdx] : null}
        onClose={() => setSelectedIdx(null)}
      />
    </div>
  );
}

function PackageRow({
  name,
  subtitle,
  badge,
  description,
  price,
  last,
}: {
  name: string;
  subtitle: string;
  badge?: string;
  description: string;
  price: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        padding: "20px 0",
        borderBottom: last ? "none" : "1px solid #ddd8d0",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
        <h3
          style={{
            fontFamily: "'DM Serif Display', 'Times New Roman', serif",
            fontSize: "18px",
            fontWeight: 400,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          {name}
        </h3>
        <span style={{ fontSize: "13px", fontWeight: 400, color: "#6b6560" }}>
          {subtitle}
        </span>
        {badge && (
          <span
            style={{
              display: "inline-block",
              padding: "3px 10px",
              background: "#c17817",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              borderRadius: "2px",
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#1a1a1a", margin: "8px 0 0 0", maxWidth: "520px" }}>
        {description}
      </p>
      <p style={{ fontSize: "13px", fontWeight: 500, color: "#c17817", margin: "12px 0 0 0" }}>
        {price}
      </p>
    </div>
  );
}

function ContactRow({
  entry,
}: {
  entry: { label: string; value: string; href?: string };
}) {
  const lines = entry.value.split("\n");
  const content =
    lines.length > 1
      ? lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))
      : entry.value;

  return (
    <>
      <dt style={{ color: "#6b6560", fontWeight: 500, fontSize: "13px" }}>{entry.label}</dt>
      <dd style={{ margin: 0, lineHeight: lines.length > 1 ? 1.6 : 1.4, color: "#1a1a1a", fontSize: "15px" }}>
        {entry.href ? (
          <a
            href={entry.href}
            target={entry.href.startsWith("http") ? "_blank" : undefined}
            rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
            style={{ color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {content}
          </a>
        ) : (
          content
        )}
      </dd>
    </>
  );
}
