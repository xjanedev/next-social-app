import { getPostOf, getSavedPostsOf, getlikedPostsOf } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    slug: string[];
  };
}

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    const response = new NextResponse("Bad Request", {
      status: 400,
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response;
  }

  const [username, query] = slug;
  let request = getPostOf;

  if (query === "saved") {
    request = getSavedPostsOf;
  } else if (query === "liked") {
    request = getlikedPostsOf;
  }

  return request(username).then(data => NextResponse.json(data));
}
