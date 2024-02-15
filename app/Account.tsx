'use client';

import { truncateEthAddress } from "@/utils/crypto";
import { useEffect, useState } from "react";
import { Address } from "viem";
import { useAccount } from "wagmi";
import ConnectButton from "./ConnectButton";
import DisconnectButton from "./DisconnectButton";

const Account = () => {
  const { address, isConnected, chain } = useAccount();
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
      <div>
        <div className="bg-yellow-200/10 inline-flex p-1 px-2 rounded text-xs font-mono gap-3">
          {chain?.name} {truncateEthAddress(address as Address)} <DisconnectButton />
        </div>
      </div>
    );
  }

  return <ConnectButton />;

}

export default Account;