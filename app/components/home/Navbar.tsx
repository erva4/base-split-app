"use client";
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
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-inner border border-white/10">
                            <CurrencyDollarIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                        Base Split
                    </span>
                </div>

                {/* Navigation Links - Centered */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {['Home', 'Features', 'App', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                        </button>
                    ))}
                </div>

                {/* Wallet Connection - Right */}
                <div className="flex items-center gap-4">
                    <Wallet>
                        <ConnectWallet className="bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-md">
                            <Avatar className="h-6 w-6" />
                            <Name className="text-gray-200" />
                        </ConnectWallet>
                        <WalletDropdown>
                            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                                <Avatar />
                                <Name />
                                <Address />
                                <EthBalance />
                            </Identity>
                            <WalletDropdownBasename />
                            <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
                                Wallet
                            </WalletDropdownLink>
                            <WalletDropdownFundLink />
                            <WalletDropdownDisconnect />
                        </WalletDropdown>
                    </Wallet>
                </div>
            </div>
        </nav>
    );
}
