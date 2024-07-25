import BookmarkItem from "./BookImarktem";
import { BookmarkType } from "../types";

type BookmarkListProps = {
  isEditMode: boolean;
  bookmarks: BookmarkType[];
  deleteBookmark: (index: number) => void;
  updateBookmark: (index: number, updatedBookmark: BookmarkType) => void;
};

function BookmarkList({
  isEditMode,
  bookmarks,
  deleteBookmark,
  updateBookmark,
}: BookmarkListProps) {
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
    </>
  );
}

export default BookmarkList;
