import { useState } from "react";
import { BookmarkType } from "../types";
import { initialBookmarks } from "../data/data";

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmarks);

  const addBookmark = (newBookmark: BookmarkType) => {
    setBookmarks((prevData) => [...prevData, newBookmark]);
  };

  return { bookmarks, addBookmark };
}

export default useBookmarks;
