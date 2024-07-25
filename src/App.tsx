import "./styles/App.css";
import { useState } from "react";
import BookmarkList from "./components/BookmarkList";

function App() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
 
  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "退出編輯模式" : "進入編輯模式"}
      </button>
      <BookmarkList isEditMode={isEditMode} />
    </>
  );
}

export default App;
