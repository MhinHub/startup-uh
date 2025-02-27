import { type FC } from 'react';
import MenuItem from './MenuItem';
import { Calendar2, Category, Convertshape, LampOn, MenuBoard } from 'iconsax-react';
import { Rocket } from 'lucide-react';

const MenuCepat: FC = () => (
  <div className="flex flex-col gap-4 w-full my-6">
    <p className="text-gray-50 font-extrabold text-lg px-2">Menu Cepat</p>
    <div className="grid place-items-center grid-cols-4 gap-4">
      <MenuItem
        icon={<MenuBoard size="32" color="#d9e3f0" />}
        color='blue'
        text="Pengumuman"
      />
      <MenuItem
        icon={<Calendar2 size="32" color="#d9e3f0" />}
        color="green"
        text="Event"
      />
      <MenuItem
        icon={<Category size="32" color="#d9e3f0" />}
        color="indigo"
        text="Program"
      />
      <MenuItem
        icon={<Convertshape size="32" color="#d9e3f0" />}
        color="orange"
        text="Match"
      />
      <MenuItem
        icon={<Rocket widths={32} color="#d9e3f0" />}
        color="red"
        text="Startup"
      />
      {/* <MenuItem
        icon={<Calendar2 size="32" color="#d9e3f0" />}
        color="purple"
        text="Akselerasi"
        className="bg-red-400"
      /> */}
      <MenuItem
        icon={<LampOn size="32" color="#d9e3f0" />}
        color="purple"
        text="Ideabox"
      />
    </div>
  </div>
);

export default MenuCepat;
