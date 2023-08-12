"use client";

import React from "react";
import useSWR from "swr";
import { DetailUser } from "@/model/user";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  console.log(data);

  return <p>FollowingBar</p>;
}
