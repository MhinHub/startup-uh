import { type FC } from 'react';
import Image from 'next/image';

const EventItem: FC = () => (
  <div className="flex-shrink-0 relative w-72 h-40">
    <div className="absolute box-light-gray rounded-[30px]" />
    <div className="flex z-10">
      <Image
        className="absolute inset-0 m-auto h-auto rounded-3xl px-2"
        src="/assets/topEvent/event-startupuh.png"
        width={288}
        height={160}
        alt="Top Ideabox"
        priority
      />
    </div>
  </div>
);

const TopIdeabox: FC = () => (
  <div className="flex flex-col gap-4 w-full my-6 overflow-hidden">
    <p className="text-gray-50 font-extrabold text-lg px-2">Top Ideabox</p>
    <div className="flex flex-nowrap overflow-x-scroll gap-4 w-[90vw]">
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  </div>
);

export default TopIdeabox;
