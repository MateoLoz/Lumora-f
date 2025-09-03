import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLocales = ['en', 'es'];
const defaultLocale = 'en';

export function getLocaleFromPath(pathname: string) {
  return supportedLocales.find((loc) => pathname.startsWith(`/${loc}`)) || 'en';
}


export function checkLocale(request: NextRequest): string | null {
  const pathname = request.nextUrl.pathname;

  const hasLocale = supportedLocales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (hasLocale) return null;

  return defaultLocale;
}
