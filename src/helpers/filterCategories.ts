import { Categories } from "../api/fetchIcons";
import { Icon } from "../hooks/useSearch";

// eslint-disable-next-line import/no-anonymous-default-export
export default (icons: Icon[], categories: Categories, category: string) =>
  icons.filter(([name]: Icon) => {
    const iconCategories: any =
      categories && categories[name] ? categories[name] : [];

    return [name, ...iconCategories].some((item: string) =>
      item.toLowerCase().includes(category)
    );
  });
