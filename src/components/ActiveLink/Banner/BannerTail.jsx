import { FaBookmark } from "react-icons/fa";

const BannerTail = ({name}) => {
  return (
    <div className="flex relative w-[285px]">
      <FaBookmark className="text-yellow-300 text-[40px] rotate-90 absolute" />

      <div className="bg-yellow-300 w-[250px] px-[1px] border border-black uppercase text-2xl font-extrabold flex justify-between absolute z-10 -top-2 left-[50%] translate-x-[-50%]">
        <div className="flex flex-col gap-[1.2px] ml-1">
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
        </div>
        <p style={{letterSpacing: "-1px",}}>{name}</p>
        <div className="flex flex-col gap-[1.2px] ml-1 rotate-180">
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
          <hr className="border-black border-[1.5px] w-[4px]" />
          <hr className="border-black border-[1.5px] w-[8px]" />
        </div>
      </div>

      <FaBookmark className="text-yellow-300 text-[40px] -rotate-90 absolute right-0" />
    </div>
  );
};

export default BannerTail;
