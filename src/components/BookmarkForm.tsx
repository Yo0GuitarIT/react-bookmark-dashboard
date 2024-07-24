import { useState } from "react";
import { BookmarkType } from "../types";

interface BookmarkFormProps {
  onAddBookmark: (bookmark: BookmarkType) => void;
}

function BookmarkForm({ onAddBookmark }: BookmarkFormProps) {
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

    onAddBookmark(formData);
    setFormData({ websiteName: "", websiteUrl: "" });
  };

  return (
    <>
      <h3>Add New Bookmark</h3>
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

export default BookmarkForm;
