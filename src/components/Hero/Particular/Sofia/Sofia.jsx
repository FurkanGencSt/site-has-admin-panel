import React from "react";
import PersonCard from "../../../Cards/PersonCard.jsx";
import sofia from "../../../../assets/pictures/sofia.webp";
import "./sofia.css";
const Sofia = () => {
  return (
    <>
      <div className="hidden md:flex h-screen w-full justify-between sofia">
        <div className="w-2/5">
          <img
            src={sofia}
            alt="O erkek ol"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-3/5 text-center flex justify-center items-start pt-[25vh]">
          <div className=" flex flex-col gap-6 ml-10 mt-10 ">
            <h1 className="w-full text-black ">
              STİL DANIŞMANI, YARDIMCI ASİSTAN
            </h1>
            <h2 className="w-full text-black text-5xl ">
              Sofiya, Mentorlukta stil danışmanlığı ve sosyal medya tasarımı
              konusunda destek veriyor
            </h2>
          </div>
        </div>
      </div>
      <PersonCard
        photoPath={sofia}
        title="STİL DANIŞMANI, YARDIMCI ASİSTAN
"
        description="  Sofiya, Mentorlukta stil danışmanlığı ve sosyal medya tasarımı
              konusunda destek veriyor"
      />
    </>
  );
};

export default Sofia;
