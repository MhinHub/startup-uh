import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import Header2 from '@/components/Layout/Header2';
import { Box } from '@/components/Startup';

const Startup: NextPage = () => (
  <Layout title="Startup dari anggota Startup Unhas" isBottomNav={false}>
    <Header2 title="Startup" />
    <div className="flex flex-col w-full items-center justify-center content-center">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  </Layout>
);

export default Startup;
