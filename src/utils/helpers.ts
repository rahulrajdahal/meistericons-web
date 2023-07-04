import * as React from 'react';
import * as PropTypes from 'prop-types';
import defaultAttributes from './defaultAttributes';
import { renderToString } from 'react-dom/server';

type IconName = string;
type Tag = string[];
export type IconNode = unknown[];
export type Category = string;

export type Icon = [name: IconName, icon: IconNode];

export interface Tags {
  [key: string]: Tag;
}

export interface Categories {
  [key: string]: Category;
}

export const filterIcons = (icons: Icon[], tags: Tags, query: string) => {
  if (icons.length > 0) {
    return icons.filter(([name]: Icon) => {
      if (tags) {
        const iconTags = tags[name] ? tags[name] : [];

        return [name, ...iconTags].some((tag: string) => tag.toLowerCase().includes(query));
      }
    });
  }
};

export const filterCategories = (icons: Icon[], categories: Categories, category: string) => {
  if (icons.length > 0) {
    return icons.filter(([name]: Icon) => {
      if (categories) {
        const iconCategories = categories[name] ? categories[name] : [];

        return [name, ...iconCategories].some((item: string) => item.toLowerCase().includes(category));
      }
    });
  }
};

export const toKebabCase = (string: string) => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const createReactComponent = (iconName: string, iconNode: IconNode) => {
  const Component = React.forwardRef(({ color = 'currentColor', size = 24, ...rest }: any, ref) =>
    React.createElement(
      'svg',
      {
        key: iconName,
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        fill: color,
        className: `mni mni-${toKebabCase(iconName)}`,
      },
      iconNode.map(([tag, attrs], i) => React.createElement(tag, { key: `${iconName}-${i}`, ...attrs })),
    ),
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  Component.displayName = `${iconName}`;

  return Component;
};

export const iconNodeToSvg = (iconName: string, iconNode: IconNode) => {
  const IconComponent = createReactComponent(iconName, iconNode);
  return renderToString(React.createElement(IconComponent));
};
