export function AppleIcon() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="90" cy="90" r="85" fill="url(#apple-gradient)" />
      <path
        d="M90 45C72 45 58 59 58 77C58 98 72 115 90 115C90 115 90 115 90 115"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="90" cy="90" rx="25" ry="20" fill="white" fillOpacity="0.9" />
      <path
        d="M90 70C90 70 85 80 90 95"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="85" cy="82" r="3" fill="#1a1a1a" />
      <defs>
        <linearGradient id="apple-gradient" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4A962" />
          <stop offset="1" stopColor="#8B7355" />
        </linearGradient>
      </defs>
    </svg>
  );
}
