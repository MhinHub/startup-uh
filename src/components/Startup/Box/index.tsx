import { type FC } from 'react';
import Image from 'next/image';
import { Location, ExportCircle } from 'iconsax-react';
import TextBadge from '@/components/children/TextBadge';

const Box: FC = () => (
  <div className="flex flex-col items-start justify-center box-light-gray w-full h-fit rounded-[30px] mt-5 p-4">
    <div className="flex items-center w-full gap-2 mb-2">
      <Image
        src="/assets/startup/img-startup.png"
        width={60}
        height={60}
        alt="Logo Startup"
      />
      <div className="flex flex-col items-start">
        <p className="font-bold text-gray-50 text-lg text-start">Metacoin</p>
        <div className="flex items-center gap-1">
          <Location color="#D9E3F0" size={20} variant="Bulk" />
          <p className="font-medium text-gray-50 text-xs">Makassar</p>
        </div>
      </div>
    </div>
    <TextBadge className="bg-purple-500 text-purple-600" text="Fintech" />
    <p className="font-medium text-sm text-gray-50 my-2 leading-5">
      Metacoin adalah startup yang bergerak di bidang Fintech yang berfokus pada
      pengembangan aplikasi mobile yang berbasis blockchain.
    </p>
    <div className="flex justify-end w-full">
      <div className="flex items-center box-light-gray px-3 py-1 rounded-full gap-2">
        <p className="font-medium text-gray-50 text-sm">Kunjungi</p>
        <ExportCircle color="#D9E3F0" size={20} variant="TwoTone" />
      </div>
    </div>
  </div>
);

export default Box;
