import { useBookmarks } from "../contexts/BookmarkContext";

function BookmarkList() {
  const { bookmarks, deleteBookmark } = useBookmarks();

  return (
    <>
      <h2>My Bookmark List</h2>
      <div>
        {bookmarks.map((item, index) => (
          <div style={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
            <button key={index}>
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.websiteName}
              </a>
            </button>

            <button
              style={{ color: "red" }}
              onClick={() => deleteBookmark(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookmarkList;
