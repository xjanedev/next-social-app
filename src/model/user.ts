export interface User {
  name: string;
  username: string;
  email: string;
  image?: string;
}

export interface SimpleUser extends Pick<User, "username" | "image"> {}

export interface DetailUser extends User {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
}

export interface SearchUser extends User {
  following: number;
  followers: number;
}

export interface ProfileUser extends SearchUser {
  posts: number;
}
