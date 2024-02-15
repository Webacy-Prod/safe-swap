'use client'

import Logo from "./Logo";

const SafeSwapLogo = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <Logo />
      <div className="text-[2.2rem] -mt-2 font-thin">
        <span className="font-medium">safe</span>swap
      </div>
    </div>
  );
}

export default SafeSwapLogo;