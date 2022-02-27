import Fuse from "fuse.js";

import items from "./products.json";

const ItemSearch = (searchQuery: string) => {
  const options = {
    includeScore: true,
    keys: ["name", "description"],
  };

  const fuse = new Fuse(items, options);

  return fuse
    .search(searchQuery)
    // @ts-ignore
    .filter((item) => item.score < 0.3)
    .map((itemObj) => itemObj.item);
};

export default ItemSearch;
