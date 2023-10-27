export const validateString = (field: unknown, maxLength: number) => {
  if (!field || typeof field !== "string" || field.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (e: unknown): string => {
  let message: string;
  if (e instanceof Error) {
    message = e.message;
  } else if (e && typeof e === "object" && "message" in e) {
    message = String(e.message);
  } else if (typeof e === "string") {
    message = e;
  } else {
    message = "Something went wrong";
  }
  return message;
};
