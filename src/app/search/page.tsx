import UserSearch from "@/components/UserSearch";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "user search",
  description: "search users to follow",
};

export default function SearchPage() {
  return <UserSearch />;
}
