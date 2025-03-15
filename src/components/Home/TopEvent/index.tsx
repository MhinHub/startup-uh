import { type FC, useEffect, useState } from 'react';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";
import { CardCarousel } from '@/components/ui/card-carousel';
import { fakerID_ID as faker } from '@faker-js/faker';

interface TopEventProps {
  setLoading: (isLoading: boolean) => void;
}

const TopEvent: FC<TopEventProps> = ({ setLoading }) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const urls = await Promise.all(
          Array.from({ length: 5 }).map(async () => {
            const response = await fetch('https://api.api-ninjas.com/v1/randomimage?category=technology', {
              headers: {
                'X-Api-Key': 'KY6F1aIcZFTJwAsMrZ0Xrw==a77nngSg4jKPyduT',
                'Accept': 'image/jpg'
              }
            });
            const blob = await response.blob();
            return URL.createObjectURL(blob);
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [setLoading]);

  return (
    <div className="flex flex-col gap-4 w-full my-6 relative">
      {imageUrls.length === 0 ? (
        <p className="text-gray-50 text-center">Loading...</p>
      ) : (
        <>
          <p className="text-gray-50 font-extrabold text-lg px-2">Top Event</p>
          <CardCarousel
            listChildren={imageUrls.map((url, index) => (
              <MinimalCard className="m-2 w-72" key={index}>
                <MinimalCardImage
                  className="h-40 w-full aspect-video object-cover object-center"
                  src={url}
                  alt={faker.lorem.sentence()}
                />
                <MinimalCardTitle className='line-clamp-2'>{faker.lorem.sentence()}
                </MinimalCardTitle>
                <MinimalCardDescription className='line-clamp-3'>
                  {faker.lorem.paragraph()}
                </MinimalCardDescription>
              </MinimalCard>
            ))}
            autoplayDelay={3000}
            showPagination={true}
            showNavigation={true}
          />
        </>
      )}
    </div>
  );
}

export default TopEvent;