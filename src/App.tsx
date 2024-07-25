import "./styles/App.css";
import BookmarkList from "./components/BookmarkList";
import BookmarkForm from "./components/BookmarkForm";
import { useState } from "react";
import useBookmarkState from "./hooks/useBookmarkState";

function App() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const bookmarkState = useBookmarkState();

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "退出編輯模式" : "進入編輯模式"}
      </button>
      <BookmarkList isEditMode={isEditMode} {...bookmarkState} />
      {isEditMode && <BookmarkForm addBookmark={bookmarkState.addBookmark} />}
    </>
  );
}

export default App;
