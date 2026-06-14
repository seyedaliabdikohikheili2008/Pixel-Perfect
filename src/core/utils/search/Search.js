const Search = (arr = [], text = "", key) => {
  if (!text.trim()) return arr;

  return arr.filter((item) => {
    const value = key
      .split(".")
      .reduce((obj, currentKey) => obj?.[currentKey], item);

    return value
      ?.toString()
      .toLowerCase()
      .includes(text.toLowerCase());
  });
};

export default Search