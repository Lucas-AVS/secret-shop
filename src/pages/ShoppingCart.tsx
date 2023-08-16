import CartItem from "../components/CartItem";
import Techies from "../assets/techies-shopping-cart.png";
import Tango from "../assets/tango-icon.png";
import HealingSalve from "../assets/healing-salve-icon.png";
import Clarity from "../assets/clarity-icon.png";
import Bottle from "../assets/bottle-icon.png";

export default function ShoppingCart() {
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
      <div className="w-3/4 h-fit bg-neutral-200 mx-auto rounded-lg">
        <header className="grid grid-cols-5 justify-items-center items-center w-[85%] mt-10 mb-6 mx-auto pb-6 border-b-2 border-neutral-400">
          <p>item</p>
          <p>stock</p>
          <p>quantity</p>
          <p>remove</p>
          <p>price</p>
        </header>
        <CartItem
          ItemImage={Tango}
          ItemName="Tango"
          ItemOnCart={1}
          ItemStock={10}
          ItemPrice={90}
        />
        <CartItem
          ItemImage={HealingSalve}
          ItemName="Tango"
          ItemOnCart={1}
          ItemStock={10}
          ItemPrice={100}
        />
        <CartItem
          ItemImage={Clarity}
          ItemName="Tango"
          ItemOnCart={1}
          ItemStock={50}
          ItemPrice={90}
        />
        <CartItem
          ItemImage={Bottle}
          ItemName="Tango"
          ItemOnCart={1}
          ItemStock={10}
          ItemPrice={675}
        />
        <div className="flex justify-end items-center gap-16 mx-auto my-12 w-[85%]">
          <p>Your gold: 999</p>
          <p>Total: 90</p>
          <button className="bg-amber-300 hover:bg-amber-400 border-neutral-800 border-dashed border-2 w-40 h-12 flex justify-center items-center">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
