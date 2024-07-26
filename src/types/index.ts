export type BookmarkType = {
  id: string;
  websiteName: string;
  websiteUrl: string;
};

export type BookmarkContextType = {
  bookmarks: BookmarkType[];
  addBookmark: (newBookmark: BookmarkType) => void;
  deleteBookmark: (id: string) => void;
  updateBookmark: (id: string, updatedBookmark: BookmarkType) => void;
};
