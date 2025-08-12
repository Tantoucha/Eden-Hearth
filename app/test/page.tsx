export default function TestPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 NEXT.JS IS WORKING!</h1>
      <p>This is a test page to verify Next.js deployment is successful.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
      <p>If you can see this, the routing is fixed!</p>
    </div>
  )
}
