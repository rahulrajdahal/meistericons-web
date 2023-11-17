import * as React from 'react';
import * as PropTypes from 'prop-types';
import defaultAttributes from './defaultAttributes';
import { renderToString } from 'react-dom/server';

type Tag = string[];
export type IconNode = unknown[];
export type IconType = 'all' | 'linear' | 'bold';

export type Icon = [name: string, icon: IconNode];

export interface Tags {
  [key: string]: Tag;
}

export interface Categories {
  [key: string]: string;
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

export const filterIconTypes = (icons: Icon[], iconType = 'all') => {
  if (icons.length > 0) {
    return icons.filter(([name]: Icon) => {
      const lastString = name.toLowerCase().split('').at(-1);

      if (iconType === 'linear') {
        return [name].some((name: string) => {
          if (lastString !== 'b') {
            return toKebabCase(name);
          }
        });
      } else if (iconType === 'bold') {
        return [name].some((name: string) => {
          if (lastString === 'b') {
            return toKebabCase(name);
          }
        });
      } else {
        return toKebabCase(name);
      }
    });
  }
};

export const filterCategories = (icons: Icon[], categories: Categories, category: string) => {
  if (icons.length > 0) {
    if (categories) {
      const iconCategories = categories[category] ? categories[category] : [];

      return icons.filter(([name, iconNode]: Icon) => {
        if ((iconCategories as string[]).includes(name)) {
          return [name, iconNode];
        }
      });
    }
  }
};

export const toKebabCase = (string: string) => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const createReactComponent = (iconName: string, iconNode: IconNode) => {
  const Component = React.forwardRef(
    ({ color = 'currentColor', size = 32, ...rest }: { color?: string; size?: number | string }, ref) =>
      React.createElement(
        'svg',
        {
          key: iconName,
          ref,
          // ...defaultAttributes,
          width: size,
          height: size,
          fill: color,
          className: `mni mni-${toKebabCase(iconName)}`,
          // ...rest,
        },
        (iconNode as any)?.map(([tag, attrs]: [string, any], i: number) => {
          delete attrs['fill-rule'];
          delete attrs['clip-rule'];

          return React.createElement(tag, {
            key: i.toPrecision(),
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            className: `${attrs.fill === '#fff' ? '' : 'fill-[#1c2a3a]'}`,
            ...attrs,
          });
        }),
      ),
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  Component.displayName = `${iconName}`;

  return Component;
};

export const iconNodeToSvg = (iconName: string, iconNode: IconNode) => {
  const IconComponent = createReactComponent(iconName, iconNode);
  return renderToString(React.createElement(IconComponent));
};
