import type { FC } from 'react';
import Head from 'next/head';
import BottomNav from './BottomNav';
import Modal from '@/components/children/Modal';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
  description?: string;
  isBottomNav?: boolean;
  className?: string;
};

const Layout: FC<LayoutProps> = ({
  title,
  children,
  description = 'Aplikasi Startup Unhas',
  isBottomNav = true,
  className
}) => {
  return (
    <div className={`bg-[#010101] bg-dot-white/[0.2] min-h-svh lg:rounded-3xl overflow-hidden relative ${className}`}>
      <div className="absolute -z-0 h-full pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="px-[3vw] h-svh overflow-y-scroll overflow-x-hidden">
        {children} <Modal />
      </main>
      {isBottomNav && <BottomNav />}
    </div>
  );
};

export default Layout;
