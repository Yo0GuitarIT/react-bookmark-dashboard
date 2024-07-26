import BookmarkItem from "./BookImarktem";
import { useBookmarkContext } from "../hooks/useBookmarkContext";

function BookmarkList({ isEditMode }: { isEditMode: boolean }) {
  const { bookmarks } = useBookmarkContext();
  return (
    <>
      <h2>My Bookmark List</h2>
      <div>
        {bookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} isEditMode={isEditMode} />
        ))}
      </div>

    
    </>
  );
}

export default BookmarkList;
