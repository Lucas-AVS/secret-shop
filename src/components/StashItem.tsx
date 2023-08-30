import { useState } from "react";
import GoldIcon from "../assets/gold-icon.png";

interface StashProps {
  ItemName: string | null;
  ItemImage: string | undefined;
  Quantity: number | null;
  Price: number | null;
}

export default function Stash({
  ItemName,
  ItemImage,
  Quantity,
  Price,
}: StashProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="bg-neutral-600 rounded-sm relative md:w-[8.125rem] md:h-[6.25rem] w-[6.25rem] h-[5rem]">
      <div
        className="flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <img
          className="p-1 absolute inset-0 w-full h-full object-cover"
          src={ItemImage}
          alt=""
        />
        {clicked && (
          <div className="absolute -top-10 -right-10 p-1 bg-white/50 shadow-md z-10">
            <div className="flex justify-center items-center font-bold">
              {ItemName}
            </div>
            <div className="flex justify-center items-center">
              Value: {Price}
              <img className="w-[10%] lg:w-[15%]" src={GoldIcon} alt="" />
            </div>
            <button className="flex justify-center items-center hover:bg-neutral-500">
              Sell for: {Price ? Price / 2 : null}
              <img className="w-[10%] lg:w-[15%]" src={GoldIcon} alt="" />
            </button>
          </div>
        )}
        <div className="absolute bottom-0 right-0 mr-3 mb-1 text-sky-600 font-semibold text-xl">
          {Quantity}
        </div>
      </div>
    </div>
  );
}
