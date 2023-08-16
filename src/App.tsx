import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col h-screen bg-neutral-800">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
