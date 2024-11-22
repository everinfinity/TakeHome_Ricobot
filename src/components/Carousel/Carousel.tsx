import { FC, ReactElement, useState, useEffect } from "react";
import CarouselImage from "./CarouselImage";
import CarouselThumbnail, { ThumbnailData } from "./CarouselThumbnail";

type Image = {
  id: string;
  background: string;
  foreground?: string;
  thumbnail: string;
};

interface ICarousel {
  imageData: Image[];
  children: ReactElement;
}

const Carousel: FC<ICarousel> = ({ imageData, children }) => {
  const [thumbnails, setThumbnails] = useState<ThumbnailData[]>([]);
  const [activeImage, setActiveImage] = useState<
    Omit<Image, "id" | "thumbnail">
  >({
    background: imageData[0].background,
    foreground: imageData[0].foreground,
  });

  useEffect(() => {
    const thumbnails = imageData.map((el) => ({
      id: el.id,
      url: el.thumbnail,
    }));
    setThumbnails(thumbnails);
    setActiveImage({
      background: imageData[0].background,
      foreground: imageData[0].foreground,
    });
  }, [imageData]);

  const handleChangeActiveThumbnail = (id: string) => {
    const active = imageData.find((el) => el.id === id);
    if (active)
      setActiveImage({
        background: active.background,
        foreground: active.foreground,
      });
  };

  return (
    <div className="flex flex-col mt-[20vh] lg:my-[18vh] lg:px-24 lg:pt-24 p-8 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-l from-[#252d3700] from-40% via-[#000000] via-72.92% to-[#09101A] to-100%  z-20" />
      <CarouselImage
        background={activeImage.background}
        foreground={activeImage.foreground}
      />
      {children}
      <CarouselThumbnail
        thumbnails={thumbnails}
        onChangeActiveThumbnail={handleChangeActiveThumbnail}
      />
    </div>
  );
};

export default Carousel;
