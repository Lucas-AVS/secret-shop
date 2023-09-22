import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import UseAuth from "./services/UseAuth";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <UseAuth></UseAuth>;
  }

  return (
      <div className="flex flex-col min-h-screen bg-neutral-800 pb-8">
        <Header />
        <Outlet />
      </div>
  );
}

export default App;