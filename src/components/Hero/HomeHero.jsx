import React from "react";
import { ContentArea } from "../Cards/ContentArea.jsx";
import Extras from "../Cards/Extras.jsx";
import Alex from "./Particular/Alex/Alex.jsx";
import HomeMentorPic from "./Particular/HomeMentorPic";
import Sofia from "./Particular/Sofia/Sofia.jsx";
import WhatsAppMentor from "./Particular/WhatsAppMentor";
import WhatsAppHr from "../Hr/WhatsAppHr.jsx";
const HomeHero = () => {
  return (
    <div className="w-full flex flex-col gap-4 ">
      <Alex />
      <Sofia />
      <HomeMentorPic />
      <WhatsAppHr />

      <h1 className="w-full flex justify-center text-2xl sm:text-5xl mx-auto">
        Eğitimin İçeriği
      </h1>
      <ContentArea />
      <WhatsAppHr />

      <h1 className="w-full flex justify-center text-2xl sm:text-5xl mx-auto">
        Ekstralar
      </h1>
      <Extras />
      <WhatsAppHr />

      <h1 className="w-full flex justify-center text-2xl sm:text-5xl mx-auto">
        İşimizde İyiyiz!
      </h1>
      <WhatsAppHr />
      <WhatsAppMentor />
    </div>
  );
};

export default HomeHero;
