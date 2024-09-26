import {  NextResponse } from "next/server";
imoort { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from "@/lib/database.types";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({request, response})
  await supabase.auth.getSession()
  return response
}
