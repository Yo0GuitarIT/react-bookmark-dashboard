import { createContext, useState, useContext, ReactNode } from "react";
import { BookmarkType } from "../types";
import { initialBookmarks } from "../data/data";

interface BookmarkContextType {
  bookmarks: BookmarkType[];
  addBookmark: (newBookmark: BookmarkType) => void;
  deleteBookmark: (index: number) => void;
  updateBookmark: (index: number, updatedBookmark: BookmarkType) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmarks);

  const addBookmark = (newBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
  };

  const deleteBookmark = (index: number) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((_, i) => i !== index)
    );
  };

  const updateBookmark = (index: number, updatedBookmark: BookmarkType) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark, i) =>
        i === index ? updatedBookmark : bookmark
      )
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, deleteBookmark, updateBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
