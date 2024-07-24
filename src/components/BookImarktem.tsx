import { useBookmarks } from "../contexts/BookmarkContext";
import { useState } from "react";
import { BookmarkType } from "../types";

type BookImarktemProps = {
  bookmark: BookmarkType;
  index: number;
  isEditMode: boolean;
  onDelete: () => void;
};

function BookmarkItem({
  bookmark,
  index,
  isEditMode,
  onDelete,
}: BookImarktemProps) {
  const { updateBookmark } = useBookmarks();
  const [editedBookmark, setEditedBookmark] = useState(bookmark);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBookmark((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    updateBookmark(index, editedBookmark);
  };

  if (isEditMode) {
    return (
      <div style={{ display: "flex", gap: "1em", margin: "0.5em" }}>
        <input
          name="websiteName"
          value={editedBookmark.websiteName}
          onChange={handleChange}
        />
        <input
          name="websiteUrl"
          value={editedBookmark.websiteUrl}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>更新</button>
        <button onClick={onDelete}>刪除</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "1em", margin: "0.5em" }}>
      <a href={bookmark.websiteUrl} target="_blank" rel="noopener noreferrer">
        {bookmark.websiteName}
      </a>
    </div>
  );
}

export default BookmarkItem;
