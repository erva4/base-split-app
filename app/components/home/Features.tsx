"use client";
import { BoltIcon, ShieldCheckIcon, WalletIcon } from "@heroicons/react/24/outline";

export default function Features() {
    const features = [
        {
            name: "Instant Settlement",
            description: "Payments settle instantly on the Base network.",
            icon: BoltIcon,
        },
        {
            name: "Secure Logic",
            description: "Non-custodial. Funds go directly peer-to-peer.",
            icon: ShieldCheckIcon,
        },
        {
            name: "Any Wallet",
            description: "Works with Coinbase Wallet and other web3 providers.",
            icon: WalletIcon,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
