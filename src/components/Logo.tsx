/**
 * Recreated placeholder mark — no source logo file exists for the real
 * business. This is a simplified stacked-text reconstruction of the
 * original oval badge (gold "EAGLE HOME" + teal "IMPROVEMENT VA" over a
 * house glyph). Swap for the client's real artwork if they supply it.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Eagle Home Improvement VA logo"
      className={className}
    >
      <ellipse cx="100" cy="100" rx="92" ry="92" fill="#0B0B0C" stroke="#E8A33D" strokeWidth="6" />
      <text x="100" y="52" textAnchor="middle" fill="#E8A33D" fontSize="22" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="2">
        EAGLE
      </text>
      <text x="100" y="76" textAnchor="middle" fill="#E8A33D" fontSize="22" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="2">
        HOME
      </text>
      <text x="100" y="98" textAnchor="middle" fill="#7EC8C8" fontSize="14" fontWeight="600" fontFamily="Georgia, serif" letterSpacing="3">
        IMPROVEMENT VA
      </text>

      {/* house glyph */}
      <path d="M60 150 L100 118 L140 150 V158 H60 Z" fill="#E8A33D" />
      <rect x="90" y="132" width="20" height="16" fill="#7EC8C8" />

      <text x="100" y="176" textAnchor="middle" fill="#F7F5F0" fontSize="9" fontWeight="600" letterSpacing="1">
        &quot;YOU DREAM IT WE DO IT&quot;
      </text>
    </svg>
  );
}
