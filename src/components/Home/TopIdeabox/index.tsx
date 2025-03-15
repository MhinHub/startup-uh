"use client";

import { useState, useEffect, type FC } from "react";
import { CardSwipe } from "@/components/ui/card-swipe";
import { LampCharge } from "iconsax-react";
import axios from "axios";

const TopIdeabox: FC = () => {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getIdeas = async () => {
    try {
      const responses = await Promise.all(
        Array.from({ length: 5 }, () => axios.get("https://xeculus.pythonanywhere.com/generate"))
      );
      setIdeas(responses.map((res) => res.data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIdeas();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full my-6 overflow-visible">
      {isLoading ? (
        <p className="text-gray-50 text-center">Loading...</p>
      ) : (
        <>
          <p className="text-gray-50 font-extrabold text-lg px-2">Top Ideabox</p>
          <div className="overflow-visible gap-4 w-full">

            <CardSwipe
              listChildren={ideas.map((idea, index) => (
                <div
                  key={index}
                  className="relative h-full rounded-xl border bg-grid-small-white/[0.5] bg-black p-2 md:rounded-3xl md:p-3 min-h-96 w-72 flex items-center justify-center"
                >
                  <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                  <LampCharge
                    size="120"
                    color="#d9e3f9"
                    variant="Bulk"
                    className="absolute inset-0 m-auto opacity-60 backdrop-blur-sm"
                  />
                  <div className="absolute z-10 inset-0 m-auto max-w-[80%] max-h-[20%] select-none">
                    <p className="text-white text-center text-xl font-bold">Startup Idea</p>
                    <p className="text-white font-light leading-4 text-center text-sm break-words">
                      {idea || "Loading..."}
                    </p>
                  </div>
                </div>
              ))}
              onSwipeLeft={() => console.log("swipe left")}
              onSwipeRight={() => console.log("swipe right")}
              autoPlay={false}
            />

          </div>
        </>
      )}
    </div>
  );
};

export default TopIdeabox;