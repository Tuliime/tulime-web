import { toSentenceCase } from "~/utils/toSentenceCase";

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
      className={`${className} bg-white shadow-md w-[100%] h-70 rounded-lg text-[0.78rem] flex flex-col items-center`}
    >
      <img
        src={image}
        alt=""
        // className=" w-auto h-60 object-cover object-center" aspect-[4/3]
        className=" w-48 h-48 aspect-[4/3] rounded-[50%] object-cover object-center"
      />
      <div className=" py-1 px-3 w-[80%] mt-2 mb-2">
        <div className="flex-between">
          {verified && (
            <div className="flex justify-center items-center gap-1  font-medium rounded-lg">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                width="1em"
                height="1em"
                className="text-green-100 font-extrabold"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
                ></path>
              </svg>
              <p className=" text-gray-700">Verified</p>
            </div>
          )}
          <p className=" text-gray-700">{toSentenceCase(gender)}</p>
        </div>
        <p className=" text-gray-700">
          <b>{name}</b>
        </p>
      </div>
    </div>
  );
};
