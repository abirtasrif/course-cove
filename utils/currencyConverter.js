export const currencyConverter = (
  amount,
  locale = "en-US",
  currency = "BDT"
) => {
  return amount?.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
