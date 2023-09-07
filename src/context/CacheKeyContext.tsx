import { createContext, useContext } from "react";

interface CacheKeyValue {
  postsKey: string;
}

export const CacheKeysContext = createContext<CacheKeyValue>({
  postsKey: "/api/post",
});

export const useCaheKeys = () => useContext(CacheKeysContext);
