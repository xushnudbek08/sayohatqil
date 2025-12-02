import React from "react"
import Image from "next/image"

type EcoSayohatLogoProps = {
  width?: number
  height?: number
  className?: string
}

export function EcoSayohatLogo({ width = 640, height = 300, className = "" }: EcoSayohatLogoProps) {
  return (
    <Image
      src="/eco-sayohat-logo.png"
      alt="Eco Sayohat"
      width={width}
      height={height}
      className={className}
      priority
      style={{ width: "auto", height: "auto" }}
    />
  )
}

export default EcoSayohatLogo


