'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useAccount } from 'wagmi';
import {
    UserGroupIcon,
    ShareIcon,
    CheckCircleIcon,
    ArrowPathIcon,
    ClipboardDocumentIcon
} from '@heroicons/react/24/outline';
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownDisconnect,
    WalletDropdownLink,
    WalletDropdownBasename,
    WalletDropdownFundLink
} from '@coinbase/onchainkit/wallet';
import {
    Address,
    Avatar,
    Name,
    Identity,
    EthBalance
} from '@coinbase/onchainkit/identity';
import WalletCard from './WalletCard';

export default function SplitBill() {
    const { address } = useAccount();
    const [totalAmount, setTotalAmount] = useState<string>('');
    const [peopleCount, setPeopleCount] = useState<string>('2');
    const [isLinkCreated, setIsLinkCreated] = useState(false);

    // 3D Tilt Effect
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), { stiffness: 100, damping: 20 });

    // Calculation
    const splitAmount = totalAmount && peopleCount
        ? (parseFloat(totalAmount) / parseFloat(peopleCount)).toFixed(4)
        : '0';

    const handleCreateRequest = () => {
        if (splitAmount && parseFloat(splitAmount) > 0) {
            setIsLinkCreated(true);
        }
    };

    const shareLink = `https://basesplit.xyz/pay?amount=${splitAmount}&recipient=${address}`;

    return (
        <section id="app" className="min-h-screen flex items-center justify-center relative py-20 pb-40">

            {/* 3D Card Container */}
            <motion.div
                ref={ref}
                style={{ rotateX, opacity, scale, perspective: 1000 }}
                className="relative w-full max-w-lg mx-auto px-4"
            >
                <div className="relative backdrop-blur-3xl bg-black/60 border border-white/10 rounded-[2.5rem] shadow-2xl shadow-blue-500/10 overflow-hidden transform-gpu transition-all duration-300 hover:shadow-cyan-500/20 group">

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Header (Mini-App Style) */}
                    <div className="pt-8 px-8 pb-4 text-center relative z-10">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            Split & Share
                        </h2>
                        <p className="text-gray-400 text-sm mt-1 font-medium">Create a payment link in seconds</p>
                    </div>

                    <div className="px-8 pb-8 space-y-6">

                        {/* INPUTS: Only show if link is NOT created */}
                        {!isLinkCreated ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-8"
                            >
                                {/* Input Group: Total */}
                                <div className="space-y-3">
                                    <label className="text-xs font-semibold text-blue-400 uppercase tracking-widest ml-1">Total Bill</label>
                                    <div className="relative group/input">
                                        <input
                                            type="number"
                                            value={totalAmount}
                                            onChange={(e) => setTotalAmount(e.target.value)}
                                            placeholder="0.00"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-2xl font-bold text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500/50 outline-none transition-all"
                                        />
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500">Ξ</span>
                                    </div>
                                </div>

                                {/* Input Group: People */}
                                <div className="space-y-3">
                                    <label className="text-xs font-semibold text-purple-400 uppercase tracking-widest ml-1">People</label>
                                    <div className="relative group/input">
                                        <input
                                            type="number"
                                            min="2"
                                            value={peopleCount}
                                            onChange={(e) => setPeopleCount(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-xl font-bold text-white placeholder-gray-600 focus:bg-white/10 focus:border-purple-500/50 outline-none transition-all"
                                        />
                                        <UserGroupIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
                                    </div>
                                </div>

                                {/* Wallet Card Display */}
                                <div className="py-4">
                                    <WalletCard amount={splitAmount} />
                                </div></motion.div>
                        ) : (
                            /* SUCCESS STATE: Link Created */
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="space-y-6"
                            >
                                <div className="text-center space-y-2">
                                    <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 ring-1 ring-green-500/50">
                                        <CheckCircleIcon className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Request Ready!</h3>
                                    <p className="text-gray-400">Share this link to get paid.</p>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 break-all">
                                    <p className="text-blue-300 font-mono text-xs">{shareLink}</p>
                                </div>
                            </motion.div>
                        )}


                        {/* ACTION BUTTONS */}
                        <div className="pt-2">
                            {address ? (
                                <>
                                    {!isLinkCreated ? (
                                        <button
                                            onClick={handleCreateRequest}
                                            disabled={!totalAmount}
                                            className="group w-full relative overflow-hidden bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                <ShareIcon className="w-5 h-5" />
                                                Create Split Request
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                                        </button>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4">
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(shareLink);
                                                    alert('Link copied!');
                                                }}
                                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                            >
                                                <ClipboardDocumentIcon className="w-5 h-5" />
                                                Copy Link
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsLinkCreated(false);
                                                    setTotalAmount('');
                                                }}
                                                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                            >
                                                <ArrowPathIcon className="w-5 h-5" />
                                                New Split
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-3">
                                    <p className="text-gray-400 text-sm">Connect your wallet to create a request</p>
                                    <Wallet>
                                        <ConnectWallet className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-full justify-center">
                                            <span className="text-sm font-bold">Connect Wallet</span>
                                        </ConnectWallet>
                                    </Wallet>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
