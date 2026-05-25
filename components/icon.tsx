export function Icon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" fill="url(#gradient)" />
      <path
        d="M16 8C12.5 8 10 10.5 10 14C10 18 16 24 16 24C16 24 22 18 22 14C22 10.5 19.5 8 16 8Z"
        fill="white"
        fillOpacity="0.9"
      />
      <circle cx="16" cy="14" r="3" fill="#1a1a1a" />
      <circle cx="17" cy="13.5" r="0.8" fill="white" />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4A962" />
          <stop offset="1" stopColor="#8B7355" />
        </linearGradient>
      </defs>
    </svg>
  );
}
