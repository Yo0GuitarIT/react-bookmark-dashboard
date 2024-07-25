import "./styles/App.css";
import BookmarkList from "./components/BookmarkList";
import { useBookmarkContext } from "./hooks/useBookmarkContext";

function App() {
  const { isEditMode, toggleEditMode } = useBookmarkContext();

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <button onClick={toggleEditMode}>{isEditMode ? "View" : "Edit"}</button>
      <BookmarkList />
    </>
  );
}

export default App;
