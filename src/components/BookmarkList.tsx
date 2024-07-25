import BookmarkItem from "./BookImarktem";
import BookmarkForm from "./BookmarkForm";
import { useBookmarkContext } from "../hooks/useBookmarkContext";

// type BookmarkListType = {
//   isEditMode: boolean;
// };

function BookmarkList() {
  const { bookmarks ,isEditMode } = useBookmarkContext();
  return (
    <>
      <h2>My Bookmark List</h2>
      <div>
        {bookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark}/>
        ))}
      </div>

      {isEditMode && <BookmarkForm />}
    </>
  );
}

export default BookmarkList;
