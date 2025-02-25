import { type FC } from 'react';
import { ArrowLeft2, SearchNormal } from 'iconsax-react';
import { useRouter } from 'next/navigation';

const Header2: FC<{ title: string }> = ({ title }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <header className="flex w-[90vw] static py-4 justify-between items-center">
      <ArrowLeft2 size="25" color="#d9e3f0" onClick={handleBack} />
      <h1 className="text-xl font-bold text-gray-50">{title}</h1>
      <SearchNormal size="25" color="#d9e3f0" />
    </header>
  );
};

export default Header2;
