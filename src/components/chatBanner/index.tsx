import React from "react";
import DoubelTreuIcon from "../commons/icons/doubelTreuIcon";
import Image from "next/image";

const CheatBanner = () => {
  return (
    <div>
      <div className="w-full mt-4">
        <span className="text-sm text-brand-darkGray font-normal text-center w-full flex items-start justify-center  ">
          8/20/2020
        </span>

        <div className="flex flex-col items-end pr-4">
          <div className="bg-[#007AFF] rounded-md px-2 py-1 flex  relative">
            <Image
              src={"/assets/images/chateIcon.svg"}
              alt="img"
              width={15}
              height={39}
              className="absolute top-0 right-[-9px]"
            />

            <span className="text-sm text-white ">Hi team 👋</span>
            <div className="flex items-center justify-end gap-1 mt-5">
              <span className="text-xs text-white">11:31 AM</span>{" "}
              <DoubelTreuIcon />
            </div>
          </div>
          <div className="bg-[#007AFF] rounded-md px-2 py-1 flex  relative mt-2">
            <Image
              src={"/assets/images/chateIcon.svg"}
              alt="img"
              width={15}
              height={39}
              className="absolute top-0 right-[-9px] hidden"
            />

            <span className="text-sm text-white ">
              Anyone on for lunch today
            </span>
            <div className="flex items-center justify-end gap-1 mt-5">
              <span className="text-xs text-white">11:31 AM</span>
              <DoubelTreuIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatBanner;
