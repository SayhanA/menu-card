
const Banner = ({ name, text }) => {
  // console.log(text)
  return (
    <div className="">
      {/* <FaBookmark className="text-yellow-300 text-[40px] rotate-90 absolute" /> */}

      <div className={`bg-yellow-300 border border-black uppercase font-extrabold flex justify-between ${text ? "text-[18px] h-[30px] w-[230px] " : "text-2xl h-[40px] w-[270px] py-1"} `}>
        <div className="flex flex-col gap-[1.2px] ml-1">
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
        </div>
        <p style={{letterSpacing: "-1px",}}>{name}</p>
        <div className="flex flex-col gap-[1.2px] ml-1 rotate-180">
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
          <hr className="border-black border-[1px] w-[4px]" />
          <hr className="border-black border-[1px] w-[8px]" />
        </div>
      </div>

      {/* <FaBookmark className="text-yellow-300 text-[40px] -rotate-90 absolute" /> */}
    </div>
  );
};

export default Banner;
