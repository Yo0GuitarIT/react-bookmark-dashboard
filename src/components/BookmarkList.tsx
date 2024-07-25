import BookmarkItem from "./BookImarktem";
import BookmarkForm from "./BookmarkForm";
import { useBookmarkContext } from "../hooks/useBookmarkContext";

type BookmarkListType = {
  isEditMode: boolean;
};

function BookmarkList({ isEditMode }: BookmarkListType) {
  const { bookmarks, updateBookmark } = useBookmarkContext();
  return (
    <>
      <h2>My Bookmark List</h2>
      <div>
        {bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            bookmark={bookmark}
            isEditMode={isEditMode}
            onUpdate={(updatedBookmark) => updateBookmark(bookmark.id, updatedBookmark)}
          />
        ))}
      </div>

      {isEditMode && <BookmarkForm />}
    </>
  );
}

export default BookmarkList;
