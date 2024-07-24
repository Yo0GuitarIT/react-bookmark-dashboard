import "./styles/App.css";

import { initialBookmarks } from "./data/data";
import { useState } from "react";
import { BookmarkType } from "./types";
import BookmarkList from "./components/BookmarkList";
import BookmarkForm from "./components/BookmarkForm";

function App() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmarks);

  const addBookMark = (newBookmark: BookmarkType) => {
    setBookmarks((prevData) => [...prevData, newBookmark]);
  };

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <BookmarkList bookmarks={bookmarks} />
      <BookmarkForm onAddBookmark={addBookMark} />
    </>
  );
}

export default App;
