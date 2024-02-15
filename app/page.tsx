'use client';

import Input from "./Input";
import SafeSwapLogo from "./SafeSwapLogo";
import { VscAdd, VscChevronDown, VscTriangleDown, VscWarning } from "react-icons/vsc";
import BlastLogo from "./BlastLogo";
import ConnectButton from "./ConnectButton";
import { Partners } from "./Partners";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoSwapVerticalSharp } from "react-icons/io5";
import Spinner from "./Spinner";
import Account from "./Account";
import SignButton from "./SignButton";
import { useAccount } from "wagmi";
import Link from "next/link";

export default function Home() {
  const { address, isConnected } = useAccount();
  const [isDefinitelyConnected, setIsDefinitelyConnected] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setIsDefinitelyConnected(true);
    } else {
      setIsDefinitelyConnected(false);
    }
  }, [isConnected]);

  const [loading, setLoading] = useState<boolean>(false);
  const [fromValue, setFromValue] = useState<number | undefined>();
  const [toValue, setToValue] = useState<number | undefined>();
  const [safeHuman, setSafeHuman] = useState<boolean>(false);
  useEffect(() => {
    if (fromValue) {
      setLoading(true);
      setTimeout(() => {
        setToValue(fromValue)
        setLoading(false);
      }, 1000);
    }
  }, [fromValue, toValue])

  useEffect(() => {
    const random = Math.random();
    if (random > 0.5) {
      setSafeHuman(true);
    } else {
      setSafeHuman(false);
    }
  }, []);

  const renderLabel = () => {
    if (!safeHuman) return 'Ineligible for Swap';
    return !toValue ? 'Enter Amount' : 'Swap'
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-24 bg-gradient-to-b bg-black from-black to-yellow-200/10">
      <div className="gap-3 flex flex-col items-center">
        <SafeSwapLogo />
        <VscAdd />
        <BlastLogo />
      </div>
      <div className="text-yellow-200 text-center text-xl font-thin">
        Free Swaps and 0.1% cash-back for <strong>Safe Humans 🚶‍♂️🚶‍♀️</strong>
        <br />On the world’s only native yield Ethereum L2
      </div>
      <div className="max-w-screen-sm w-full flex gap-6 flex-col">
        <div className="space-y-3">
          <div className="text-yellow-200 inline-flex gap-2 items-center text-xs border border-yellow-200/20 rounded px-2 py-1">
            Ethereum
            <Image alt="ethereum" src="/network_icons/ethereum.png" height="14" width="14" className="rounded-full" />
            <VscChevronDown />
          </div>
          <div className="relative">
            <Input color="yellow" placeholder="0.0" value={fromValue} onChange={
              (changedValue: number) => {
                setFromValue(changedValue);
              }}
            />
            <div className="bg-yellow-200/10 w-auto px-3 py-2 absolute right-1 top-1 rounded flex gap-3 items-center">
              USDC
              <Image alt="usdc" src="/currency_icons/usdc.jpeg" width="20" height="20" className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-3xl">
          <IoSwapVerticalSharp className="text-yellow-200" />
        </div>
        <div className="space-y-3">
          <div className="text-yellow-200 inline-flex gap-2 items-center text-xs border border-yellow-200/20 rounded px-2 py-1">
            Blast
            <Image alt="ethereum" src="/network_icons/blast_ico.avif" height="14" width="14" className="rounded-full" />
            <VscChevronDown />
          </div>
          <div className="relative">
            <Input color="yellow" placeholder="0.0" value={toValue} onChange={
              (changedValue: number) => {
                setToValue(changedValue)}
            } />
            <div className="bg-yellow-200/10 w-auto px-3 py-2 absolute right-1 top-1 rounded flex gap-3 items-center">
              USDB
              <Image alt="usdc" src="/currency_icons/blast_ico.avif" width="20" height="20" className="rounded-full" />
            </div>
          </div>
          {loading && (<Spinner className="h-4 w-4" />)}
          {!loading && toValue && (
            <div className="text-xs font-mono text-yellow-200 inline-block">
              {toValue} USDB
              <br />+{toValue && toValue * 0.001} USDB (deposited on Blast only)
              <br />
              <div className="border-b border-b-yellow-200 my-2" />
              {toValue && toValue * 1.001} USDB (+{toValue && toValue * .041} USDB/4.1% APY on Blast only)
            </div>
          )}
        </div>
        <Account safeHuman={safeHuman} />
        {isDefinitelyConnected && !safeHuman && (
          <div className="border border-red-400 text-red-400 p-3">
            <div className="space-y-3">
              <p>
                <VscWarning className="text-2xl" />
              </p>
              <p>
                This address is not eligible for Webacy SafeSwap because of any of the following reasons:
              </p>
              <ol>
                <li>1. Too new to verify</li>
                <li>2. Too inactive to verify</li>
                <li>3. Is a non-human address</li>
                <li>4. Has been identified as being involved in nefarious activity</li>
              </ol>
              <p>Please connect a different wallet or try swapping again after getting more active on Ethereum.</p>
              <p className="text-right">
                <Link href={`https://webacy-dapp-staging.vercel.app/blast/${address}`} className="text-yellow-200 underline">Find Out More</Link>
              </p>
            </div>
          </div>
        )}
        <SignButton
          label={renderLabel()}
          disabled={!toValue && !safeHuman}
          amount={toValue}
        />
      </div>
      <div className="border-t border-t-white/10 items-center justify-center pt-3 mt-6">
        <Partners />
      </div>
    </main>
  );
}
