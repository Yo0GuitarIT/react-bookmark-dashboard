import { useCallback, useEffect, useState } from "react";
import { BookmarkType } from "../types";
import { useBookmarkContext } from "../hooks/useBookmarkContext";

type BookmarkItemProps = {
  bookmark: BookmarkType;
  isEditMode: boolean;
};

function BookmarkItem({ bookmark,isEditMode }: BookmarkItemProps) {
  const {  updateBookmark, deleteBookmark } = useBookmarkContext();
  const [editedBookmark, setEditedBookmark] = useState(bookmark);

  useEffect(() => {
    setEditedBookmark(bookmark);
  }, [bookmark]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBookmark((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleUpdate = useCallback(() => {
    updateBookmark(bookmark.id, editedBookmark);
  }, [updateBookmark, bookmark.id, editedBookmark]);

  const handleDelete = useCallback(() => {
    deleteBookmark(bookmark.id);
  }, [deleteBookmark, bookmark.id]);

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
