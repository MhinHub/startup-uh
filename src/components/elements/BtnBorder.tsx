import React from 'react';

type BtnBorderProps = {
    children: React.ReactNode;
}

const BtnBorder = ({ children }: BtnBorderProps) => {
    return (
        <button className="relative items-center gap-2 p-3 font-semibold text-gray-50 bg-gradient-to-tr from-gray-900/30 via-gray-900/70 to-gray-900/30 ring-4 hover:ring-8 transition-all duration-300 ease-out ring-gray-900/20 rounded-tl-xl rounded-br-xl overflow-hidden hover:opacity-90 before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-tl-xl before:rounded-br-xl before:bg-gradient-to-b before:from-gray-50/10 before:blur-xl">
            {children}
        </button>
    );
}

export default BtnBorder;
