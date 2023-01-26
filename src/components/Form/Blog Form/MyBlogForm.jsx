import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../../utils/firebase.utils";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import { ProgressBar } from "react-bootstrap";

import { AiOutlineClose, AiOutlinePlusSquare } from "react-icons/ai";
import { TagsInput } from "react-tag-input-component";
import ShortUniqueId from "short-unique-id";

import ReactQuill from "react-quill";

const MyBlogForm = () => {
  const uid = new ShortUniqueId({ length: 10 });
  const [editorValue, setEditorValue] = useState("");
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const [percent, setPercent] = useState(0);
  const [isOk, setIsOk] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const [selected, setSelected] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [isAddClick, setIsAddClick] = useState(false);

  const handleDocUpload = () => {
    const docRef = doc(db, "Blog Yazıları", data.title);

    setDoc(docRef, data)
      .then((docRef) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
        setIsUpload(true);
        setUploadedPhotoUrl(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (percent < 100 || percent === "100") {
      if (isClick) {
        const storageRef = ref(storage, `/Blog Resimleri/${data.title}`);
        // Fotoğrafı bu klasöre yüklemek
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            ); // update progress
            setPercent(percent);
          },
          (err) => console.log(err),
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setUploadedPhotoUrl(url);
              console.log(uploadedPhotoUrl);
              data.photoUrl = url;
              data.tags = selected;

              handleDocUpload();
            });
          }
        );
      }
    }
    console.log(data.deneme !== undefined ? "true" : "asdsd");
  }, [isClick, uploadedPhotoUrl]);

  useEffect(() => {
    if (uploadedPhotoUrl) {
      data.photoUrl = uploadedPhotoUrl;
      const docRef = doc(db, "Blog Yazıları", data.title);
      setDoc(docRef, data)
        .then((docRef) => {
          console.log(
            "A New Document Field has been added to an existing document"
          );
          setIsUpload(true);
          setUploadedPhotoUrl(null);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [uploadedPhotoUrl, percent]);

  useEffect(() => {
    data.tags = selected;
    data.textarea = editorValue;

    if (data.title && data.content && data.tags && file) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [data, file, selected, editorValue]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(true);
  };
  const handleAddInput = (e) => {
    setInputs([...inputs, { id: uid(), tag: e.target.name, value: "" }]);
    setIsAddClick(!isAddClick);
    console.log(inputs);
  };
  const hideOrShowAddButton = () => {
    setIsAddClick(!isAddClick);
  };
  // const handleFilterAddedInput = (id) => {
  //   setInputs(inputs.filter((item) => item.id !== id));
  // };
  // const handleChangeAddedInputs = (e, item) => {
  //   const updatedInputs = inputs.map((input) => {
  //     if (input.id === item.id) {
  //       return { ...input, value: e.target.value };
  //     }
  //     return input;
  //   });
  //   setInputs(updatedInputs);
  //   console.log(inputs);
  // };

  return (
    <>
      <div className="flex   w-[75%] sm:w-[75%] mx-auto mt-[10%] border-2 border-dashed">
        {!isAddClick && (
          <AiOutlinePlusSquare
            className="w-full flex justify-center items-center cursor-pointer"
            size={20}
            onClick={hideOrShowAddButton}
          />
        )}
        {isAddClick && (
          <div className="w-full flex ">
            <button
              onClick={handleAddInput}
              name="h2"
              className="p-1 border bg-white w-full"
            >
              Başlık
            </button>
            <button
              onClick={handleAddInput}
              className="p-1 border bg-white w-full"
              name="p"
            >
              İçerik
            </button>
            <button
              onClick={handleAddInput}
              className="p-1 border bg-white w-full"
              name="img"
            >
              Fotoğraf
            </button>
          </div>
        )}
      </div>
      <ProgressBar
        className="flex  w-[75%] sm:w-[75%] mx-auto  border-2 border-dashed"
        now={percent}
        label={`${percent}%`}
      />
      <div className="grid md:grid-cols-2 ">
        {/* Nasıl gözükecek kısmı */}
        <div
          className="w-[75%] mx-auto border-4 border-double

"
        >
          <h1 className="w-full flex text-4xl justify-center font-tinos">
            {data.title}
          </h1>
          <ReactQuill
            className="w-full mx-auto"
            value={editorValue}
            readOnly={true}
            theme={"bubble"}
          />
        </div>

        <div
          onSubmit={handleSubmit}
          className=" flex flex-col w-[75%] sm:w-[75%] justify-start mb-[1%] items-start  gap-1 mx-auto border-4 border-black p-2 border-dashed"
        >
          {/* İnputlar */}
          <>
            {/* Default Inputlar */}
            <>
              <input
                required
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="border-2 border-black rounded-md px-2  w-full py-2"
              />
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="tagsSelected"
                placeHolder="Etiket yaz ve Enter'a Bas"
              />
              <input
                required
                type="file"
                accept="image/*"
                name="file"
                onChange={handleFileChange}
                className="border-2 border-black rounded-md px-2  w-full py-2"
              />
            </>

            {/* TextEditör */}
            <>
              <div className="z-10 w-full">
                <ReactQuill
                  value={editorValue}
                  onChange={setEditorValue}
                  theme={"snow"}
                />
              </div>
            </>
            <>
              {/* {inputs.map((item, index) => {
              if (item.tag !== "img") {
                return (
                  <div className="w-full flex">
                    <input
                      placeholder={item.tag}
                      type="text"
                      name={item.id}
                      value={inputs.find((x) => x.id === item.id).value}
                      onChange={(e) => handleChangeAddedInputs(e, item)}
                      className="border-2 border-black rounded-md px-2  w-full py-2"
                    />
                    <button onClick={() => handleFilterAddedInput(item.id)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                );
              } else {
                return (
                  <div className="w-full flex">
                    <input
                      type="file"
                      name={item.id}
                      accept="image/*"
                      onChange={(e) =>
                        item.tag !== "img"
                          ? (inputs.find((x) => x.id === item.id).value =
                              e.target.value)
                          : (inputs.find((x) => x.id === item.id).value =
                              e.target.files[0])
                      }
                      className="border-2 border-black rounded-md px-2  w-full py-2"
                    />
                    <button onClick={() => handleFilterAddedInput(item.id)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                );
              }
            })} */}
            </>
          </>

          {/* Butonlar ve uyarılar */}
          <>
            <div className="w-full flex justify-center items-center">
              {isOk === true ? (
                <BiCheckCircle className="transition duration-500" />
              ) : (
                <BiErrorCircle className="transition duration-500" />
              )}

              {!isClick && (
                <button
                  disabled={!isOk}
                  type="submit"
                  onClick={handleSubmit}
                  className={`${
                    isOk === false ? "bg-red-500" : "bg-green-500"
                  } rounded-lg p-3 transition duration-500 w-full`}
                >
                  {!isOk && selected.length < 1
                    ? "İşlemleri Tamamlayın!"
                    : "Blog Yazısını Yüklemek İçin Tıklayın!"}
                </button>
              )}
              {isClick && percent < 100 && (
                <button
                  disabled={!isUpload}
                  type="button"
                  className={`${
                    !isUpload ? "bg-red-500" : ""
                  } rounded-lg p-3 transition duration-500 w-full`}
                >
                  {!isUpload ? "Yükleniyor" : "Yükleniyor"}
                </button>
              )}
              {percent === 100 ? (
                <button
                  type="button"
                  className={`bg-green-500  rounded-lg p-3 transition duration-500 w-full text-white`}
                >
                  Başarıyla Yüklendi
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="w-full">
              <p
                className={`${
                  !data.title ? "text-red-500" : "text-green-500"
                } rounded-lg  transition duration-500`}
              >
                {!data.title
                  ? "* Yazıya başlık koymak zorunludur. "
                  : "Düzeltildi"}
              </p>
              <p
                className={`${
                  !data.content ? "text-red-500" : "text-green-500"
                } rounded-lg  transition duration-500`}
              >
                {!data.content
                  ? "* Yazıya içerik koymak zorunludur. "
                  : "Düzeltildi"}
              </p>
              <p
                className={`${
                  !data.tags ? "text-red-500" : "text-green-500"
                } rounded-lg  transition duration-500`}
              >
                {!data.tags
                  ? "* Yazıya etiket koymak zorunludur. "
                  : "Düzeltildi"}
              </p>
              <p
                className={`${
                  !file ? "text-red-500" : "text-green-500"
                } rounded-lg  transition duration-500`}
              >
                {!file
                  ? "* Blog Yazısına resim koymak zorunludur. "
                  : "Düzeltildi"}
              </p>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default MyBlogForm;
