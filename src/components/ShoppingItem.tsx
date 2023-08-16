import GoldIcon from "../assets/gold-icon.png";

interface ShoppingItemProps {
  ItemName: string;
  ItemImage: string;
  Stock: number;
  Price: number;
}

export default function ShoppingItem({
  ItemName,
  ItemImage,
  Stock,
  Price,
}: ShoppingItemProps) {
  return (
    <div>
      <div className="bg-neutral-300 rounded-sm flex flex-col justify-center items-center pb-3.5">
        <div className="font-bold">{ItemName}</div>
        <img className="lg:h-14 h-12" src={ItemImage} alt="" />
        <div>stock: {Stock}</div>
        <div className="flex justify-center items-center">
          price: {Price}
          <img className="w-[10%] lg:w-[15%]" src={GoldIcon} alt="" />
        </div>
      </div>
      <button className="bg-amber-300 hover:bg-amber-400 border-neutral-800 border-dashed border-2 w-1/2 flex justify-center items-center mx-auto -mt-3.5">
        add to cart
      </button>
    </div>
  );
}
