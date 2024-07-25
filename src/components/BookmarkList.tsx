import BookmarkItem from "./BookImarktem";
import BookmarkForm from "./BookmarkForm";
import useBookmarkState from "../hooks/useBookmarkState";

type BookmarkListType = {
  isEditMode: boolean;
};

function BookmarkList({ isEditMode }: BookmarkListType) {
  const { bookmarks, addBookmark, deleteBookmark, updateBookmark } =
    useBookmarkState();

  return (
    <>
      <h2>My Bookmark List</h2>
      <div>
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem
            key={index}
            bookmark={bookmark}
            isEditMode={isEditMode}
            onDelete={() => deleteBookmark(index)}
            onUpdate={(updatedBookmark) =>
              updateBookmark(index, updatedBookmark)
            }
          />
        ))}
      </div>

      {isEditMode && <BookmarkForm addBookmark={addBookmark} />}
    </>
  );
}

export default BookmarkList;
