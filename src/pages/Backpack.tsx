import { useState, useEffect, useContext } from "react";
import { supabase } from "../services/supabaseClient";

import Tango from "../assets/tango-icon.png";
import HealingSalve from "../assets/healing-salve-icon.png";
import Armory from "../assets/armory.png";
import GoldIcon from "../assets/gold-icon.png";
import ProfileIcon from "../assets/profile-icon-place-holder.png";

import BackpackItem from "../components/BackpackItem";
import StashItem from "../components/StashItem";
import { AuthContext } from "../context/AuthContext";

export default function Backpack() {
  const { loading, user } = useContext(AuthContext);

  function getEmailUsername(email?: string) {
    if (!email) {
      return "Unknown"
    } 
    return email.split("@")[0];
  }

  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const { data, error } = await supabase.from("backpack").select(`
      id, 
      items!item1_id(name),
    `);
    if (error) {
      console.log(error);
    } else {
      // setItems(data);
      console.log(data)
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <header className="flex justify-around items-center text-7xl w-3/5 mx-auto -mt-14">
        <h1 className="text-neutral-300 font-semibold text-4xl lg:text-6xl">
          Armory
        </h1>
        <img className="h-48" src={Armory} alt="" />
      </header>

      <div className="xl:px-24 py-8 xl:w-3/5 w-3/4 h-fit bg-neutral-200 mx-auto rounded-lg">
        <div className="flex">
          <div className="flex flex-col items-center mx-auto">
            <h2 className="flex justify-around pt-6 font-bold text-2xl">
              {user ? getEmailUsername(user.email) : "Loading..."}
            </h2>
            <img
              className="rounded-full my-3 md:w-[14rem] md:h-[14rem] w-[10rem] h-[10rem]"
              src={ProfileIcon}
              alt=""
            />
            <p className="flex justify-center items-center text-lg">
              Total gold: 600{" "}
              <img className="w-[10%] lg:w-[15%]" src={GoldIcon} alt="" />
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mx-auto">
            <h2 className="flex justify-around pt-6 text-xl">Equipped</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 pt-6 mx-auto">
              {/* {items.map((item: any) => (
        <BackpackItem
          key={item.id}
          ItemName={item.items.name}
          ItemImage={Tango}
          Stock={item.items.stock}
          Price={item.items.price}
        />
      ))} */}
              <BackpackItem
                key={1}
                ItemName={"Tango"}
                ItemImage={Tango}
                Quantity={10}
                Price={90}
              />
              <BackpackItem
                key={2}
                ItemName={"Tango"}
                ItemImage={HealingSalve}
                Quantity={10}
                Price={90}
              />
              <BackpackItem
                key={3}
                ItemName={"Tango"}
                ItemImage={Tango}
                Quantity={10}
                Price={90}
              />
              <BackpackItem
                key={4}
                ItemName={"Tango"}
                ItemImage={HealingSalve}
                Quantity={10}
                Price={90}
              />
              <BackpackItem
                key={5}
                ItemName={"Tango"}
                ItemImage={Tango}
                Quantity={10}
                Price={90}
              />
              <BackpackItem
                key={6}
                ItemName={null}
                ItemImage={null}
                Quantity={null}
                Price={null}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-12">
          <h2 className="flex justify-around pt-6 text-xl">Stash</h2>
          <div className="flex grid grid-cols-3 lg:grid-cols-6 gap-3 pt-6 mx-auto">
            <BackpackItem
              key={1}
              ItemName={null}
              ItemImage={null}
              Quantity={null}
              Price={null}
            />
             <BackpackItem
                key={2}
                ItemName={null}
                ItemImage={null}
                Quantity={null}
                Price={null}
              />
               <BackpackItem
                key={3}
                ItemName={null}
                ItemImage={null}
                Quantity={null}
                Price={4}
              />
               <BackpackItem
                key={5}
                ItemName={null}
                ItemImage={null}
                Quantity={null}
                Price={null}
              />
               <BackpackItem
                key={6}
                ItemName={null}
                ItemImage={null}
                Quantity={null}
                Price={null}
              />
               <BackpackItem
                key={7}
                ItemName={null}
                ItemImage={null}
                Quantity={null}
                Price={null}
              />
          </div>
          <button
              className={`mt-10 w-1/3 py-2 px-4 rounded bg-red-800 text-white hover:bg-red-600`}
            >
              <span className="text-xl">Save!</span>
            </button>
        </div>
      </div>
    </div>
  );
}
