import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import Header2 from '@/components/Layout/Header2';
import { DateBadge, MessageBox } from '@/components/Pengumuman';

const Pengumuman: NextPage = () => (
  <Layout title="Pengumuman Startup Unhas" isBottomNav={false}>
    <Header2 title="Pengumuman" />
    <div className="flex flex-col w-full items-center justify-center content-center">
      <DateBadge />
      <MessageBox />
      <MessageBox />
      <MessageBox />
      <MessageBox />
    </div>
  </Layout>
);

export default Pengumuman;
