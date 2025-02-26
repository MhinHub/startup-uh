import { type FC } from 'react';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { CardCarousel } from '@/components/ui/card-carousel';
import { CardSwipe } from '@/components/ui/card-swipe';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Lamp, LampCharge } from 'iconsax-react';

const EventItem: FC = () => (
  <div className="flex-shrink-0 relative w-72 h-40 inv-rad inv-rad-t-l-6 overflow-visible">
    <div className="absolute box-light-gray rounded-[30px] " />
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
  <div className="flex flex-col gap-4 w-full my-6 overflow-visible">
    <p className="text-gray-50 font-extrabold text-lg px-2">Top Ideabox</p>
    <div className="overflow-visible gap-4 w-full">
      <CardSwipe
        listChildren={Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="relative h-full rounded-xl border bg-grid-small-white/[0.5] bg-black p-2 md:rounded-3xl md:p-3 min-h-96 w-72 flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <LampCharge size="120" color="#d9e3f9" variant="Bulk" className='absolute inset-0 m-auto opacity-60 backdrop-blur-sm' />
              <div className='absolute z-10 inset-0 m-auto max-w-[80%] max-h-[20%] select-none'>
                <p className="text-white text-center text-xl font-bold">Startup Idea</p>
                <p className="text-white font-light leading-4 text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero sit amet nisi luctus.</p>
              </div>
            </div>
          ))}
        onSwipeLeft={() => console.log('swipe left')}
        onSwipeRight={() => console.log('swipe right')}
        autoPlay={false}
      />
    </div>
  </div>
);

export default TopIdeabox;
