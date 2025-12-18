import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AERONEX - Professional Drone Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>
            AERONEX
          </div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>
            Professional Drone Solutions
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
