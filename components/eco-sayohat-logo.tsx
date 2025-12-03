import React from "react"

type EcoSayohatLogoProps = {
  width?: number
  height?: number
  className?: string
  title?: string
}

export default function EcoSayohatLogo({
  width = 600,
  height = 600,
  className = "",
  title = "Eco Travel logo",
}: EcoSayohatLogoProps) {
  const color = "#7FB36B"

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 400 399"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {/* Outer double ring */}
      <circle cx="300" cy="200" r="150" fill="none" stroke={color} strokeWidth="16" opacity="0.95" />
      <circle cx="300" cy="200" r="120" fill="none" stroke={color} strokeWidth="10" opacity="0.95" />

      {/* Mountain outline */}
      <g transform="translate(0,30)" stroke={color} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M170 300 L240 210 L300 260 L360 190 L430 300" />
        <path d="M190 300 L230 250 L270 290" />
      </g>

      {/* Tagline text */}
      <text x="300" y="400" textAnchor="middle" fontFamily="Montserrat, Arial, sans-serif" fontSize="64" fontWeight={800} fill={color} letterSpacing="2">
        ECO TRAVEL
      </text>
      <text x="300" y="455" textAnchor="middle" fontFamily="Montserrat, Arial, sans-serif" fontSize="28" fontWeight={600} fill={color} opacity="0.9" letterSpacing="4">
        TOURISM AGENCY
      </text>
    </svg>
  )
}


