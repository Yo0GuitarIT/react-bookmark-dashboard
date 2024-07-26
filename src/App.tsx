import "./styles/App.css";
import BookmarkList from "./components/BookmarkList";
import { useState } from "react";
import BookmarkForm from "./components/BookmarkForm";
import { useBookmarkContext } from "./hooks/useBookmarkContext";

function App() {
  const { addBookmark } = useBookmarkContext();
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <button onClick={toggleEditMode}>{isEditMode ? "View" : "Edit"}</button>
      <BookmarkList isEditMode={isEditMode} />
      {isEditMode && <BookmarkForm addBookmark={addBookmark} />}
    </>
  );
}

export default App;
