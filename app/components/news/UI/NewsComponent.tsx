interface newsProps {
  id?: string;
  headline: string;
  region?: string;
  image: string;
  date: string;
  className?: string;
}

export const NewsComponent: React.FC<newsProps> = ({
  id,
  headline,
  region,
  image,
  date,
  className,
}) => {
  return (
    <div
      className={`${className} w-[100%] h-70 rounded-lg text-[0.7rem] flex flex-col gap-1 cursor-pointer relative`}
    >
      <img
        src={image}
        alt=""
        // className=" w-auto h-60 object-cover object-center" aspect-[4/3]
        // className=" w-60 h-60 aspect-[4/3] object-cover object-center"
        className=" w-[100%] h-60 aspect-[4/3] object-cover object-center"
      />
      <p>{headline}</p>
      <div className=" w-[100%] flex-between">
        <div className=" bg-blue-100 text-white px-[0.5rem] py-1 rounded-br-md rounded-tr-md">
          <b>News</b>
        </div>
        <p>Source: Monitor</p>
        <p className=" absolute top-0 right-0 bg-green-700 text-white px-1 py-1">
          {date}
        </p>
        <p>DEC 11</p>
      </div>
    </div>
  );
};
