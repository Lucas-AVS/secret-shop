interface CartItemType {
  ItemImage: string;
  ItemName: string;
  ItemOnCart: number;
  ItemStock: number;
  ItemPrice: number;
}

// export interface CartItemProps {
//     item: CartItemType;
// }

export default function CartItem({
  ItemImage,
  ItemName,
  ItemOnCart,
  ItemStock,
  ItemPrice,
}: CartItemType) {
  return (
    <div className="grid grid-cols-5 justify-items-center items-center mx-auto w-[85%] mb-6 pb-6 border-b-2 border-neutral-400">
      <div className="bg-neutral-300 p-4 rounded-lg flex justify-items-center items-center gap-5">
        <img className="lg:h-20 h-16" src={ItemImage} alt="" />
        <p>{ItemName}</p>
      </div>
      <p className="flex justify-center items-center border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12">
        {ItemStock}
      </p>
      <div className="flex">
        <button
          className="bg-neutral-800 border-solid border border-neutral-800 rounded text-neutral-100 w-12 h-12
        hover:font-bold hover:text-white hover:bg-neutral-700"
        >
          +
        </button>
        <p className="flex justify-center items-center border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12">
          {ItemOnCart}
        </p>
        <button
          className="bg-neutral-300 border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12
        hover:font-bold hover:text-black hover:bg-neutral-400"
        >
          -
        </button>
      </div>
      <button
        className="border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12
      hover:font-bold hover:text-black hover:bg-red-600"
      >
        x
      </button>
      <p>{ItemPrice} gold</p>
    </div>
  );
}
