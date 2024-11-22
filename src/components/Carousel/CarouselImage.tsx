import { FC } from "react";

interface ICarouselImage {
  background: string;
  foreground?: string;
}

const CarouselImage: FC<ICarouselImage> = ({ background, foreground }) => {
  return (
    <div className="absolute inset-0 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] from-75% to-[#000000] to-100% z-10"></div>
        <img src={background} alt="rico" className="w-full max-h-[90vh]" />
        {foreground && (
          <img
            src={foreground}
            alt="rico"
            className="absolute bottom-0 right-[15vw] top-[-90px] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]"
          />
        )}
      </div>
    </div>
  );
};

export default CarouselImage;
