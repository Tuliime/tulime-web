interface VetProps {
  id?: string;
  name: string;
  gender: string;
  verified: boolean;
  image: string;
  className?: string;
}

export const VetComponent: React.FC<VetProps> = ({
  id,
  name,
  gender,
  verified,
  image,
  className,
}) => {
  return (
    <div
      className={`${className} bg-white shadow-md w-[100%] h-70 rounded-lg text-sm`}
    >
      <img
        src={image}
        alt=""
        // className=" w-auto h-60 object-cover object-center"
        className=" aspect-[4/3]"
      />
      <div className=" py-1 px-2">
        <div className="flex">
          {verified && (
            <p className=" text-green-100 font-medium rounded-lg">Verified</p>
          )}
          <p>{gender}</p>
        </div>
        <p className=" text-gray-700">{name}</p>
      </div>
    </div>
  );
};
