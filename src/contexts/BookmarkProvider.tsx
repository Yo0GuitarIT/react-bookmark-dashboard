import { ReactNode, useState } from "react";
import { BookmarkType } from "../types";
import { initialBookmark } from "../data/data";
import BookmarkContext from "./BookmarkContext";

function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmark);

  const addBookmark = (newBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
  };

  const deleteBookmark = (id: string) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== id));
  };

  const updateBookmark = (id:string, updatedBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) => (bookmark.id=== id ? updatedBookmark : bookmark))
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, deleteBookmark, updateBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkProvider;
