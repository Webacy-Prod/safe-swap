'use client';

import { useEffect, useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import Button from './Button';

interface Props {
  disabled?: boolean;
  label?: string;
  amount?: number;
}

export default function SignButton({ disabled, label, amount }: Props) {
  // 4. Use modal hook
  const { signMessage } = useSignMessage();
  const { isConnected } = useAccount();
  const [isDefinitelyConnected, setIsDefinitelyConnected] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setIsDefinitelyConnected(true);
    } else {
      setIsDefinitelyConnected(false);
    }
  }, [isConnected]);

  if (isDefinitelyConnected) {
    return (
      <>
        <Button onClick={() => signMessage({ message: `Swap ${amount}USDC to ${amount}USDB` })} color="yellow" disabled={disabled}>{label || 'Swap'}</Button>
      </>
    )
  }

  return null;
}