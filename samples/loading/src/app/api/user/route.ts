import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const user: TUser = { id: 1, name: "higemachine" };

  return NextResponse.json({ user });
}
