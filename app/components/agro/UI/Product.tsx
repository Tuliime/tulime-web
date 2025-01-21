import { crop } from "~/constants";
// import { addCommasToNumber } from "~/utils/addCommasToNumber";
import { addCommasToNumber } from "~/utils/addCommasToNumber";

interface ProductProps {
  id?: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  className?: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  name,
  category,
  price,
  currency,
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
        <p className=" text-gray-700">{name}</p>
        <p className=" text-green-100 font-medium rounded-lg">
          {currency} {addCommasToNumber(price)}
        </p>
      </div>
    </div>
  );
};
