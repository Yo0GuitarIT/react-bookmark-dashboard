import { BookmarkType } from "../types";
import {v4 as uuid} from "uuid";

const createBookmark = (websiteName: string, websiteUrl: string): BookmarkType => ({
  id: uuid(),
  websiteName,
  websiteUrl,
});

export const initialBookmark: BookmarkType[] = [
  createBookmark("Facebook", "https://www.facebook.com"),
  createBookmark("Google", "https://www.google.com"),
  createBookmark("YouTube", "https://www.youtube.com"),
  createBookmark("Twitter", "https://www.twitter.com"),
  createBookmark("LinkedIn", "https://www.linkedin.com"),
  createBookmark("GitHub", "https://www.github.com"),
  createBookmark("Stack Overflow", "https://stackoverflow.com"),
  createBookmark("Reddit", "https://www.reddit.com"),
  createBookmark("Amazon", "https://www.amazon.com"),
  createBookmark("Netflix", "https://www.netflix.com"),
];