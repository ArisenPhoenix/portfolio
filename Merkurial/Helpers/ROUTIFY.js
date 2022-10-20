const ROUTIFY = (text, remove, replace) => {
  const newText = text.replace(remove, replace);
  return newText;
};

export default ROUTIFY;
