import { type FC, useState } from 'react';
import Image from 'next/image';
import {
  ExportSquare,
  ArrowSquareUp,
  MessageText1,
  Archive,
} from 'iconsax-react';

const Box: FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [countLike, setCountLike] = useState(100);
  const [countComment] = useState(100);
  const [countSave, setCountSave] = useState(100);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCountLike(isLiked ? countLike - 1 : countLike + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    setCountSave(isSaved ? countSave - 1 : countSave + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center box-light-gray w-full h-fit rounded-[30px] p-4 gap-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <Image
            src="https://source.unsplash.com/200x200?profile"
            width={45}
            height={45}
            className="rounded-full"
            alt="avatar"
          />
          <p className="text-base font-bold text-gray-50">Kiki Ramadan</p>
        </div>
        <div className="flex gap-2 items-center bg-gray-50 text-gray-950 rounded-full py-1 px-2">
          <p className="text-base font-bold">Selengkapnya</p>
          <ExportSquare size={20} />
        </div>
      </div>
      <div className="flex flex-col box-light-gray w-full h-fit rounded-3xl py-2 px-3 gap-1">
        <p className="font-medium text-sm leading-4 text-gray-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisl sit amet ultricies lacinia, nunc tortor aliquam ligula,
          eu aliquam nisl nisl eu lectus.
        </p>
        <Image
          src="https://source.unsplash.com/270x120?startup"
          width={270}
          height={125}
          className="rounded-3xl"
          alt="ideabox"
        />
      </div>
      <div className="flex justify-around items-center w-full mt-2 text-gray-50">
        <div
          className={`${
            isLiked ? 'text-green-500' : 'text-gray-50'
          } flex gap-2 items-center`}
        >
          <ArrowSquareUp
            size={25}
            variant={isLiked ? `Bulk` : `TwoTone`}
            onClick={handleLike}
          />
          <span className="text-base font-bold">{countLike}</span>
        </div>
        <div className={`flex gap-2 items-center`}>
          <MessageText1 size={25} variant={`TwoTone`} />
          <span className="text-base font-bold text-gray-50">
            {countComment}
          </span>
        </div>
        <div
          className={`${
            isSaved ? 'text-purple-500' : 'text-gray-50'
          } flex gap-2 items-center`}
        >
          <Archive
            size={25}
            variant={isSaved ? `Bulk` : `TwoTone`}
            onClick={handleSave}
          />
          <span className="text-base font-bold">{countSave}</span>
        </div>
      </div>
    </div>
  );
};

export default Box;
