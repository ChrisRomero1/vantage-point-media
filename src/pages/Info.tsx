import { Link } from "react-router";
import { siteConfig, infoPageConfig } from "@/config";

export default function Info() {
  const cfg = infoPageConfig;
  if (
    !cfg.title &&
    cfg.paragraphs.length === 0 &&
    cfg.contactEntries.length === 0
  ) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        background: "#f5f3ef",
        color: "#1a1a1a",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {/* Top-left Logo — back home */}
      {siteConfig.brandName && (
        <Link
          to="/"
          style={{
            position: "fixed",
            top: "24px",
            left: "32px",
            fontFamily: "'DM Serif Display', 'Times New Roman', serif",
            fontSize: "18px",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.05em",
            textDecoration: "none",
            transition: "opacity 0.3s ease",
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {siteConfig.brandName}
        </Link>
      )}

      {/* Top-right Back */}
      {cfg.backLinkLabel && (
        <Link
          to="/"
          style={{
            position: "fixed",
            top: "24px",
            right: "32px",
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1a1a1a",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            transition: "opacity 0.3s ease",
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {cfg.backLinkLabel}
        </Link>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
          gap: "64px",
          maxWidth: "1720px",
          margin: "0 auto",
          padding: "160px 48px 80px",
          boxSizing: "border-box",
          alignItems: "start",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        {/* LEFT — Bio + Services */}
        <div>
          {cfg.eyebrow && (
            <p
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
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
            <div
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#1a1a1a",
              }}
            >
              {cfg.paragraphs.map((p, i) => (
                <p key={i} style={{ margin: "0 0 18px 0" }}>
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Services / Packages Section */}
          <div style={{ marginTop: "60px" }}>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
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

            {/* HOVER Package */}
            <div style={{ padding: "20px 0", borderBottom: "1px solid #ddd8d0" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  HOVER
                </h3>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#6b6560",
                  }}
                >
                  Entry-Level Aerial Stills
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#1a1a1a",
                  margin: "8px 0 0 0",
                  maxWidth: "520px",
                }}
              >
                8–12 edited aerial photos. One 15–30 second highlight clip. 20–40 minutes of flight time. Perfect for basic real estate listings, small properties, and social media content.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#c17817",
                  margin: "12px 0 0 0",
                }}
              >
                From $150
              </p>
            </div>

            {/* SOAR Package */}
            <div style={{ padding: "20px 0", borderBottom: "1px solid #ddd8d0" }}>
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
                  SOAR
                </h3>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#6b6560",
                  }}
                >
                  Photos + Cinematic Video
                </span>
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
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  }}
                >
                  Most Popular
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#1a1a1a",
                  margin: "8px 0 0 0",
                  maxWidth: "520px",
                }}
              >
                15–25 edited aerial photos. 1–2 minute cinematic video with music and transitions. Social media cuts in vertical format. 45–60 minutes of flight time. Ideal for standard real estate listings, home sales, and small events.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#c17817",
                  margin: "12px 0 0 0",
                }}
              >
                From $350
              </p>
            </div>

            {/* SUMMIT Package */}
            <div style={{ padding: "20px 0", borderBottom: "1px solid #ddd8d0" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  SUMMIT
                </h3>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#6b6560",
                  }}
                >
                  Premium Video + Extended Coverage
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#1a1a1a",
                  margin: "8px 0 0 0",
                  maxWidth: "520px",
                }}
              >
                25–40+ edited photos. 2–5 minute polished video with professional color grading. Optional voiceover. Timelapse and 360-degree options. 60–90+ minutes across multiple locations. For luxury homes, large estates, weddings, and tourism campaigns.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#c17817",
                  margin: "12px 0 0 0",
                }}
              >
                From $650
              </p>
            </div>

            {/* CUSTOM Package */}
            <div style={{ padding: "20px 0" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  CUSTOM / PEAK
                </h3>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#6b6560",
                  }}
                >
                  Multi-Property & Campaign Work
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#1a1a1a",
                  margin: "8px 0 0 0",
                  maxWidth: "520px",
                }}
              >
                Fully customized flight plans for multi-property shoots, full marketing campaigns, events, or combined ground + aerial coverage. Live streaming, extended editing, multi-day shoots, and recurring content packages available.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#c17817",
                  margin: "12px 0 0 0",
                }}
              >
                Custom Quote
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact + CTA */}
        {(cfg.contactLabel ||
          cfg.contactEntries.length > 0 ||
          siteConfig.copyright) && (
          <div
            style={{
              paddingTop: "80px",
            }}
          >
            {cfg.contactLabel && (
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
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
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                {cfg.contactEntries.map((entry, i) => (
                  <ContactRow key={i} entry={entry} />
                ))}
              </dl>
            )}

            {/* CTA Section */}
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
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#6b6560",
                  margin: "0 0 20px 0",
                }}
              >
                Share a few details and I will respond within 24 hours with a custom quote and flight plan.
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
                  borderRadius: "0",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c17817";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1a1a1a";
                }}
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
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
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
  );
}

function ContactRow({
  entry,
}: {
  entry: { label: string; value: string; href?: string };
}) {
  const valueLines = entry.value.split("\n");
  const content =
    valueLines.length > 1
      ? valueLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < valueLines.length - 1 && <br />}
          </span>
        ))
      : entry.value;

  return (
    <>
      <dt style={{ color: "#6b6560", fontWeight: 500, fontSize: "13px" }}>{entry.label}</dt>
      <dd
        style={{
          margin: 0,
          lineHeight: valueLines.length > 1 ? 1.6 : 1.4,
          color: "#1a1a1a",
          fontSize: "15px",
        }}
      >
        {entry.href ? (
          <a
            href={entry.href}
            target={entry.href.startsWith("http") ? "_blank" : undefined}
            rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
            style={{
              color: "#1a1a1a",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
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
