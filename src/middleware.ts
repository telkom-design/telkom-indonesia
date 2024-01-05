import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    response.headers.set('x-current-path', request.nextUrl.pathname)
    return response
}