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
  const addToCart = () => {
    const cartItem = { ItemName, ItemImage, Stock, Price, quantity: 1 };
    const existingCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    const itemIndex = existingCartItems.findIndex(
      (item: ShoppingItemProps) => item.ItemName === cartItem.ItemName
    );

    if (itemIndex !== -1) {
      existingCartItems[itemIndex].quantity += 1;
    } else {
      existingCartItems.push(cartItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    const updatedStock = Stock - 1;
    localStorage.setItem(ItemName + "_stock", updatedStock.toString());
  };

  return (
    <div>
      <div className="bg-neutral-300 rounded-sm flex flex-col justify-center items-center pb-3.5">
        <div className="font-bold text-sm sm:text-base">{ItemName}</div>
        <div className="p-1 sm:w-[5rem] sm:h-[4rem] w-[3rem] h-[2.5rem]">
          <img className="w-full h-full object-cover" src={ItemImage} alt="" />
        </div>
        <div className="text-xs sm:text-base">stock: {Stock}</div>
        <div className="flex justify-center items-center text-xs sm:text-base">
          price: {Price}
          <img className="w-[10%] lg:w-[15%]" src={GoldIcon} alt="" />
        </div>
      </div>
      <button
        onClick={addToCart}
        className="bg-amber-300 hover:bg-amber-400 border-neutral-800 border-dashed border-2 w-1/2 flex justify-center items-center mx-auto -mt-3.5 text-xs sm:text-base"
      >
        add to cart
      </button>
    </div>
  );
}
