import "./styles/App.css";
import BookmarkList from "./components/BookmarkList";
import BookmarkForm from "./components/BookmarkForm";
import { BookmarkProvider } from "./contexts/BookmarkContext";
import { useState } from "react";

function App() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  return (
    <BookmarkProvider>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>

      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "退出編輯模式" : "進入編輯模式"}
      </button>

      <BookmarkList isEditMode={isEditMode} />
      {isEditMode && <BookmarkForm />}
    </BookmarkProvider>
  );
}

export default App;
