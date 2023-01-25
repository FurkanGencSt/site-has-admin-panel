import React from "react";
const Content = ({ text }) => {
  return (
    <div className="w-full flex justify-center mx-3 gap-3">
      <h2 className="text-[24px]">{text}</h2>
    </div>
  );
};

export default Content;
