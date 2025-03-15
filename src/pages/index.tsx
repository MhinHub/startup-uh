import { type NextPage } from 'next';
import { useState } from 'react';
import Layout from '@/components/Layout';
import {
  Header,
  DasborKegiatan,
  MenuCepat,
  TopEvent,
  TopIdeabox,
} from '@/components/Home';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col justify-center lg:px-[33vw]">
      <Layout title="Startup Unhas" isBottomNav>
        <Header />
        <DasborKegiatan />
        <MenuCepat />
        <TopEvent setLoading={setIsLoading} />
        {!isLoading && <TopIdeabox />}
      </Layout>
    </div>
  );
};

export default Home;