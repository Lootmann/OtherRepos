import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://api.adviceslip.com/advice";

export async function GET(req: NextRequest) {
  const res = await fetch(API_URL);
  const data = (await res.json()) as TAdvice;

  return NextResponse.json({ data });
}
