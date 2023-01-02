import React, { useState } from "react";

function Upload(props) {
  const [preview, setPreview] = useState(null);

  const onUpload = (e) => {
    props.setUploadFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <label
        className="rounded-full border-2 px-2 py-1 bg-white text-center border-[#B59DED] cursor-pointer transition hover:bg-[#d8d8d8]"
        htmlFor="kartu"
      >
        {props.children}
      </label>
      <a
        className="mb-2 underline"
        href={preview}
        target="_blank"
        rel="noreferrer"
      >
        {props.uploadFile.name}
      </a>
      <input
        type="file"
        id="kartu"
        name="kartu_identitas"
        className="hidden border-2 p-1 bg-white mb-2 border-[#B59DED]"
        required
        accept=".jpg, .jpeg, .png"
        onChange={(e) => onUpload(e)}
      />
    </>
  );
}

export default Upload;
