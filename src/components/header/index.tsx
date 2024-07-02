import React from "react";
import Image from "next/image";
import DotsIcon from "../commons/icons/dotsIcon";

const Header = () => {
  const imageList = [
    {
      src: "/images/avatar-1.png",
      alt: "Avatar 1",
    },
    {
      src: "/images/avatar-2.png",
      alt: "Avatar 2",
    },
    {
      src: "/images/avatar-3.png",
      alt: "Avatar 3",
    },
    {
      src: "/images/avatar-4.png",
      alt: "Avatar 4",
    },
  ];

  return (
    <div>
      <div className="max-w-[656px] w-full m-auto max-h-[960px] h-full overflow-auto py-[21px] px-[13px] ">
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2 overflow-hidden">
            {imageList?.map((image, index) => (
              <Image
                key={index}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                alt={image.alt}
                width={24}
                height={24}
                src={image.src}
              />
            ))}
          </div>
          <div className="flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-zinc-800 text-sm font-semibold leading-[18px]">
              🦄 Team Unicorns
            </div>
            <div className="text-neutral-500 text-xs font-normal">
              last seen 45 minutes ago
            </div>
          </div>
          <div className="cursor-pointer">
            <DotsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
