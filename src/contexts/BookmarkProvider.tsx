import { ReactNode, useCallback, useMemo, useState } from "react";
import { BookmarkType } from "../types";
import { initialBookmark } from "../data/data";
import BookmarkContext from "./BookmarkContext";

function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmark);

  const addBookmark = useCallback((newBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
  }, []);

  const deleteBookmark = useCallback((id: string) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== id));
  }, []);

  const updateBookmark = useCallback((id: string, updatedBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((prevBookmark) =>
        prevBookmark.id === id ? updatedBookmark : prevBookmark
      )
    );
  }, []);

  const contextValue = useMemo(
    () => ({ bookmarks, addBookmark, deleteBookmark, updateBookmark }),
    [bookmarks, addBookmark, deleteBookmark, updateBookmark]
  );

  return <BookmarkContext.Provider value={contextValue}>{children}</BookmarkContext.Provider>;
}

export default BookmarkProvider;
