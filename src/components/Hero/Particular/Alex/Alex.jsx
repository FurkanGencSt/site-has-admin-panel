import React from "react";
import { Typewriter } from "react-simple-typewriter";
import PersonCard from "../../../Cards/PersonCard.jsx";
import alex from "../../../../assets/pictures/alex.webp";
import "./alex.css";
const Alex = () => {
  return (
    <>
      <div className="alex hidden md:flex h-screen w-full justify-between">
        <div className="font-semibold w-3/5 text-center flex justify-center items-start pt-[25vh]">
          <div className=" flex flex-col gap-6 ml-10 mt-10 ">
            <h1 className="w-full text-black ">KURUCU, YAZAR, MENTOR</h1>
            <h2 className="w-full text-black text-5xl ">
              Alex,{" "}
              <span className="underline decoration-solid ">O Erkek Ol </span>{" "}
              markasının <br />
              <Typewriter
                words={["Kurucusudur.", "Yöneticisidir.", "Eğitmenidir."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>
        </div>
        <div className="w-2/5">
          <img
            src={alex}
            alt="O erkek ol"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <PersonCard
        photoPath={alex}
        title="KURUCU, YAZAR, MENTOR"
        description="Alex O Erkek Ol markasının kurucusu, yöneticisi ve eğitmenidir."
      />
    </>
  );
};

export default Alex;
