import type { FC } from 'react';
import Head from 'next/head';
import BottomNav from './BottomNav';
import Modal from 'components/children/Modal';

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
    <div className={`bg-[#0b0c0e] min-h-svh lg:rounded-3xl ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="px-[4vw]">
        {children} <Modal />
      </main>
      {isBottomNav && <BottomNav />}
    </div>
  );
};

export default Layout;
