import { OAuthChecks } from "next-auth/providers";
import { client } from "./sanity";
import Email from "next-auth/providers/email";

interface OAuthUser {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null; // optional
}

export async function addUser({ id, email, image, name, username }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarkes: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch();
}
