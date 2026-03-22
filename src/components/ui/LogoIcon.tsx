type LogoIconProps = {
  size?: number;
  idPrefix?: string;
};

export function LogoIcon({ size = 40, idPrefix = "ng" }: LogoIconProps) {
  const g1 = `${idPrefix}1`;
  const g2 = `${idPrefix}2`;
  const g3 = `${idPrefix}3`;
  const g4 = `${idPrefix}4`;
  const g5 = `${idPrefix}5`;
  const g6 = `${idPrefix}6`;
  const g7 = `${idPrefix}7`;
  const g8 = `${idPrefix}8`;
  const bar = `${idPrefix}bar`;
  const core = `${idPrefix}core`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes waveBar {
          0%, 100% { transform: scaleY(0.2); }
          50% { transform: scaleY(1); }
        }
        @keyframes ringPulse {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.7); }
        }
      `}</style>
      <defs>
        <linearGradient id={g8} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2E4A7A" />
          <stop offset="100%" stopColor="#3A5F96" />
        </linearGradient>
        <linearGradient id={g7} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3A5A90" />
          <stop offset="100%" stopColor="#4A75A8" />
        </linearGradient>
        <linearGradient id={g6} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4470A8" />
          <stop offset="100%" stopColor="#5590BB" />
        </linearGradient>
        <linearGradient id={g5} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4E85B8" />
          <stop offset="100%" stopColor="#3AADB8" />
        </linearGradient>
        <linearGradient id={g4} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3AA0B8" />
          <stop offset="100%" stopColor="#2EC8B8" />
        </linearGradient>
        <linearGradient id={g3} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2BBFB0" />
          <stop offset="100%" stopColor="#3DD8C0" />
        </linearGradient>
        <linearGradient id={g2} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3DCFC0" />
          <stop offset="100%" stopColor="#5DE8CC" />
        </linearGradient>
        <linearGradient id={g1} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5ADEC8" />
          <stop offset="100%" stopColor="#7FFFD4" />
        </linearGradient>
        <linearGradient id={bar} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2BBFB0" />
          <stop offset="100%" stopColor="#7FFFD4" />
        </linearGradient>
        <radialGradient id={core} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7FFFD4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2BBFB0" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" stroke={`url(#${g8})`} strokeWidth="1.2" fill="none" opacity="0.70" />
      <circle cx="50" cy="50" r="37" stroke={`url(#${g7})`} strokeWidth="1.2" fill="none" opacity="0.75" />
      <circle cx="50" cy="50" r="32" stroke={`url(#${g6})`} strokeWidth="1.3" fill="none" opacity="0.80" />
      <circle cx="50" cy="50" r="27" stroke={`url(#${g5})`} strokeWidth="1.3" fill="none" opacity="0.82" />
      <circle cx="50" cy="50" r="22" stroke={`url(#${g4})`} strokeWidth="1.4" fill="none" opacity="0.85" />
      <circle cx="50" cy="50" r="17" stroke={`url(#${g3})`} strokeWidth="1.4" fill="none" opacity="0.88" />
      <circle cx="50" cy="50" r="12" stroke={`url(#${g2})`} strokeWidth="1.5" fill="none" opacity="0.92" />
      <circle cx="50" cy="50" r="7" stroke={`url(#${g1})`} strokeWidth="1.5" fill="none" opacity="0.96" />
      <circle cx="50" cy="50" r="5" fill={`url(#${core})`} />
      <circle cx="50" cy="50" r="2.5" fill="#7FFFD4" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="1.5" style={{ transformOrigin: "50px 50px", transformBox: "fill-box", animation: "ringPulse 3s ease-out infinite 0s" }} />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(45,212,191,0.2)" strokeWidth="1.5" style={{ transformOrigin: "50px 50px", transformBox: "fill-box", animation: "ringPulse 3s ease-out infinite 1s" }} />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(45,212,191,0.15)" strokeWidth="1.5" style={{ transformOrigin: "50px 50px", transformBox: "fill-box", animation: "ringPulse 3s ease-out infinite 2s" }} />
      <rect x="33" y="46.5" width="3" height="7" rx="1.5" fill={`url(#${bar})`} opacity="0.55" style={{ transformOrigin: "34.5px 50px", transformBox: "fill-box", animation: "waveBar 1.4s ease infinite 0s" }} />
      <rect x="38" y="42" width="3" height="16" rx="1.5" fill={`url(#${bar})`} opacity="0.72" style={{ transformOrigin: "39.5px 50px", transformBox: "fill-box", animation: "waveBar 1.4s ease infinite 0.2s" }} />
      <rect x="43" y="37" width="4" height="26" rx="2" fill={`url(#${bar})`} opacity="0.95" style={{ transformOrigin: "45px 50px", transformBox: "fill-box", animation: "waveBar 1.4s ease infinite 0.4s" }} />
      <rect x="53" y="42" width="3" height="16" rx="1.5" fill={`url(#${bar})`} opacity="0.72" style={{ transformOrigin: "54.5px 50px", transformBox: "fill-box", animation: "waveBar 1.4s ease infinite 0.6s" }} />
      <rect x="58" y="46.5" width="3" height="7" rx="1.5" fill={`url(#${bar})`} opacity="0.55" style={{ transformOrigin: "59.5px 50px", transformBox: "fill-box", animation: "waveBar 1.4s ease infinite 0.8s" }} />
    </svg>
  );
}
