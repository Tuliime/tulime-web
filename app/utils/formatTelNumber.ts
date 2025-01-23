export const formatPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.startsWith("0")) {
    return Number("256" + phoneNumber.slice(1));
  }
  return Number(phoneNumber);
};
