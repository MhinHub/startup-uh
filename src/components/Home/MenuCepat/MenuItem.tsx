import React, { type FC } from 'react';
import Link from 'next/link';
import GlassIcons, { type ColorOption } from '@/components/ui/GlassIcons';

type MenuItemProps = {
  icon: React.ReactElement;
  color: ColorOption;
  text: string;
  className?: string;
};

const MenuItem: FC<MenuItemProps> = ({
  icon,
  color,
  text = '',
  className,
}) => (
  <Link
    href={text.toLowerCase()}
    className="grid place-items-center gap-1 group/glow"
  >
    <GlassIcons items={[{ icon: icon, label: text, customClass: className, color: color }]} />
    <p className="text-gray-50 text-xs text-center font-semibold">{text}</p>
  </Link>
);

export default MenuItem;
