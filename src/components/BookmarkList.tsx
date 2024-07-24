import { useBookmarks } from "../contexts/BookmarkContext";
import BookmarkItem from "./BookImarktem";

type isEditModeType = {
  isEditMode: boolean;
};

function BookmarkList({ isEditMode }: isEditModeType) {
  const { bookmarks, deleteBookmark } = useBookmarks();

  return (
    <>
      <h2>My Bookmark List</h2>
      <div>
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem
            key={index}
            bookmark={bookmark}
            index={index}
            isEditMode={isEditMode}
            onDelete={() => deleteBookmark(index)}
          />
        ))}
      </div>
    </>
  );
}

export default BookmarkList;
