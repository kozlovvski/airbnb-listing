export const formatPrice = (price: string | number, long = true) =>
  `$${price}${long ? ' USD' : ''}`;
