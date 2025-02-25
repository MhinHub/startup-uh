import { type FC } from 'react';

const MessageBox: FC = () => (
  <div className="flex flex-col box-light-gray w-full h-fit rounded-3xl mt-5 p-4">
    <div className="flex justify-between items-center px-2">
      <p className="font-bold text-gray-50">Muh. Agam Ramdani</p>
      <p className="font-light text-sm text-gray-50">Lead</p>
    </div>
    <div className="box-light-gray w-full h-fit rounded-2xl p-2">
      <p className="text-sm font-semibold text-gray-100">
        Lorem ipsum dolor sit amet consectetur. Ac commodo sem eu faucibus.
        Ullamcorper velit quis sit egestas ac sagittis ut. Sollicitudin felis
        faucibus tellus velit. Eros pretium parturient netus consequat nascetur.
      </p>
    </div>
    <p className="text-end font-light text-xs text-gray-50 px-2">10:10 am</p>
  </div>
);

export default MessageBox;
