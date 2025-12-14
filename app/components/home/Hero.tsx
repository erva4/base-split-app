"use client";

export default function Hero() {
    return (
        <section className="pt-32 pb-12 px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Live on Base
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    Split Bills on <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        The Blockchain
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    The easiest way to split expenses with friends. Fast, secure, and purely on-chain. No intermediaries, just seamless settlements.
                </p>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute top-20 left-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen opacity-50" />
            </div>
        </section>
    );
}
