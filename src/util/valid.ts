export const valid = (data: unknown) => {
  if (data !== undefined && data !== null) {
    return true;
  }

  return false;
};

export const validWithEmptyText = (data: unknown) => {
  if (data !== undefined && data !== null && data !== "") {
    return true;
  }
  return false;
};
