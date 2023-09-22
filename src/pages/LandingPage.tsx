import shopKeeperImage from "../assets/shop-keeper.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-auto h-fit gap-6">
      <div className="flex flex-col w-fit lg:w-1/3 gap-4">
        <h1 className="text-neutral-100 font-semibold text-2xl sm:text-4xl lg:text-6xl">
          Welcome to the Secret Shop!
        </h1>
        <h2 className="text-neutral-300 text-sm sm:text-xl lg:text-2xl">
          What does a hero truly need? <br /> That is for{" "}
          <strong className="text-neutral-100">you</strong> to decide...
        </h2>
      </div>
      <img className="h-1/6 sm:h-3/6 lg:h-max" src={shopKeeperImage} alt="" />
    </div>
  );
}
