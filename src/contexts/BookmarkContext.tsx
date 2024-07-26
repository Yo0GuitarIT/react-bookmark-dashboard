import { createContext } from "react";
import { BookmarkContextType } from "../types";

const initialContext: BookmarkContextType = {
  bookmarks: [], 
  addBookmark: () => {},
  deleteBookmark: () => {},
  updateBookmark: () => {},
};

const BookmarkContext = createContext<BookmarkContextType>(initialContext);

export default BookmarkContext;
