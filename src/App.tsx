import Carousel from "./components/Carousel";
import slideData from "./constants/slideData";

function App() {
  return (
    <Carousel imageData={slideData}>
      <div className="w-full z-20">
        <h2 className="font-main font-black text-white uppercase text-4xl mb-8 text-[17px] md:text-[31px] leading-[1.2]">
          More From
          <br />
          Rico the dog
        </h2>
        <div className="font-main font-extrabold inline-block mt-12 py-2 px-4 rounded-full border-2 border-solid border-white">
          <p className="font-main rounded-accent-font text-white uppercase text-[12px] md:text-[14px]">
            Rico is back!
          </p>
        </div>
        <h1 className="font-main font-black my-4 text-white uppercase text-[49px] md:[35px] ">
          ricobot
        </h1>
        <p className="font-main font-medium description text-white text-[14px] md:text-[16px] w-[90%] md:w-1/2">
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </p>
        <div className="mt-12">
          <a
            href=""
            className="font-main font-black bg-white uppercase text-black p-4 rounded-full border-[none] text-[14px] md:text-[16px]"
          >
            Learn more
          </a>
        </div>
      </div>
    </Carousel>
  );
}

export default App;
