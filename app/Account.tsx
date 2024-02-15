'use client';

import { truncateEthAddress } from "@/utils/crypto";
import { useEffect, useState } from "react";
import { VscCheck, VscWarning } from "react-icons/vsc";
import { Address } from "viem";
import { useAccount } from "wagmi";
import ConnectButton from "./ConnectButton";
import DisconnectButton from "./DisconnectButton";

const Account = ({ safeHuman }: { safeHuman?: boolean; }) => {
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
      <div className="flex items-center gap-3">
        <div className="bg-yellow-200/10 inline-flex p-1 px-2 rounded text-xs font-mono gap-3">
          {chain?.name} {truncateEthAddress(address as Address)}
          {safeHuman ? (
            <div className="inline-flex bg-teal-500/30 text-teal-300 items-center gap-1 text-[10px] rounded-sm px-1">
              <VscCheck /> Verified Safe Human
            </div>
          ) : (
            <div className="inline-flex bg-red-500/30 text-red-300 items-center gap-1 text-[10px] rounded-sm px-1">
              <VscWarning /> Risky Addresses Detected
            </div>
          )}
          <DisconnectButton />
        </div>
      </div>
    );
  }

  return <ConnectButton />;

}

export default Account;