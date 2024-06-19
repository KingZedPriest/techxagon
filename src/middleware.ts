import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

//Import Needed Tokens
import { verifyToken } from './lib/signToken';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('sessionToken');
  
    if (!token) {
      return NextResponse.redirect('/authentication');
    }
  
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.redirect('/authentication');
    }

    (request as any).user = decoded; 
    return NextResponse.next();
  }

export const config = {
matcher: ["/(admin|teacher)/:path*"],
}