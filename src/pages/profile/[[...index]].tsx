import { UserProfile } from '@clerk/nextjs';
import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout title="Profile" isBottomNav>
      <section className="w-full pt-12 h-svh flex justify-center items-center relative">
        <UserProfile />
      </section>
    </Layout>
  );
}
