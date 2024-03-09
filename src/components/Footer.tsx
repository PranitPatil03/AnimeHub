import Image from "next/image";
import React from "react";
import { instagram, logo, twitter } from "../../public";

const Footer = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2024 AnimeHub</p>
      <Image
        src={logo}
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src={instagram}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={twitter}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
