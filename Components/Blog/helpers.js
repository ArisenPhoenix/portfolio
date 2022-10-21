import FETCH from "../../Merkurial/Helpers/FETCH";
import { SAVE_TO_LOCAL_STORAGE } from "../../Merkurial/API_STORAGE/STORAGe/HANDLE_STORAGE";

export const getBlogs = async (functionObj, fromWhere) => {
  const { setBlogs, setErrorMessage, updateBlogs } = functionObj;
  fromWhere
    ? console.log(`GETTING BLOGS ${fromWhere}`)
    : console.log("GETTING BLOGS");

  const allBlogs = await FETCH("/api/blogs", "GET");

  if (Array.isArray(allBlogs)) {
    setBlogs(allBlogs);
    SAVE_TO_LOCAL_STORAGE(allBlogs, "blogs");
    updateBlogs(allBlogs);
    return allBlogs;
  } else {
    setErrorMessage(
      allBlogs?.err.statusText !== "Bad Request"
        ? allBlogs.err
        : "There Are No Blogs To Display At This Time"
    );
  }
};
