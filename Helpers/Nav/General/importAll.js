const IMPORT_ALL = (r) => {
  let images = [];
  r.keys().map((item, index) => {
    const image = r(item);
    images.push(image);
  });
  return images;
};

export default IMPORT_ALL;
