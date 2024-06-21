export const isServer = () => typeof window === "undefined";

export const getNotificationIdFromName = (errors: string[]) => {
  const array = [];

  for (const element of errors) {
    array.push(...element.split(""));
  }

  let sum = 1;
  for (const char of array) {
    const code = char.codePointAt(0);
    if (code) sum *= code;
  }

  if (sum === Number.POSITIVE_INFINITY) {
    sum = Math.random() * 1_000_000;
  } else {
    while (sum >= 1_000_000) {
      sum = sum / 2;
    }
  }

  return String(sum.toFixed(0));
};

export const getFormatedAmount = (amount: number) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
