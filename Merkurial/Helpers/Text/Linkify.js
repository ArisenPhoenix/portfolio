export const LINKIFY = (text, directory, placeCalledFrom = null) => {
  let final;
  if (directory) {
    final = `/${directory}/`;
  } else {
    final = "/";
  }

  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      final += text[i].toLowerCase();
    } else {
      if (text[i] === text[i].toUpperCase()) {
        if (text[i] === " ") {
          break;
        } else {
          const newChar = text[i].toLowerCase();
          final += `-${newChar}`;
        }
      } else {
        if (text[i] === " ") {
          break;
        } else {
          final += text[i];
        }
      }
    }
  }
  return final;
};

export const SUPER_LINKIFY = (itemsToLinkify) => {
  const newLinks = itemsToLinkify.map((item, index) => {
    return item?.text
      ? LINKIFY(item.text, item.directory ? item.directory : null)
      : LINKIFY(item);
  });
};
