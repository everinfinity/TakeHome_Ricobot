import { FC } from "react";

interface ICarouselImage {
  background: string;
  foreground?: string;
}

const CarouselImage: FC<ICarouselImage> = ({ background, foreground }) => {
  return (
    <div className="absolute inset-0 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#252d3700] from-40% via-[#000000] via-72.92% to-[#09101A] to-100%  z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] from-75% to-[#000000] to-100% z-10 left-50"></div>
        <picture>
          <source
            media="(min-width:2560px)"
            srcSet={`assets/${background}.png`}
          />
          <source
            media="(max-width:1920px)"
            srcSet={`assets/${background}-md.png`}
          />
          <img
            src={`assets/${background}-md.png`}
            alt="thumnail"
            className="ml-auto max-h-[97vh]"
          />
        </picture>
        {foreground && (
          <picture>
            <source
              media="(min-width:2560px)"
              srcSet={`assets/${foreground}.png`}
            />
            <source
              media="(max-width:1920px)"
              srcSet={`assets/${foreground}-md.png`}
            />
            <img
              src={`assets/${foreground}-md.png`}
              alt="thumnail"
              className="absolute bottom-0 right-[15vw] top-[-90px] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]"
            />
          </picture>
        )}
      </div>
    </div>
  );
};

export default CarouselImage;
