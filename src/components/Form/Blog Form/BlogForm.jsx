import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import Navbar from "../../header/Navbar";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../utils/firebase.utils";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase.utils";
export default function BlogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selected, setSelected] = useState(["papatya"]);
  const [file, setFile] = useState("");
  const [deneme, setDeneme] = useState();

  const [percent, setPercent] = useState(0);
  const [data, setData] = useState();
  const onSubmit = (props) => {
    setData(props);
    data.Title = props.Title;
    data.tags = selected;

    afterSubmit().then(() => {});
  };
  useEffect(() => {
    console.log(handleSubmit);
  }, [handleSubmit]);

  function turkceCumleDegistir(cumle) {
    var cumleDegistir = cumle
      .replace(/ /g, "-")
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u");
    return cumleDegistir;
  }

  async function afterSubmit() {
    // Tag verilerini objeye koymak
    setDeneme(turkceCumleDegistir(data.Title));

    var picture = file;

    // Yazının başlığı ile storage de dosya oluşturmak.
    const storageRef = ref(storage, `/Blog Resimleri/${data.Title}`);
    // Fotoğrafı bu klasöre yüklemek
    const uploadTask = uploadBytesResumable(storageRef, picture);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),

      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        data.photoUrl = url;
        setTimeout(function () {
          if (data.photoUrl) {
            const docRef = doc(db, "Blog Yazıları", data.Title);
            setDoc(docRef, data)
              .then((docRef) => {
                console.log(
                  "A New Document Field has been added to an existing document"
                );
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }, 3000);
      })
    );

    console.log(errors);
  }
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <Navbar />
      {deneme}
      <form
        className=" flex flex-col w-[75%] sm:w-96 justify-start items-end mt-[10%] gap-1 mx-auto border-4 border-black p-2 border-dashed"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-2 border-black rounded-md px-2  w-full py-2"
          type="text"
          placeholder="Başlık"
          {...register("Title", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          className="border-2 border-black rounded-md px-2  w-full py-2"
          placeholder="İçerik"
        />

        <div>
          <label>Blog Fotoğrafı Seç</label>
          <input type="file" accept="image/*" onChange={handleChange} />
        </div>
        <div className="w-full">
          <label>Kategori Seç</label>
          <select
            className="border-2 border-black rounded-md px-2  w-full py-2"
            {...register("Categories", { required: true })}
          >
            <option value="Flört">Flört</option>
            <option value="Kadın-Erkek">Kadın-Erkek</option>
            <option value="Moda">Moda</option>
            <option value="Sağlık">Sağlık</option>
          </select>
        </div>
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="fruits"
          classNames="w-full"
          placeHolder="Blog Yazısı İçin Etiket Belirle Ardından Enter'a B"
        />
        {percent}
        <button type="submit" colorScheme="pink">
          Pink
        </button>
      </form>
    </>
  );
}
