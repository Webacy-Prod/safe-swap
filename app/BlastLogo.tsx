import Image from 'next/image';
import { VscAdd } from 'react-icons/vsc';

export const BlastLogo = ({ small }: { small?: boolean }) => {
  return (
    <Image
      alt="Blast and Webacy"
      src="/blast-logo-glow.webp"
      width={small ? 110 : 180}
      height={small ? 80 : 100}
    />
  );
};

export default BlastLogo;
