"use client";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa"; // Assuming react-icons is available or I will use standard svgs if not. 
// Actually, I don't know if react-icons is installed. I should check package.json or use Lucide/Heroicons.
// Heroicons was in package.json. I'll use simple text or available icons.

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/50 backdrop-blur-xl mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold text-white">Base Split</h3>
                        <p className="text-gray-400 max-w-sm">
                            The seamless way to split expenses on-chain. Secure, fast, and built for the future of finance on Base.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div id="contact-section">
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="mailto:support@basesplit.xyz" className="hover:text-blue-400 transition-colors">Support</a></li>
                            <li><a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                            <li><a href="https://discord.com" target="_blank" className="hover:text-blue-400 transition-colors">Discord</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Base Split. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
