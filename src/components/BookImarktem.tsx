import { useState } from "react";
import { BookmarkType } from "../types";
import { useBookmarkContext } from "../hooks/useBookmarkContext";

type BookmarkItemProps = {
  bookmark: BookmarkType;
};

function BookmarkItem({ bookmark }: BookmarkItemProps) {
  const { isEditMode, updateBookmark, deleteBookmark } = useBookmarkContext();

  const [editedBookmark, setEditedBookmark] = useState(bookmark);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBookmark((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    updateBookmark(bookmark.id, editedBookmark);
  };

  const handleDelete = () => {
    deleteBookmark(bookmark.id);
  };

  if (isEditMode) {
    return (
      <div style={{ display: "flex", gap: "1em", margin: "0.5em" }}>
        <input name="websiteName" value={editedBookmark.websiteName} onChange={handleChange} />
        <input name="websiteUrl" value={editedBookmark.websiteUrl} onChange={handleChange} />
        <button onClick={handleUpdate}>更新</button>
        <button onClick={handleDelete}>刪除</button>
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
