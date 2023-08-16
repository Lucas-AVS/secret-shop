import { useState } from "react";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeNav = () => {
    setTimeout(() => {
      setIsNavExpanded(false);
    }, 100);
  };

  const navButton = (
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

  return (
    <div className="flex justify-between items-start py-4 px-8 bg-neutral-800 h-14">
      {isNavExpanded ? (
        <div>
          {navButton}
          <ul className="absolute flex flex-col justify-center items-start rounded bg-neutral-200 p-3">
            <li>
              <a className="hover:bg-neutral-500" onClick={closeNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:bg-neutral-500" onClick={closeNav} href="/shop">
                Shopping
              </a>
            </li>
            <li>
              <a className="hover:bg-neutral-500" onClick={closeNav} href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      ) : (
        navButton
      )}
      <button className="text-white font-semibold">Login</button>
    </div>
  );
}
