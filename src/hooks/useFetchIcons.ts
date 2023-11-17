import { Categories, Tags, iconNodeToSvg } from '@/utils/helpers';
import { queries } from '@/utils/queries';
import { useQueries } from 'react-query';

export interface IconNode {
  [key: string]: [[string, { d: string }]];
}

export interface MeisterIcons {
  version: string;
  iconNodes: IconNode;
  tags: Tags;
  categories: Categories;
  svgs: unknown;
}

export const useFetchIcons = () => {
  let meisterIcons: MeisterIcons;

  let nodesLoading = false;

  const [
    { data: packageJson, isLoading: packageJsonLoading },
    { data: iconNodes, isLoading: iconNodesLoading },
    { data: tags, isLoading: tagsLoading },
    { data: categories, isLoading: categoriesLoading },
  ] = useQueries([
    {
      queryKey: queries.FETCH_PACKAGE_JSON,
      queryFn: () =>
        fetch('https://unpkg.com/meistericons@latest/package.json')
          .then((res) => res.json())
          .catch((error) => console.error(error)),
    },
    {
      queryKey: queries.FETCH_ICON_NODES_JSON,
      queryFn: () =>
        fetch('https://unpkg.com/meistericons@latest/icon-nodes.json')
          .then((res) => res.json())
          .catch((error) => console.error(error)),
    },
    {
      queryKey: queries.FETCH_TAGS_JSON,
      queryFn: () =>
        fetch('https://unpkg.com/meistericons@latest/tags.json')
          .then((res) => res.json())
          .catch((error) => console.error(error)),
    },
    {
      queryKey: queries.FETCH_CATEGORIES_JSON,
      queryFn: () =>
        fetch('https://unpkg.com/meistericons@latest/categories.json')
          .then((res) => res.json())
          .catch((error) => console.error(error)),
    },
  ]);

  if (iconNodes) {
    nodesLoading = true;
    const svgs = Object.keys(iconNodes).reduce((acc: { [key: string]: string }, iconName) => {
      acc[iconName] = iconNodeToSvg(iconName, iconNodes[iconName].replace);
      return acc;
    }, {});

    meisterIcons = { version: packageJson?.verison, tags, categories, iconNodes, svgs };
    nodesLoading = false;

    return {
      meisterIcons,
      loading: nodesLoading || packageJsonLoading || tagsLoading || iconNodesLoading || categoriesLoading,
    };
  }
  return {
    loading: packageJsonLoading && tagsLoading && iconNodesLoading && categoriesLoading,
  };
};
