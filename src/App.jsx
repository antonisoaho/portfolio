function ExternalLinkIcon() {
  return (
    <svg
      className="link-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function App() {
  return (
    <div id="wrapper">
      <h1>
        anton<strong> isoaho</strong>.
      </h1>
      <p>
        <a
          href="https://hitai.se"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          hitai.se
          <ExternalLinkIcon />
        </a>
      </p>
    </div>
  );
}
