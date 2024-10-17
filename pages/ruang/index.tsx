import Layout from 'components/Layout';
import { Whatsapp, Messages2 } from 'iconsax-react';

const Ruang = () => {
  return (
    <Layout title="Ruang" isBottomNav>
      <section className="min-h-svh py-5 w-full">
        <div className="flex flex-col items-start justify-center box-light-gray w-full h-fit rounded-[30px] p-4">
          <div className="flex items-center w-full gap-2 mb-2">
            <Messages2 size="40" color="#d9e3f0" />
            <div className="flex flex-col items-start">
              <p className="font-bold text-gray-50 text-lg text-start whitespace-nowrap">
                Discussion Group
              </p>
              <div className="flex items-center gap-1">
                <p className="font-medium text-gray-50 text-xs">Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ruang;
