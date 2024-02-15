import Image from 'next/image';

export const Partners = () => {
  return (
    <div className="space-y-3 text-sm text-center">
      <div>
        <strong className="uppercase opacity-50">Trusted By</strong>
      </div>
      <div className="opacity-60 space-y-6">
        <div className="grid grid-cols-3 lg:grid-cols-7 items-center justify-items-center gap-8">
          <Image
            src="/partners/mintify_logo.webp"
            alt="Mintify Partner Logo"
            width="110"
            height="100"
          />
          <Image
            src="/partners/ens.png"
            alt="ENS Partner Logo"
            width="80"
            height="100"
          />
          <Image
            src="/partners/unstoppable.png"
            alt="Unstoppable Partner Logo"
            width="140"
            height="200"
          />
          <Image
            src="/partners/vayner.png"
            alt="Vayner Partner Logo"
            width="50"
            height="50"
          />
          <Image
            src="/partners/quantstamp.png"
            alt="Quantstap Partner Logo"
            width="150"
            height="150"
          />
          <Image
            src="/partners/origin.png"
            alt="Origin Partner Logo"
            width="80"
            height="100"
          />
          <Image
            src="/partners/certik.png"
            alt="Certik Partner Logo"
            width="150"
            height="100"
          />
        </div>
      </div>
    </div>
  );
};
