import { type FC } from 'react';
import Image from 'next/image';
import BtnBorder from "components/elements/BtnBorder"


const MenuIcon: FC<{ src: string; className?: string }> = ({
  src = '',
  className,
}) => (
  <div className="relative size-14">
    {/* <button className="size-fit p-4 hover:animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"> */}
    {/* <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] hover:animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 p-3 text-sm font-medium text-white backdrop-blur-3xl"> */}
    {/*<li class="group"><a target="_blank" class="border border-dark-5/60 border-dark-4 rounded-2xl flex items-center justify-center p-0.5 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:size-[3.2rem]" href="mailto:shawndsilva.mail@gmail.com"><div class="border border-dark-5 border-dark-3 size-full flex items-center justify-center p-2 rounded-xl">*/}
    <BtnBorder>
      <Image
        className="object-cover"
        src={src}
        width={32}
        height={32}
        quality={100}
        alt="Menu Cepat"
        priority
      />
    </BtnBorder>
  </div>
);

export default MenuIcon;
