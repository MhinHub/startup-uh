import { type FC } from 'react';
import { Timer1, Clock, Location } from 'iconsax-react';

const Row1: FC = () => (
  <div className="relative z-10 w-9/12 px-3 py-2">
    <div className="absolute inset-0 bg-[#1B1B1B] backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-[25px] h-full" />
    <div className="relative z-20">
      <div className="flex justify-start items-center">
        <div className="relative h-7 w-7">
          <div className="bg-[#F4F4F4] opacity-30 h-7 w-7 rounded-lg" />
          <Timer1
            className="absolute inset-0 m-auto"
            size={20}
            color="#EDEDED"
            variant="TwoTone"
          />
        </div>
        <div className="flex flex-col mx-3">
          <p className="text-white text-sm font-bold">Hari ini</p>
          <p className="text-white text-xs">Minggu, 12 Juli 2020</p>
        </div>
      </div>
      <div>
        <p className="text-white text-base font-semibold text-start py-4">
          Ramadan Upskill - UIUX with Figma
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Clock size={20} color="#EDEDED" variant="Bulk" />
          <p className="text-white text-xs">12:00 - 13:00</p>
        </div>
        <div className="flex items-center gap-2">
          <Location size={20} color="#EDEDED" variant="Bulk" />
          <p className="text-white text-xs">Sekret Startup Unhas</p>
        </div>
      </div>
    </div>
  </div>
);

export default Row1;
