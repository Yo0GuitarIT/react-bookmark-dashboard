import "./styles/App.css";

import BookmarkList from "./components/BookmarkList";
import BookmarkForm from "./components/BookmarkForm";
import useBookmarks from "./hooks/useBookmarks";

function App() {
  const { bookmarks, addBookmark } = useBookmarks();

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <BookmarkList bookmarks={bookmarks} />
      <BookmarkForm onAddBookmark={addBookmark} />
    </>
  );
}

export default App;
