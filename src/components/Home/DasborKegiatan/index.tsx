import { type FC } from 'react';
import Row1 from './Row1';
import Row2 from './Row2';

const DasborKegiatan: FC = () => (
  <div className="flex gap-2 items-center relative w-full px-3 py-4">
    <div className="absolute box-light-gray rounded-[30px]" />
    <Row1 />
    <Row2 />
  </div>
);

export default DasborKegiatan;
