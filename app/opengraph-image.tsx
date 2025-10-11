import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '0 4rem',
          textAlign: 'center',
          backgroundImage: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
        }}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          marginBottom: '2rem',
          gap: '1.5rem'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
          }}>
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
            </svg>
          </div>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
            d0
          </div>
        </div>
        <div style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          maxWidth: '90%',
          lineHeight: '1.2'
        }}>
          AI-Powered React Components
        </div>
        <div style={{ 
          fontSize: '24px', 
          color: '#4b5563',
          maxWidth: '80%',
          lineHeight: '1.4',
          marginBottom: '2rem'
        }}>
          Generate production-ready components in seconds
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
