export const generateLicenseNumber = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters = Array.from(
    { length: 3 },
    () => letters[Math.floor(Math.random() * letters.length)]
  ).join("");

  const randomDigits = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  return randomLetters + randomDigits;
};
