import React from "react"

export default function HomePage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "system-ui" }}>
      <h1>🏡 Eden & Hearth - WORKING!</h1>
      <p>Next.js deployment successful!</p>
      <p>Build time: {new Date().toISOString()}</p>
    </div>
  )
}
