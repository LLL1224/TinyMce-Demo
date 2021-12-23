import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./App.css";

const App = () => {
  const handleEditorChange = async (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <>
      <Editor
        tinymceScriptSrc="/tinymce.min.js"
        init={{
          height: 500,
          selector: "textarea", // change this value according to your HTML
          plugins: "paste",
          menubar: "edit",
          toolbar: "paste",
          paste_remove_styles_if_webkit: false,
          paste_enable_default_filters: false,
          paste_filter_drop: false,
          paste_webkit_styles: "none",
          base_url: "/tinymce",
        }}
        onChange={handleEditorChange}
      />
    </>
  );
};

export default App;
