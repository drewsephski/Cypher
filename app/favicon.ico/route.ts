import { ImageResponse } from 'next/og';
import { NextResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Convert SVG to ICO format
const icoTemplate = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#3b82f6"/>
  <path d="M16 8v4m0 12v4M8.93 8.93l2.83 2.83m8.48 8.48 2.83 2.83M8 16h4m12 0h-4M8.93 23.07l2.83-2.83m8.48-8.48 2.83-2.83" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export async function GET() {
  const svg = Buffer.from(icoTemplate);
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
