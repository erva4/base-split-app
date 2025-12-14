"use client";
import { useState, useEffect } from "react";
import { UserGroupIcon, ShareIcon, CheckCircleIcon, ArrowPathIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function SplitterCard() {
    const [totalAmount, setTotalAmount] = useState<string>("");
    const [peopleCount, setPeopleCount] = useState<string>("2");
    const [splitAmount, setSplitAmount] = useState<number>(0);
    const [isLinkCreated, setIsLinkCreated] = useState(false);

    useEffect(() => {
        if (totalAmount && peopleCount) {
            const total = parseFloat(totalAmount);
            const people = parseInt(peopleCount);
            if (!isNaN(total) && !isNaN(people) && people > 0) {
                setSplitAmount(total / people);
            } else {
                setSplitAmount(0);
            }
        }
    }, [totalAmount, peopleCount]);

    const handleCreateRequest = () => {
        if (splitAmount > 0) {
            setIsLinkCreated(true);
        }
    };

    const handlePay = async () => {
        alert(`Initiating payment of ${splitAmount.toFixed(4)} ETH`);
    };

    return (
        <div className="max-w-md mx-auto mb-20 px-4">
            <div className="relative group">
                {/* Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-[1.8rem] p-8 shadow-2xl">
                    <div className="space-y-8">

                        {/* Total Amount Input */}
                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Total Bill (ETH)</label>
                            <div className="relative group/input">
                                <input
                                    type="number"
                                    value={totalAmount}
                                    onChange={(e) => setTotalAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full bg-white/5 border border-white/10 text-white text-4xl font-bold rounded-2xl py-6 pl-12 pr-4 focus:outline-none focus:bg-white/10 focus:border-blue-500/50 transition-all placeholder-gray-700"
                                />
                                <span className="absolute left-5 per-centered top-1/2 -translate-y-1/2 text-2xl text-gray-500 group-focus-within/input:text-blue-400 transition-colors">Ξ</span>
                            </div>
                        </div>

                        {/* People Count Input */}
                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Split With</label>
                            <div className="relative group/input">
                                <input
                                    type="number"
                                    value={peopleCount}
                                    onChange={(e) => setPeopleCount(e.target.value)}
                                    min="1"
                                    className="w-full bg-white/5 border border-white/10 text-white text-xl font-semibold rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:bg-white/10 focus:border-blue-500/50 transition-all"
                                />
                                <UserGroupIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 group-focus-within/input:text-blue-400 transition-colors" />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">People</div>
                            </div>
                        </div>

                        {/* Result Display */}
                        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 flex justify-between items-center">
                            <div>
                                <p className="text-blue-200 text-sm font-medium">Each Person Pays</p>
                                <p className="text-xs text-blue-400/60 mt-0.5">Including gas estimate</p>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-bold text-white tracking-tight">
                                    {splitAmount > 0 ? splitAmount.toFixed(4) : "0.00"}
                                </span>
                                <span className="text-sm text-blue-400 ml-1">ETH</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/5" />

                        {/* Action Buttons */}
                        {!isLinkCreated ? (
                            <button
                                onClick={handleCreateRequest}
                                disabled={!totalAmount || parseFloat(totalAmount) <= 0}
                                className="w-full relative overflow-hidden bg-white text-black hover:bg-gray-100 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed font-bold py-5 rounded-2xl text-lg transition-all transform active:scale-[0.99] shadow-lg shadow-white/10"
                            >
                                <div className="flex items-center justify-center gap-2 relative z-10">
                                    <ShareIcon className="w-5 h-5" />
                                    <span>Create Split Link</span>
                                </div>
                            </button>
                        ) : (
                            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-green-400">Ready to Share</h3>
                                        <p className="text-sm text-green-400/60">Your payment link is generated.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(`https://basesplit.xyz/pay?amount=${splitAmount}&recipient=0x...`);
                                            alert("Link copied to clipboard!");
                                        }}
                                        className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-xl border border-white/5 transition-all text-sm active:scale-95"
                                    >
                                        Copy Link
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsLinkCreated(false);
                                            setTotalAmount("");
                                            setPeopleCount("2");
                                        }}
                                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white font-semibold py-3 rounded-xl border border-white/5 transition-all flex items-center justify-center gap-2 text-sm active:scale-95"
                                    >
                                        <ArrowPathIcon className="w-4 h-4" />
                                        New Split
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
