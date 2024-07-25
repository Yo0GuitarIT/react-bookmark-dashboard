import { createContext } from "react";
import { BookmarkType } from "../types";

type BookmarkContextType = {
  bookmarks: BookmarkType[];
  addBookmark: (newBookmark: BookmarkType) => void;
  deleteBookmark: (id: string) => void;
  updateBookmark: (id: string, updatedBookmark: BookmarkType) => void;
};

const initialContext: BookmarkContextType = {
  bookmarks: [],
  addBookmark: () => {},
  deleteBookmark: () => {},
  updateBookmark: () => {},
};

const BookmarkContext = createContext<BookmarkContextType>(initialContext);

export default BookmarkContext;
