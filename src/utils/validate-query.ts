export const isValid = (value: unknown): string => {
  if (typeof value !== "number") {
    return "query must be an integer number";
  }

  if (!Number.isInteger(value)) {
    return "query must be an integer number";
  }

  if (value < 0) {
    return "query must not be less than 0";
  }

  if (value > 10) {
    return "query must not be greater than 10";
  }

  return "";
};
