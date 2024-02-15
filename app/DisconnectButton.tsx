'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { CiLogout } from "react-icons/ci";

interface Props {
  label?: string;
}

export default function DisconnectButton({ label }: Props) {
  // 4. Use modal hook
  const { open } = useWeb3Modal()
  return (
    <>
      <div onClick={() => open()} className="text-yellow-200 underline inline-flex items-center gap-1 cursor-pointer"><CiLogout /> Disconnect/Change Network</div>
    </>
  )
}