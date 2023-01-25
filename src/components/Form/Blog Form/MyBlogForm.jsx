import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../../utils/firebase.utils";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
const MyBlogForm = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const [percent, setPercent] = useState(0);
  const [isOk, setIsOk] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
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
    if (data.title && data.content && data.tags && file) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [data, file]);

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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-[75%] sm:w-96 justify-start mb-[10%] items-end mt-[10%] gap-1 mx-auto border-4 border-black p-2 border-dashed"
      >
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="border-2 border-black rounded-md px-2  w-full py-2"
        />
        <input
          type="text"
          name="content"
          value={data.content}
          onChange={handleChange}
          className="border-2 border-black rounded-md px-2  w-full py-2"
        />
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleFileChange}
          className="border-2 border-black rounded-md px-2  w-full py-2"
        />
        <input
          type="text"
          name="tags"
          value={data.tags}
          onChange={handleChange}
          className="border-2 border-black rounded-md px-2  w-full py-2"
        />
        {percent}
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
              className={`${
                isOk === false ? "bg-red-500" : "bg-green-500"
              } rounded-lg p-3 transition duration-500 w-full`}
            >
              {!isOk
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
            {!data.title ? "* Yazıya başlık koymak zorunludur. " : "Düzeltildi"}
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
            {!data.tags ? "* Yazıya etiket koymak zorunludur. " : "Düzeltildi"}
          </p>
          <p
            className={`${
              !file ? "text-red-500" : "text-green-500"
            } rounded-lg  transition duration-500`}
          >
            {!file ? "* Blog Yazısına resim koymak zorunludur. " : "Düzeltildi"}
          </p>
        </div>
      </form>
    </>
  );
};

export default MyBlogForm;
