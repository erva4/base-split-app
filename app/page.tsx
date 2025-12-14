"use client";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import SplitBill from "./components/SplitBill";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 pt-24 pb-12">
        <div id="home">
          <Hero />
        </div>

        <div id="app" className="mb-20">
          <SplitBill />
        </div>

        <div id="features" className="py-20 relative">
          {/* Section Divider */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />
          <Features />
        </div>

        {/* Global Lighting for App Section */}
        <div className="absolute top-[40%] left-0 w-full h-[100vh] pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
        </div>
      </main>

      <div id="contact" className="relative z-10">
        <Footer />
      </div>

      {/* Noise Texture */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>
    </div>
  );
}
