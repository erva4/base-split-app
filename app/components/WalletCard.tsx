'use client';

import { useRef, useState } from 'react';

// Bu bileşen dışarıdan "amount" (tutar) verisini alacak
export default function WalletCard({ amount }: { amount: string }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // Kart içindeki X konumu
        const y = e.clientY - rect.top;  // Kart içindeki Y konumu

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20) * -1; // Y ekseni ters çalışır
        const rotateY = (x - centerX) / 20;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 }); // Fare çıkınca düzelsin
    };

    return (
        <div className="perspective-1000 w-full flex justify-center my-6">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                }}
                className="relative w-[360px] h-[220px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-blue-900/40 cursor-pointer overflow-hidden transform-style-3d group"
            >
                {/* Işık Yansıması (Reflection) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Arka Plan Glow Efekti */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-40"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600 rounded-full blur-[80px] opacity-40"></div>

                {/* Kart İçeriği */}
                <div className="relative z-20 flex flex-col justify-between h-full text-white">

                    {/* Üst Kısım */}
                    <div className="flex justify-between items-start">
                        <span className="font-bold tracking-widest text-lg">BASE CARD</span>
                        {/* Temassız İkonu (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-80">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                    </div>

                    {/* Çip Resmi */}
                    <div className="mt-2">
                        <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt="chip" width="45" className="rounded-md opacity-90" />
                    </div>

                    {/* Bakiye Kısmı (Dinamik Değişecek Yer) */}
                    <div className="mt-4">
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Kişi Başı Pay</p>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                            {amount || '0.00'} ETH
                        </h2>
                    </div>

                    {/* Alt Bilgi */}
                    <div className="flex justify-between items-end">
                        <p className="font-mono text-sm text-gray-300">**** 9A23</p>
                        <div className="px-2 py-1 bg-blue-600 rounded text-[10px] font-bold">Base Sepolia</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
