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
      <div className="flex gap-5 items-center">
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
        {/* <div>
          <button
            type="button"
            className="relative inline-flex items-center p-1 text-2xl font-medium text-center text-neutral-200 hover:text-white focus:ring-white"
          >
            <svg
              viewBox="0 0 448 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M256 32v17.88C328.5 61.39 384 124.2 384 200v33.4c0 45.4 15.5 89.5 43.8 125l14.9 18.6c5.8 7.2 6.9 17.1 2.9 25.4-4 8.3-12.4 13.6-21.6 13.6H24c-9.23 0-17.635-5.3-21.631-13.6A24.019 24.019 0 015.26 377l14.91-18.6C48.54 322.9 64 278.8 64 233.4V200c0-75.8 55.5-138.61 128-150.12V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-40 64c-57.4 0-104 46.6-104 104v33.4c0 47.9-13.88 94.6-39.69 134.6H375.7c-25.8-40-39.7-86.7-39.7-134.6V200c0-57.4-46.6-104-104-104h-16zm72 352c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128z" />
            </svg>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-neutral-200 bg-red-500 border-2 border-neutral-200 rounded-full -top-2 -right-2 dark:border-gray-900">
              20
            </div>
          </button>
        </div> */}
      </div>
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
