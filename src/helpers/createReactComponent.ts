import { createElement, forwardRef } from "react";
import * as PropTypes from "prop-types";
import defaultAttributes from "../utils/defaultAttributes";
import { IconNode } from "../api/fetchIcons";

export const toKebabCase = (string: string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export default (iconName: any, iconNode: IconNode) => {
  const Component = forwardRef(
    ({ color = "currentColor", size = 24, ...rest }: any, ref) =>
      createElement(
        "svg",
        {
          key: iconName,
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          fill: color,
          className: `mni mni-${toKebabCase(iconName)}`,
          ...rest,
        },
        iconNode.map(([tag, attrs], i) =>
          createElement(tag, { key: i, ...attrs })
        )
      )
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  Component.displayName = `${iconName}`;

  return Component;
};
