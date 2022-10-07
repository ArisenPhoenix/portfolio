export const LINKIFY = (text, directory) => {
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
  return { name: text, link: final };
};

export const SUPER_LINKIFY = (list_of_link_names_and_attributes) => {
  if (
    list_of_link_names_and_attributes === null ||
    list_of_link_names_and_attributes === 0 ||
    list_of_link_names_and_attributes[0] === null
  ) {
    return [];
  }
  const final = {};
  for (let linkData of list_of_link_names_and_attributes) {
    final[linkData.name] = LINKIFY(linkData.name, linkData.dir);
  }
  return final;
};
