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


export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};