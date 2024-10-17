import { type FC, ReactNode } from 'react';
import { Home2, Calendar, People, Profile } from 'iconsax-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavItemProps = {
  icon: ReactNode;
  path?: string;
  isActive?: boolean;
};

const NavItem: FC<NavItemProps> = ({ icon, isActive = false, path = '/' }) => (
  <Link href={path} passHref>
    <div
      className={`flex flex-col items-center justify-center gap-1 ${
        !isActive && 'opacity-40'
      }`}
    >
      {icon}
      {isActive && (
        <>
          <span className="bg-gray-50 w-1 h-1 rounded-full" />
          <div className="absolute p-11 transition-all">
            <div
              className={`bg-white absolute inset-0 m-auto blur-lg bg-opacity-70 w-6 h-6 rounded-full`}
            />
          </div>
        </>
      )}
    </div>
  </Link>
);

const BottomNav: FC = () => {
  const router = useRouter();
  const isActive = (path: string) => router.asPath === path;

  return (
    <div className="fixed bottom-0 w-full h-16">
      <div className="absolute box-light-gray rounded-3xl" />
      <div className="relative z-10">
        <div className="flex justify-around items-start h-full px-4 py-2 text-gray-50">
          <NavItem
            icon={<Home2 className="text-white" size={30} variant="Bulk" />}
            isActive={isActive('/')}
          />
          <NavItem
            icon={<Calendar size={30} variant="Linear" />}
            path="/agenda"
            isActive={isActive('/agenda')}
          />
          <NavItem
            icon={<People size={30} variant="Linear" />}
            path="/ruang"
            isActive={isActive('/ruang')}
          />
          <NavItem
            icon={<Profile size={30} variant="Linear" />}
            path="/profile"
            isActive={isActive('/profile')}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
