import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getPost } from "@/service/posts";

interface Context {
  params: { id: string };
}

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  // login한 사용자만

  return getPost(context.params.id) //
    .then(data => NextResponse.json(data));
}
