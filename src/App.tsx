import Header from "./components/Header";
// import LandingPage from "./pages/LandingPage";
import ShoppingList from "./pages/ShoppingList";
// import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="flex flex-col h-screen bg-neutral-800">
      <Header />
      <ShoppingList/>
    </div>
  );
}

export default App;
