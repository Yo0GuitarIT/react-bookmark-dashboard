import "./styles/App.css";
import { useState } from "react";
import BookmarkList from "./components/BookmarkList";
import BookmarkProvider from "./contexts/BookmarkProvider";

function App() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <BookmarkProvider>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <button onClick={handleEditMode}>{isEditMode ? "View" : "Edit"}</button>
      <BookmarkList isEditMode={isEditMode} />
    </BookmarkProvider>
  );
}

export default App;
