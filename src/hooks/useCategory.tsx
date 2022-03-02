import { Categories, IconName, IconNode, Tags } from "../api/fetchIcons";
import filterCategories from "../helpers/filterCategories";

export type Icon = [name: IconName, iconNode: IconNode];

function useCategory(icons: Icon[], categories: Categories, category: string) {
  if (category === "All Icons") return icons;

  const searchString = category.toLowerCase();
  return filterCategories(icons, categories, searchString);
}

export default useCategory;
