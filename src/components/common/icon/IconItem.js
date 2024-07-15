import React from 'react';
import classNames from 'classnames';

const IconItem = ({
  tag: Tag = 'a',
  icon,
  bg,
  size,
  color,
  className,
  transform,
  iconClass,
  onClick,
  ...rest
}) => (
  <Tag
    className={classNames(className, 'icon-item', {
      [`icon-item-${size}`]: size,
      [`bg-${bg}`]: bg,
      [`text-${color}`]: color
    })}
    {...rest}
    onClick={onClick}
  >
    {icon}
  </Tag>
);


export default IconItem;
