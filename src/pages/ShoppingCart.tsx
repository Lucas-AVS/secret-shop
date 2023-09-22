import CartItem from "../components/CartItem";
import Techies from "../assets/techies-shopping-cart.png";
import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
// import Tango from "../assets/tango-icon.png";
// import HealingSalve from "../assets/healing-salve-icon.png";
// import Clarity from "../assets/clarity-icon.png";
// import Bottle from "../assets/bottle-icon.png";

export default function ShoppingCart() {
  const [reload, setReload] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    if (localCartItems) {
      setCartItems(localCartItems);
    }
  }, [reload]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let currentPrice = 0;
      cartItems.forEach((item) => {
        currentPrice += item.Price * item.quantity;
      });
      return currentPrice;
    };

    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  async function handleCheckout() {
    const itemPayload = [
      { item_id: 1, item_quantity: 3 },
      { item_id: 2, item_quantity: 2 },
      { item_id: 3, item_quantity: 4 },
      { item_id: 4, item_quantity: 1 },
    ];

    const { data, error } = await supabase.functions.invoke("firstNoUsedSlot", {
      body: itemPayload,
    });
    console.log(data);
    console.log(error);
  }

  return (
    <>
      <header className="flex justify-center items-center text-7xl w-5/6 mx-auto -mt-14">
        <h1 className="font-bold">
          <span className="text-yellow-400">My</span>{" "}
          <span className="text-slate-400">Shop</span>
          <span className="text-sky-400">ping</span>{" "}
          <span className="text-yellow-800">Cart</span>
        </h1>
        <img className="h-72" src={Techies} alt="" />
      </header>
      <div className="w-3/4 h-fit bg-neutral-200 mx-auto rounded-lg text-sm sm:text-base">
        <header className="grid grid-cols-5 justify-items-center items-center w-[85%] mt-10 mb-6 mx-auto pb-6 border-b-2 border-neutral-400">
          <p>item</p>
          <p>stock</p>
          <p>quantity</p>
          <p>remove</p>
          <p>price</p>
        </header>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            ItemImage={item.ItemImage}
            ItemName={item.ItemName}
            ItemOnCart={item.quantity}
            ItemStock={item.Stock}
            ItemPrice={item.Price}
            reload={reload}
            setReload={setReload}
          />
        ))}
        <div className="flex justify-end items-center gap-16 mx-auto my-12 w-[85%]">
          <p>Your gold: 999</p>
          <p>{totalPrice}</p>
          <button
            className="bg-amber-300 hover:bg-amber-400 border-neutral-800 border-dashed border-2 w-40 h-12 flex justify-center items-center"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
