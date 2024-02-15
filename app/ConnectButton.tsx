'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react'
import Button from './Button';

interface Props {
  label?: string;
}

export default function ConnectButton({ label }: Props) {
  // 4. Use modal hook
  const { open } = useWeb3Modal()
  return (
    <>
      <Button onClick={() => open()} color="yellow">{label || 'Connect to Swap'}</Button>
    </>
  )
}