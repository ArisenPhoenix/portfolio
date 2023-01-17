const IMPORT_ALL = (r) => {
  const images = r.keys().map((item, index) => {
    const image = r(item);
    return image;
  });
  return images;
};

export default IMPORT_ALL;
