import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BookmarkProvider from "./contexts/BookmarkProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>
);
