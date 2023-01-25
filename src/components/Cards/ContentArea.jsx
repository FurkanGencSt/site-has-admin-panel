import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Content from "./Content";
import { Zihinsel } from "../../assets/Json/CardInfo";
import { Kişisel } from "../../assets/Json/CardInfo";
import { Sevgili } from "../../assets/Json/CardInfo";

export const ContentArea = () => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
      <div className="w-full bg-[#e4eff8] p-2 border-4 rounded-md flex flex-col justify-start items-start">
        <h1 className="mx-auto flex justify-center">
          Zihinsel Arınma ve Gelişim
        </h1>
        {Zihinsel.map((item, index) => {
          return (
            <div className="flex">
              <AiOutlineCheckSquare
                className="w-[10vw] sm:w-[3vw] mt-[2%]"
                size={20}
              />
              <Content text={item} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col justify-start items-start bg-[#e4eff8] p-2 border-4 rounded-md ">
        <h1 className="mx-auto flex justify-center">
          Kişisel Strateji ve Gelişim
        </h1>
        {Kişisel.map((item, index) => {
          return (
            <div className="flex">
              <AiOutlineCheckSquare
                className="w-[10vw] sm:w-[3vw]  mt-[2%]"
                size={20}
              />
              <Content text={item} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col justify-start items-start bg-[#e4eff8] p-2 border-4 rounded-md ">
        <h1 className="mx-auto flex justify-center">
          Sevgili Oyunu ve İlişki Yürütme
        </h1>
        {Sevgili.map((item, index) => {
          return (
            <div className="flex">
              <AiOutlineCheckSquare
                className="w-[10vw] sm:w-[3vw]  mt-[2%] "
                size={20}
              />
              <Content text={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
