import "./App.css";

import { bookmarks as initialBookmarks } from "./data";
import { useState } from "react";

type BookmarkType = {
  websiteName: string;
  websiteUrl: string;
};

function App() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmarks);
  const [formData, setFormData] = useState<BookmarkType>({
    websiteName: "",
    websiteUrl: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newBookmark: BookmarkType = {
      websiteName: formData.websiteName,
      websiteUrl: formData.websiteUrl,
    };

    setBookmarks((prevData) => [...prevData, newBookmark]);
    setFormData({ websiteName: "", websiteUrl: "" });
  };

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>BookMark DashBoard</h1>

      <div>
        <h2>Link</h2>
        <div>
          {bookmarks.map((item) => (
            <button key={item.websiteName}>
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.websiteName}
              </a>
            </button>
          ))}
        </div>
      </div>

      <h3>Add new Url:</h3>
      <form onSubmit={handleOnSubmit}>
        <label>
          website Name:
          <input
            type="text"
            name="websiteName"
            value={formData.websiteName}
            onChange={handleOnChange}
            required
          />
        </label>
        <br />
        <label>
          Url:
          <input
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleOnChange}
            required
          />
        </label>
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
