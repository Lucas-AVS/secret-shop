import DotaLogo from "../assets/dota-logo.png";
import ShoppingItem from "../components/ShoppingItem";
import Tango from "../assets/tango-icon.png";
import HealingSalve from "../assets/healing-salve-icon.png";
import Clarity from "../assets/clarity-icon.png";
import Bottle from "../assets/bottle-icon.png";

export default function ShoppingList() {
  return (
    <>
      <div className="grid grid-cols-3 items-center w-3/4 h-1/5 mx-auto">
        <div>
          <h1 className="text-neutral-400 lg:text-2xl col-span-3 text-center">
            GET YOUR <br /> GEAR HERE!
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[15%] lg:w-[9%] absolute" src={DotaLogo} alt="" />
        </div>
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-neutral-400 scale-[1] lg:scale-[1.3]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <div className="w-3/4 h-fit bg-neutral-200 px-2 py-6 -mt-12 mx-auto rounded-lg">
        <header className="sm:grid-cols-4 grid grid-cols-2 items-center pb-6 border-b-2 border-neutral-400">
          <button className="hover:font-bold">Consumables</button>
          <button className="hover:font-bold">Support</button>
          <button className="hover:font-bold">Weapons</button>
          <button className="hover:font-bold">Armor</button>
        </header>
        <div>
          <h2 className="flex justify-around pt-6">Consumables</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 pt-6 mx-auto">
            <ShoppingItem
              ItemName="Tango"
              ItemImage={Tango}
              Stock={10}
              Price={90}
            />
            <ShoppingItem
              ItemName="Healing Salve"
              ItemImage={HealingSalve}
              Stock={10}
              Price={100}
            />
            <ShoppingItem
              ItemName="Clarity"
              ItemImage={Clarity}
              Stock={10}
              Price={50}
            />
            <ShoppingItem
              ItemName="Bottle"
              ItemImage={Bottle}
              Stock={10}
              Price={675}
            />
          </div>
        </div>
      </div>
    </>
  );
}
