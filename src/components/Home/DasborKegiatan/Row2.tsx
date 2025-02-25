import { type FC } from 'react';
import { Timer, CalendarTick } from 'iconsax-react';

const Row2: FC = () => (
  <div className="flex relative flex-col gap-2">
    <div className="flex justify-start items-center gap-1">
      <div className="relative h-7 w-7">
        <div className="bg-[#F4F4F4] opacity-30 h-7 w-7 rounded-lg" />
        <Timer
          className="absolute inset-0 m-auto"
          size={20}
          color="#EDEDED"
          variant="TwoTone"
        />
      </div>
      <div className="flex flex-col text-start">
        <span className="text-white text-sm font-bold">03</span>
        <span className="text-white text-xs">Mendatang</span>
      </div>
    </div>
    <div className="flex justify-start items-center gap-1">
      <div className="relative h-7 w-7">
        <div className="bg-[#F4F4F4] opacity-30 h-7 w-7 rounded-lg" />
        <CalendarTick
          className="absolute inset-0 m-auto"
          size={20}
          color="#EDEDED"
          variant="TwoTone"
        />
      </div>
      <div className="flex flex-col text-start">
        <span className="text-white text-sm font-bold">03</span>
        <span className="text-white text-xs">Selesai</span>
      </div>
    </div>
  </div>
);

export default Row2;
