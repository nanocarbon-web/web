import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = join(process.cwd(), 'Logo Nanocarbon.png');
  
  if (!existsSync(filePath)) {
    return new NextResponse('Logo no encontrado en ' + filePath, { status: 404 });
  }

  const buffer = readFileSync(filePath);
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'no-store, max-age=0'
    },
  });
}
