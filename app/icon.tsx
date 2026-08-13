import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          fontWeight: '900',
          fontFamily: 'sans-serif'
        }}
      >
        <span style={{ color: '#2563eb' }}>i</span>
        <span style={{ color: '#2563eb' }}>X</span>
      </div>
    ),
    { ...size }
  )
}
