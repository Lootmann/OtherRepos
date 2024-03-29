import { NextRequest, NextResponse } from "next/server";

// API: <BASE_URL>/api/dict?word=<WORD>
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const word = url.searchParams.get("word");

  if (word == undefined) {
    return NextResponse.json({ msg: "you dumb" });
  }

  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    return NextResponse.json({ msg: "there is no words, there." });
  }

  const data = await res.json();

  // TODO: validation
  const meanings = data[0];
  return NextResponse.json({ meanings });
}
