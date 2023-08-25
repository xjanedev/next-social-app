import React from "react";
import { ProfileUser } from "@/model/user";

interface Props {
  user: ProfileUser;
}

export default function UserProfile({ user }: Props) {
  return <div>{user.username}</div>;
}
