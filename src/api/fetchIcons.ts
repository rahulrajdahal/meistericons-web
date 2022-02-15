import iconNodeToSvg from "../helpers/iconNodesToSvg";

export type IconNode = any[];
export type IconName = string;
export type Tag = string[];
export type Category = string;

export interface Tags {
  [key: string]: Tag;
}
export interface Categories {
  [key: string]: Category;
}

export interface MeisterIcons {
  version: string;
  iconNodes: any;
  tags: Tags;
  categories: Categories;
  svgs: any;
}

export const fetchIcons = async (
  cachedIcons?: MeisterIcons
): Promise<MeisterIcons> => {
  const response = await fetch(
    "https://unpkg.com/meistericons@latest/package.json"
  );
  const packageJson = await response.json();

  if (cachedIcons && cachedIcons?.version === packageJson.version) {
    return cachedIcons;
  }

  const iconNodesResponse = await fetch(
    `https://unpkg.com/meistericons@latest/icon-nodes.json`
  );
  const tagsResponse = await fetch(
    "https://unpkg.com/meistericons@latest/tags.json"
  );
  const categoriesResponse = await fetch(
    "https://unpkg.com/meistericons@latest/categories.json"
  );

  const iconNodes = await iconNodesResponse.json();
  const tags = await tagsResponse.json();
  const categories = await categoriesResponse.json();
  const svgs = Object.keys(iconNodes).reduce(
    (acc: { [key: string]: string }, iconName) => {
      acc[iconName] = iconNodeToSvg(iconName, iconNodes[iconName]);
      return acc;
    },
    {}
  );

  const meisterIcons: MeisterIcons = {
    version: packageJson.version,
    tags,
    categories,
    iconNodes,
    svgs,
  };

  return meisterIcons;
};

export const getIcons = () =>
  new Promise<MeisterIcons>(async (resolve, reject) => {
    const meisterIcons = await fetchIcons();

    resolve(meisterIcons);
  });
