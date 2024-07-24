import "./styles/App.css";
import BookmarkList from "./components/BookmarkList";
import BookmarkForm from "./components/BookmarkForm";
import { BookmarkProvider } from "./contexts/BookmarkContext";

function App() {
  return (
    <BookmarkProvider>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>
      <BookmarkList />
      <BookmarkForm />
    </BookmarkProvider>
  );
}

export default App;
