export const isValid = (value: unknown, maxLength: number) => {
  if (value === null || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const extractYear = () => {
  const year = new Date();
  return year.getFullYear();
};
