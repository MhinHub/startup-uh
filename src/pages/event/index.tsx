import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import Header2 from '@/components/Layout/Header2';
import { Box } from '@/components/Event';

const Event: NextPage = () => (
  <Layout title="Event Startup Unhas" isBottomNav={false}>
    <Header2 title="Event" />
    <div className="flex flex-col w-full items-center justify-center content-center">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  </Layout>
);

export default Event;
