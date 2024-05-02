export const getDisplay = (page: number, perPage: number, quantity: number) => {
  const firstItemOnPage = page * perPage - (perPage - 1);
  const lastItemOnPage =
    firstItemOnPage === quantity
      ? ""
      : `-${page * perPage > quantity ? quantity : page * perPage}`;

  return `${firstItemOnPage}${lastItemOnPage} of ${quantity}${quantity > 1 ? " items" : " item"}`;
};
