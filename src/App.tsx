import "./styles/App.css";
import { useState } from "react";
import BookmarkList from "./components/BookmarkList";

function App() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <button onClick={handleEditMode}>{isEditMode ? "View" : "Edit"}</button>
      <BookmarkList isEditMode={isEditMode} />
    </>
  );
}

export default App;
