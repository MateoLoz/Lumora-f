import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuth } from './lib/middlewares/auth';
import { checkLocale } from './lib/middlewares/i18n';

export function middleware(request:NextRequest) {
  const localeResponse = checkLocale(request)
  const authResponse = checkAuth(request);
  return NextResponse.redirect(new URL(`${localeResponse}/auth/${authResponse}`, request.url ));
}

export const config = {
  matcher: ['/','/profile','/dashboard'],

};
