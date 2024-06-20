import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export async function middleware(request: NextRequest) {

    const token = request.cookies.get('sessionToken');

    if (!token) return NextResponse.redirect(new URL('/authentication', request.url))

    return NextResponse.next();
}

export const config = {
    matcher: ["/(admin|teacher)/:path*"],
}