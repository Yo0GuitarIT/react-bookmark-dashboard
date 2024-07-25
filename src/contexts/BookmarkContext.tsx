import { createContext } from "react";
import { BookmarkContextType } from "../types";

const initialContext: BookmarkContextType = {
  bookmarks: [],
  isEditMode: false,
  toggleEditMode: () => {},
  addBookmark: () => {},
  deleteBookmark: () => {},
  updateBookmark: () => {},
};

const BookmarkContext = createContext<BookmarkContextType>(initialContext);

export default BookmarkContext;
