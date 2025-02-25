import { type FC } from 'react';
import Image from 'next/image';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";
import { CardCarousel } from '@/components/ui/card-carousel';


const TopEvent: FC = () => {
  const cards = [
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgMiuRpa4AAoW2y?format=jpg&name=medium",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgHZJN0aoAA__92?format=jpg&name=medium",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "https://pbs.twimg.com/media/GgCPjsQacAAWvm3?format=jpg&name=medium",
    },
  ]
  return (
    <div className="flex flex-col gap-4 w-full my-6 relative">
      <p className="text-gray-50 font-extrabold text-lg px-2">Top Event</p>
      <CardCarousel
        listChildren={cards.map((card, index) => (
          <MinimalCard className="m-2 w-72" key={index}>
            <MinimalCardImage
              className="h-[10rem]"
              src={card.src}
              alt={card.title}
            />
            <MinimalCardTitle>{card.title}</MinimalCardTitle>
            <MinimalCardDescription>
              {card.description}
            </MinimalCardDescription>
          </MinimalCard>
        ))}
        autoplayDelay={3000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default TopEvent;
