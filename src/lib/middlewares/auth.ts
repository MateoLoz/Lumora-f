import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocaleFromPath } from './i18n';

export function checkAuth(request: NextRequest): string | null {
  const token = request.cookies.get('access_token')?.value;
  const pathname = request.nextUrl.pathname;
  const locale = getLocaleFromPath(pathname)

  if (pathname.startsWith(`${locale}/login`)) return null;

  if (!token) {
    return '/login';
  }

  return null;
}
