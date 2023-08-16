import shopKeeperImage from "../assets/shop-keeper.png";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center w-full h-full bg-neutral-800 px-2">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
        <div className="flex flex-col w-96 lg:w-1/3 gap-4">
          <h1 className="text-neutral-100 font-semibold text-4xl lg:text-6xl">
            Welcome to the Secret Shop!
          </h1>
          <h2 className="text-neutral-300 text-2xl">
            What does a hero truly need? <br /> That is for <strong className="text-neutral-100">you</strong> to decide...
          </h2>
        </div>
        <img className="scale-75 lg:scale-125" src={shopKeeperImage} alt="" />
      </div>
    </div>
  );
}
