import { FC, useState, useEffect } from "react";
import classNames from "classnames";

export type ThumbnailData = {
  id: string;
  url: string;
};

interface IThumbnail extends ThumbnailData {
  isActive?: Boolean;
  onClickThumbnail?: (id: string) => void;
}

interface ICarouselThumbnail {
  thumbnails: ThumbnailData[];
  onChangeActiveThumbnail?: (id: string) => void;
}

//thumbnail image component
const Thumbnail: FC<IThumbnail> = ({ id, url, isActive, onClickThumbnail }) => {
  return (
    <div
      className="w-1/3 flex justify-center items-center cursor-pointer transition-all duration-500"
      onClick={() => {
        console.log("here click thumbnail");
        if (onClickThumbnail) onClickThumbnail(id);
      }}
    >
      <div
        className={classNames(
          "p-2 w-full md:w-[160px] lg:w-full lg:max-w-[140px] xl:w-[160px] h-auto relative ",
          {
            "rounded-md border-thumbnail md:w-[160px] lg:w-full lg:max-w-[200px] xl:w-[280px]":
              isActive,
          }
        )}
      >
        <img src={url} alt="thumbnail" className="w-full h-auto rounded-md" />
      </div>
    </div>
  );
};

// thumbnail wrapper
const CarouselThumbnail: FC<ICarouselThumbnail> = ({
  thumbnails,
  onChangeActiveThumbnail,
}) => {
  const [activeThumbnail, setActiveThumbnail] = useState<string>(
    thumbnails[0]?.id
  );

  useEffect(() => {
    setActiveThumbnail(thumbnails[0]?.id);
  }, [thumbnails]);

  const handleClickThumbnail = (id: string) => {
    setActiveThumbnail(id);
    if (onChangeActiveThumbnail) onChangeActiveThumbnail(id);
  };

  console.log(activeThumbnail);
  return (
    <div className="flex my-12 sm:mb-32 lg:my-12 z-20">
      <section className="flex flex-row flex-wrap lg:flex-nowrap gap-0 lg:gap-4 xl:gap-12 w-full lg:max-w-[1200px] items-center lg:items-end h-[240px] justify-between z-10">
        {thumbnails.map((th) => (
          <Thumbnail
            key={th.id}
            id={th.id}
            url={th.url}
            isActive={activeThumbnail === th.id}
            onClickThumbnail={handleClickThumbnail}
          />
        ))}
      </section>
    </div>
  );
};

export default CarouselThumbnail;
