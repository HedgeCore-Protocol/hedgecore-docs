import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#02060f',
        borderRadius: '40px',
        border: '2px solid rgba(16,255,164,0.35)'
      }}>
        <svg width="140" height="140" viewBox="0 0 225 221" xmlns="http://www.w3.org/2000/svg">
          <path d="M140.635 48.6289L96.3279 106.23C96.0109 106.641 95.5219 106.883 95.0019 106.883H60.6529C59.2649 106.883 58.4819 105.291 59.3279 104.19L138.661 1.05295C139.748 -0.359054 141.881 -0.347052 142.951 1.07695L188.146 61.2299L168.901 86.25L140.635 48.6289Z" fill="url(#paint0)" />
          <path d="M95.7228 115.117L140.635 172.727L187.199 111.952C187.589 111.442 188.196 111.144 188.84 111.145L222.123 111.235C223.828 111.24 224.789 113.196 223.753 114.547L142.947 219.945C141.873 221.345 139.766 221.353 138.681 219.96L58.6768 117.172C57.8228 116.073 58.6048 114.472 59.9968 114.472H94.4058C94.9198 114.472 95.4068 114.711 95.7228 115.117Z" fill="url(#paint1)" />
          <path d="M129.501 115.118L84.6629 172.727L37.5789 111.292L84.6629 48.6269L128.97 106.228C129.287 106.64 129.776 106.881 130.296 106.881H164.645C166.033 106.881 166.816 105.289 165.97 104.189L86.6369 1.05192C85.5499 -0.361081 83.4169 -0.348079 82.3469 1.07592L0.539906 109.956C-0.186094 110.923 -0.179088 112.254 0.555912 113.214L82.3539 219.943C83.4279 221.344 85.5349 221.352 86.6189 219.959L166.622 117.17C167.476 116.071 166.694 114.471 165.302 114.471H130.821C130.304 114.472 129.818 114.711 129.501 115.118Z" fill="url(#paint2)" />
          <defs>
            <linearGradient id="paint0" x1="184.402" y1="-10.7781" x2="87.0819" y2="139.192" gradientUnits="userSpaceOnUse">
              <stop offset="0.0193" stopColor="#00FF95"/>
              <stop offset="0.3677" stopColor="#33DE6C"/>
              <stop offset="0.7831" stopColor="#108800"/>
              <stop offset="0.9947" stopColor="#58AF50"/>
            </linearGradient>
            <linearGradient id="paint1" x1="185.029" y1="47.315" x2="85.4448" y2="200.773" gradientUnits="userSpaceOnUse">
              <stop offset="0.0193" stopColor="#18FA3F"/>
              <stop offset="0.3677" stopColor="#21F84B"/>
              <stop offset="0.7831" stopColor="#26B251"/>
              <stop offset="0.9947" stopColor="#1D95A2"/>
            </linearGradient>
            <linearGradient id="paint2" x1="26.2319" y1="20.8239" x2="161.509" y2="229.283" gradientUnits="userSpaceOnUse">
              <stop offset="0.0193" stopColor="#00FF1E"/>
              <stop offset="0.3677" stopColor="#4BEF87"/>
              <stop offset="0.7831" stopColor="#0C862A"/>
              <stop offset="0.9947" stopColor="#3A2B0E"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
