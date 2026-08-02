// Signature graphic device: a single continuous line echoing the peak/waveform
// shape from the Axis Media mark. Used sparingly as a section divider and
// background accent rather than repeating the logo itself.
export default function AxisMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 30 L60 10 L100 32 L140 6 L180 32 L220 18 L260 34 L400 8"
        stroke="url(#axisGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="axisGradient" x1="0" y1="0" x2="400" y2="0">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#FFB100" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
