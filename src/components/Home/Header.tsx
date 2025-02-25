import { type FC } from 'react';
import { Notification } from 'iconsax-react';

const Header: FC = () => (
  <header className="flex w-full py-3 h-auto justify-end">
    <label htmlFor="modal" className="cursor-pointer">
      <Notification size="32" color="#d9e3f0" />
    </label>
  </header>
);

export default Header;
