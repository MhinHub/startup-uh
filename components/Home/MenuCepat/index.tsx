import { type FC } from 'react';
import MenuItem from './MenuItem';

const MenuCepat: FC = () => (
  <div className="flex flex-col gap-4 w-full my-6">
   <button className="bg-slate-800 w-fit no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
          <p className="text-gray-50 font-extrabold text-lg px-2">Menu Cepat</p>
    </span>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
    <div className="grid place-items-center grid-cols-4 gap-4">
      <MenuItem
        src="/assets/menuCepat/ic-pengumuman.png"
        text="Pengumuman"
        className="bg-yellow-400"
      />
      <MenuItem
        src="/assets/menuCepat/ic-event.png"
        text="Event"
        className="bg-green-400"
      />
      <MenuItem
        src="/assets/menuCepat/ic-program.png"
        text="Program"
        className="bg-cyan-400"
      />
      <MenuItem
        src="/assets/menuCepat/ic-match.png"
        text="Match"
        className="bg-blue-400"
      />
      <MenuItem
        src="/assets/menuCepat/ic-startup.png"
        text="Startup"
        className="bg-purple-400"
      />
      <MenuItem
        src="/assets/menuCepat/ic-akselerasi.png"
        text="Akselerasi"
        className="bg-red-400"
      />
      <MenuItem
        src="/assets/menuCepat/ic-ideabox.png"
        text="Ideabox"
        className="bg-orange-400"
      />
    </div>
  </div>
);

export default MenuCepat;
