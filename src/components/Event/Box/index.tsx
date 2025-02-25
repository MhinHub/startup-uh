import { type FC } from 'react';
import Image from 'next/image';
import TextBadge from '@/components/children/TextBadge';
import { MedalStar } from 'iconsax-react';

const Box: FC = () => (
  <div className="flex box-light-gray w-full h-fit rounded-3xl mt-5 p-4">
    <Image
      src="/assets/event/img-event.png"
      className="h-auto rounded-2xl"
      width={120}
      height={104}
      alt="Box Event"
    />
    <div className="flex h-full flex-col justify-between content-between items-start ml-4">
      <div className="flex justify-between items-center w-full">
        <TextBadge className="bg-red-500 text-red-600" text="Lomba" />
        <MedalStar color="#2CCCE4" size={25} />
      </div>
      <p className="font-bold text-gray-50 text-base text-start py-2">
        Lomba Desain Logo
      </p>
      <div className="flex flex-col content-end items-start mt-10">
        <p className="font-light text-xs text-gray-50">
          Pendaftaran: 10 September 2021
        </p>
        <p className="font-light text-xs text-gray-50">
          Deadline: 10 Oktober 2021
        </p>
      </div>
    </div>
  </div>
);

export default Box;
