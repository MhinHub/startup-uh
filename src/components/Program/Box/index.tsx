import { type FC } from 'react';
import Image from 'next/image';
import TextBadge from '@/components/children/TextBadge';
import { Calendar, Clock, Location } from 'iconsax-react';

const Box: FC = () => (
  <div className="flex flex-col items-center justify-center box-light-gray w-full h-fit rounded-3xl mt-5 p-4">
    <p className="font-bold text-gray-50 text-base text-start py-2">
      Pelantikan Upgrading & Rapat Kerja
    </p>
    <TextBadge className="bg-gray-500 text-gray-600" text="Tema" />
    <p className="font-semibold text-[12px] text-gray-50 text-center">
      “Accelerating development through organizational skills to create creative
      & innovative Entrepreneure”
    </p>
    <Image
      src="/assets/program/img-proker.png"
      className="h-auto rounded-2xl my-1"
      width={290}
      height={104}
      alt="Program Kerja"
    />
    <div className="flex justify-between items-center gap-2 w-full mt-2 leading-[10px]">
      <div className="flex justify-center items-center gap-1">
        <Calendar color="#D9E3F0" size={20} variant="Bulk" />
        <div className="flex flex-col items-start gap-1 text-[9px]">
          <p className="font-light text-gray-50">Senin-Rabu</p>
          <p className="font-light text-gray-50">10-12 Oktober 2022</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        <Clock color="#D9E3F0" size={20} variant="Bulk" />
        <p className="font-light text-gray-50 text-[9px]">10:00 - Selesai</p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <Location color="#D9E3F0" size={20} variant="Bulk" />
        <p className="font-light text-gray-50 text-[9px]">
          Aula Lt.3 Gedung Pancasarjana
        </p>
      </div>
    </div>
  </div>
);

export default Box;
