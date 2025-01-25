import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://www.thebatman.com/images/share.jpg)`,
      }}
    >
      <div
        className="text-white text-xl  font-bold text-center w-full bg-white/30 p-3
        "
      >
        The Batman
      </div>
    </div>
  );
}

export default Banner;
