import { memo, useCallback, useState } from "react";
import { BookmarkType } from "../types";
import { v4 as uuid } from "uuid";

type BookmarkFormProps = {
  addBookmark: (bookmark: BookmarkType) => void;
};

function BookmarkForm({ addBookmark }: BookmarkFormProps) {
  const [formData, setFormData] = useState<Omit<BookmarkType, "id">>({
    websiteName: "",
    websiteUrl: "",
  });

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleOnSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newBookmark: BookmarkType = { ...formData, id: uuid() };
      addBookmark(newBookmark);
      setFormData({ websiteName: "", websiteUrl: "" });
    },
    [formData, addBookmark]
  );

  return (
    <>
      <h3>Add New Bookmark</h3>
      <form onSubmit={handleOnSubmit}>
        <label>
          Website Name :
          <input
            style={{ margin: "1em" }}
            type="text"
            name="websiteName"
            value={formData.websiteName}
            onChange={handleOnChange}
            required
          />
        </label>
        <br />
        <label>
          URL :
          <input
            style={{ margin: "1em" }}
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

export default memo(BookmarkForm);
