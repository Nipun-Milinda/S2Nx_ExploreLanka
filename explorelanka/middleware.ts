// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import sequelize from './database/db-connection';

export async function middleware(req: NextRequest) {
  console.log('Request:', req.url);

  return NextResponse.next(); // Continue to the next handler
}

// Config to match all API routes
export const config = {
  matcher: '/api/:path*', // Apply middleware to all API routes
};
