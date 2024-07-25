import { useContext } from "react";
import BookmarkContext from "../contexts/BookmarkContext";

export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error("useBookmarkContext must be used within a BookmarkProvider");
  }
  return context;
};
