// app/api/images/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const worksDir = path.join(process.cwd(), 'public/works');
  
  
  try {
    // Read all files in the 'works' directory
    const files = fs.readdirSync(worksDir);

    // Filter out non-image files (optional)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Return the list of image file names
    return NextResponse.json(imageFiles);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to read images' }, { status: 500 });
  }
}
