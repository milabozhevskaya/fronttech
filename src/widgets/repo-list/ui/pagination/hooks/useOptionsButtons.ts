export const useOptionsButtons = (
  page: number,
  perPage: number,
  quantity: number,
  buttonQuantity: number = 7
): Array<{ value: number; disabled: boolean; hidden: boolean }> => {
  const maxPage = Math.ceil(quantity / perPage);
  const allButtons = new Array(maxPage)
    .fill(0)
    .map((_, index) => ({ value: index + 1, disabled: page === index + 1 }));

  if (maxPage <= buttonQuantity) {
    return allButtons.map((button) => ({ ...button, hidden: false }));
  }

  if (page <= 4) {
    return allButtons.map(({ value, disabled }) => ({
      disabled,
      value,
      hidden: value > 5 && value < maxPage,
    }));
  }

  if (maxPage - page <= 4) {
    return allButtons.map(({ value, disabled }) => ({
      disabled,
      value,
      hidden: value > 1 && value < maxPage - 5,
    }));
  }

  return allButtons.map(({ value, disabled }) => ({
    disabled,
    value,
    hidden:
      (value > 1 && value < page - 1) || (value > page + 1 && value < maxPage),
  }));
};
