import React, { type FC } from 'react';

type TextBadgeProps = {
  className?: string;
  // color?: string;
  text: any;
};

const TextBadge: FC<TextBadgeProps> = ({ text, className }) => (
  <span
    className={`${className} text-xs font-semibold bg-opacity-10 rounded-full px-2 py-1`}
  >
    {text}
  </span>
);

export default TextBadge;
