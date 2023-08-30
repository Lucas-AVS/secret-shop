import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { loading, user } = useContext(AuthContext);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeNav = () => {
    setTimeout(() => {
      setIsNavExpanded(false);
    }, 100);
  };

  const handleSignOut = async () => {
    const confirmSignOut = window.confirm("Are you sure you want to log out?");

    if (confirmSignOut) {
      console.log("Logging out...");
      try {
        await supabase.auth.signOut();
        console.log("Logout successful");
        window.location.href = "/";
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  function NavButton() {
    if (!user) {
      return <div></div>;
    }
    return (
      <button className="text-white" onClick={toggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="flex justify-between items-start py-4 px-8 bg-neutral-800 h-14">
      {isNavExpanded ? (
        <div>
          <NavButton></NavButton>
          <ul className="absolute flex flex-col justify-center items-start rounded bg-neutral-200 p-3">
            <li>
              <a
                className="hover:bg-neutral-500 cursor-pointer"
                onClick={() => {
                  navigate("/");
                  closeNav();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:bg-neutral-500 cursor-pointer"
                onClick={() => {
                  navigate("/bag");
                  closeNav();
                }}
              >
                Backpack
              </a>
            </li>
            <li>
              <a
                className="hover:bg-neutral-500 cursor-pointer"
                onClick={() => {
                  navigate("/shop");
                  closeNav();
                }}
              >
                Shopping
              </a>
            </li>
            <li>
              <a
                className="hover:bg-neutral-500 cursor-pointer"
                onClick={() => {
                  navigate("/cart");
                  closeNav();
                }}
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <NavButton></NavButton>
      )}
      {!user ? (
        <a
          className="text-neutral-200 font-bold hover:text-neutral-white cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </a>
      ) : (
        <a
          className="text-neutral-200 font-bold hover:text-neutral-white cursor-pointer"
          onClick={handleSignOut}
        >
          Signout
        </a>
      )}
    </div>
  );
}
