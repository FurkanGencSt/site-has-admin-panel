import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
function TextEditor(props) {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-[980px]">
      <ReactQuill value={value} onChange={setValue} theme={"snow"} />

      <ReactQuill value={value} readOnly={true} theme={"bubble"} />
    </div>
  );
}
export default TextEditor;
