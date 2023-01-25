import React from "react";
import { MentonKonuları1, MentonKonuları2 } from "../../assets/Json/CardInfo";
import { BsCheck2All } from "react-icons/bs";

const Extras = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-2">
      {" "}
      {MentonKonuları1.map((item, index) => {
        return (
          <div className="flex">
            <BsCheck2All className="w-[10%] " size={20} />
            <div className="w-full flex justify-start mx-3 gap-3 text-[24px]">
              <h2 className="text-[24px]">{item}</h2>
            </div>
          </div>
        );
      })}
      {MentonKonuları2.map((item, index) => {
        return (
          <div className="flex">
            <BsCheck2All className="w-[10%] " size={20} />
            <div className="w-full flex justify-start mx-3 gap-3 text-[24px]">
              <h2 className="text-[24px]">{item}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Extras;
