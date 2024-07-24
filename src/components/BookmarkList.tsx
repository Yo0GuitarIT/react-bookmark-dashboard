import { BookmarkType } from "../types";

function BookmarkList({ bookmarks }: { bookmarks: BookmarkType[] }) {
  return (
    <>
      <h2>Link</h2>
      <div>
        {bookmarks.map((item) => (
          <button key={item.websiteName}>
            <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
              {item.websiteName}
            </a>
          </button>
        ))}
      </div>
    </>
  );
}

export default BookmarkList;
