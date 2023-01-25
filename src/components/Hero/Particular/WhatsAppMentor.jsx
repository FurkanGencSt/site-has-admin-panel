import React from "react";
import WpCard from "../../Cards/WpCard";
import wp1 from "../../../assets/pictures/wp_photos/WhatsAppMentörlük1.webp";
import wp2 from "../../../assets/pictures/wp_photos/WhatsAppMentörlük2.webp";
import wp3 from "../../../assets/pictures/wp_photos/WhatsAppMentörlük3.webp";
import wp4 from "../../../assets/pictures/wp_photos/WhatsAppMentörlük4.webp";

const WhatsAppMentor = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-y-4">
        <WpCard
          imagePath={wp1}
          title="Full Mentörlük Öğrencisi"
          description="Kariyer hedeflerinizi gerçekleştirmek için gereken becerileri öğrenin."
        />
        <WpCard
          imagePath={wp2}
          title="Başka Bir Mentörlük Öğrencisi Daha!"
          description="Mentörlük ile kişisel gelişiminizi hızlandırın."
        />
        <WpCard
          imagePath={wp3}
          title="Mentörlük Öğrencisi"
          description="Sorunlarınızı çözmek ve kararlar almak için deneyimli bir danışman."
        />
        <WpCard
          imagePath={wp4}
          title="Sende Kadınlara Yaklaşma Korkunu Yenmek İster Misin?"
          description="Başarı hikayelerinden ilham alın ve uygulamalı öğrenin."
        />
      </div>
    </>
  );
};

export default WhatsAppMentor;
