export const maskOnlyNumbers = (value: string) => {
  return value.replace(/[^\d]/g, "");
};
