import { useEffect, useState } from "react";

export const News = () => {
  const [activeImage, setActiveImage] = useState("news/new2.webp");

  const images = [
    "news/new2.webp",
    "news/new3.jpg",
    "news/new4.jpg",
    "news/new5.webp",
    "news/new6.jpg",
    "news/new7.jpg",
    "news/new8.webp",
    "news/new9.jpg",
    "news/new11.jpg",
  ];

  const handleDotClick = (card: string) => {
    setActiveImage(() => card);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = images.indexOf(activeImage);

      const nextIndex = (currentIndex + 1) % images.length;

      setActiveImage(images[nextIndex]);
    }, 2000);

    return () => clearInterval(timer);
  }, [activeImage, images]);

  //   object-fit: cover;
  //   object-position: top center;

  return (
    <div className="w-full sm:w-full flex flex-col justify-center align-middle h-70 sm:h-40 sm:mt-[4.7rem] ">
      <img
        src={activeImage}
        alt=""
        className=" h-60 object-cover object-center rounded-lg"
      />
      {/* <a
        href="#"
        className=" bg-blue-100 text-white rounded-sm top-72 cursor-pointer decoration-0"
      >
        Learn more...
      </a> */}

      <div className="flex justify-center items-center ">
        <div className=" h-16 flex py-3 px-3 gap-3 min-h-4">
          {images.map((image, index) => (
            <span
              className={`dot  ${activeImage === image && "active"}`}
              onClick={() => handleDotClick(image)}
            ></span>
          ))}
          {/* <span
            className={`dot  ${activeImage === "group-photo.jpg" && "active"}`}
            onClick={() => handleDotClick("group-photo.jpg")}
          ></span>

          <span
            className={`dot ${activeImage === "mission.jpg" && "active"}`}
            onClick={() => handleDotClick("mission.jpg")}
          ></span>

          <span
            className={`dot ${
              activeImage === "ladies-group-photo.jpg" && "active"
            }`}
            onClick={() => handleDotClick("ladies-group-photo.jpg")}
          ></span>
          <span
            className={`dot ${
              activeImage === "ladies-soft-skills.jpg" && "active"
            }`}
            onClick={() => handleDotClick("ladies-soft-skills.jpg")}
          ></span>
          <span
            className={`dot ${
              activeImage === "women-in-energy.jpg" && "active"
            }`}
            onClick={() => handleDotClick("women-in-energy.jpg")}
          ></span>
          <span
            className={`dot ${activeImage === "sports3.jpg" && "active"}`}
            onClick={() => handleDotClick("sports3.jpg")}
          ></span>
          <span
            className={`dot ${
              activeImage === "ladiesCapacity.jpg" && "active"
            }`}
            onClick={() => handleDotClick("ladiesCapacity.jpg")}
          ></span> */}
        </div>
      </div>
    </div>
  );
};
