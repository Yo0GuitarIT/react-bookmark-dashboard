import { useState } from "react";
import { initialBookmark } from "../data/data";
import { BookmarkType } from "../types";

function useBookmarkState() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmark);

  const addBookmark = (newBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
  };

  const deleteBookmark = (index: number) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((_, i) => i !== index));
  };

  const updateBookmark = (index: number, updatedBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark, i) => (i === index ? updatedBookmark : bookmark))
    );
  };

  return { bookmarks, addBookmark, deleteBookmark, updateBookmark };
}

export default useBookmarkState;
