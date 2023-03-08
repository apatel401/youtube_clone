import React from "react";

const Chatmsg = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img src="./user.png" alt="user" className="my-2 h-4" />
      <span className="text-xs min-w-[75px] mx-2 font-semibold">{name}</span>
      <span className="text-xs">{message}</span>
    </div>
  );
};

export default Chatmsg;
