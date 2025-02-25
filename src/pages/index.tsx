import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import {
  Header,
  DasborKegiatan,
  MenuCepat,
  TopEvent,
  TopIdeabox,
} from '@/components/Home';

const Home: NextPage = () => (
  <div className="flex flex-col justify-center lg:px-[33vw]">
    <Layout title="Startup Unhas" isBottomNav>
      <Header />
      <DasborKegiatan />
      <MenuCepat />
      <TopEvent />
      <TopIdeabox />
    </Layout>
  </div>
);

export default Home;
