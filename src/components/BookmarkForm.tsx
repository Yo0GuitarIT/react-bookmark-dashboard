import { useState } from "react";
import { BookmarkType } from "../types";

type BookmarkFormProps = {
  addBookmark: (newBookmark: BookmarkType) => void;
};

function BookmarkForm({ addBookmark }: BookmarkFormProps) {
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
    addBookmark(formData);
    setFormData({ websiteName: "", websiteUrl: "" });
  };

  return (
    <>
      <h3>Add New Bookmark</h3>
      <form onSubmit={handleOnSubmit}>
        <label>
          Website Name:
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
          URL:
          <input
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleOnChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookmarkForm;
