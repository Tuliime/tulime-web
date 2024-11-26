export const addCommasToNumber = (number: number) => {
  const numberString = number.toString();

  const [integerPart, decimalPart] = numberString.split(".");

  const integerArray = integerPart.split("");

  let formattedNumber = "";

  for (let i = integerArray.length - 1, commaCount = 0; i >= 0; i--) {
    if (commaCount === 3) {
      formattedNumber = "," + formattedNumber;
      commaCount = 0;
    }

    formattedNumber = integerArray[i] + formattedNumber;
    commaCount++;
  }

  if (decimalPart) {
    formattedNumber += "." + decimalPart;
  }

  return formattedNumber;
};

// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// className={cn(
//     "fixed inset-0 z-50 bg-black/80 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
//     className
//   )}
