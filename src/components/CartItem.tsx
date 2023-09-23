import { useState } from "react";

interface CartItemType {
  ItemImage: string;
  ItemName: string;
  ItemOnCart: number;
  ItemStock: number;
  ItemPrice: number;
  reload: boolean;
  setReload: (reload: boolean) => void;
}

export default function CartItem({
  ItemImage,
  ItemName,
  ItemOnCart,
  ItemStock,
  ItemPrice,
  reload,
  setReload,
}: CartItemType) {
  const [quantity, setQuantity] = useState(ItemOnCart);

  const cartItems = () => {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  };

  interface Item {
    quantity: number
  }

  const itemIndex = cartItems().findIndex(
    (item: CartItemType) => item.ItemName === ItemName
  );

  const increaseQuantity = () => {
    if (quantity < ItemStock) {
      setQuantity(quantity + 1);
      const updatedQuantity = cartItems().map(
        (item: Item, i: number) => {
          if (i == itemIndex) {
            item.quantity++;
          }
          return item;
        }
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedQuantity));
      setReload(!reload);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const updatedQuantity = cartItems().map((item: Item, i: number) => {
        if (i == itemIndex) {
          item.quantity--;
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedQuantity));
      setReload(!reload);
    }
  };

  const removeItem = () => {
    if (itemIndex !== -1) {
      const updatedCartItems = cartItems().filter(
        (item: CartItemType) => item.ItemName !== ItemName
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      // setQuantity(0);
      setReload(!reload);
    }
  };

  return (
    <>
      {!quantity ? null : (
        <div className="grid grid-cols-5 justify-items-center items-center mx-auto w-[85%] mb-6 pb-6 border-b-2 border-neutral-400">
          <div className="bg-neutral-300 p-4 rounded-lg flex justify-between items-center w-full">
            <div className="sm:w-[5rem] sm:h-[4rem] w-[3rem] h-[2.5rem]">
              <img
                className="h-full w-full object-cover"
                src={ItemImage}
                alt=""
              />
            </div>
            <p>{ItemName}</p>
          </div>
          <p className="flex justify-center items-center border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12">
            {ItemStock}
          </p>
          <div className="flex">
            <button
              className="bg-neutral-800 border-solid border border-neutral-800 rounded text-neutral-100 w-12 h-12
        hover:font-bold hover:text-white hover:bg-neutral-700"
              onClick={increaseQuantity}
            >
              +
            </button>
            <p className="flex justify-center items-center border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12">
              {quantity}
            </p>
            <button
              className="bg-neutral-300 border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12
        hover:font-bold hover:text-black hover:bg-neutral-400"
              onClick={decreaseQuantity}
            >
              -
            </button>
          </div>
          <button
            className="border-solid border border-neutral-800 rounded text-neutral-800 w-12 h-12
      hover:font-bold hover:text-black hover:bg-red-600"
            onClick={removeItem}
          >
            x
          </button>
          <p>{ItemPrice} gold</p>
        </div>
      )}
    </>
  );
}
