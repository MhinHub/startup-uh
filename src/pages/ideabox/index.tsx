import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import Header2 from '@/components/Layout/Header2';
import { Box } from '@/components/Ideabox';

const Ideabox: NextPage = () => (
  <Layout title="Ideabox Startup Unhas" isBottomNav={false}>
    <Header2 title="Ideabox" />
    <div className="flex flex-col w-full items-center justify-center content-center my-3 gap-5">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  </Layout>
);

export default Ideabox;
