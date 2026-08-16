interface SealIconProps {
  className?: string;
}

export default function SealIcon({ className }: SealIconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="46" fill="#7EE8B8" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#14161A" strokeWidth="1.3" />
      <path
        id="sealRing"
        d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
        fill="none"
      />
      <text
        fontFamily="'Reddit Mono', monospace"
        fontSize="6.3"
        letterSpacing="2.4"
        fill="#14161A"
      >
        <textPath href="#sealRing" startOffset="0%">
          STUPID HIT · APPROVED · STUPID HIT · APPROVED ·
        </textPath>
      </text>
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Reddit Sans', sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#14161A"
      >
        SH
      </text>
    </svg>
  );
}
