import { type FC } from 'react';
import { CloseCircle } from 'iconsax-react';

const Modal: FC = () => (
  <>
    <input type="checkbox" id="modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative text-gray-50 bg-gray-600/50 backdrop-blur backdrop-filter drop-shadow-xl">
        <label
          htmlFor="modal"
          className="cursor-pointer absolute right-2 top-2"
        >
          <CloseCircle size="32" color="#f47373" variant="Bulk" />
        </label>
        <h3 className="text-lg font-bold text-center">
          Terima kasih telah berpartisipasi👏
        </h3>
        <p className="py-4">
          Bagaimana menurutmu? Silahkan beri masukan anonim melalui tombol ???
        </p>
      </div>
    </div>
  </>
);

export default Modal;
