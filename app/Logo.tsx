interface Props {
  pro?: boolean;
  ultra?: boolean;
}

export const Logo = ({ pro, ultra }: Props) => (
  <div className="flex items-center gap-3 relative">
    <img src="/webacyLogo.svg" alt="webacy-logo" className="h-[2rem]" />
    {pro && !ultra && (
      <div className="absolute right-0 -top-3 text-xs inline-block font-extrabold text-sky-200 rounded-xl">
        PRO
      </div>
    )}
    {ultra && (
      <div className="absolute right-0 -top-3 text-xs inline-block font-extrabold shimmer-text rounded-xl">
        ULTRA
      </div>
    )}
  </div>
);

export default Logo;