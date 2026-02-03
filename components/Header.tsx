import React, { useState, useEffect } from 'react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
    { platform: 'tiktok', url: 'https://www.tiktok.com/@raki_crystalmall', iconClass: 'fab fa-tiktok' },
    { platform: 'instagram', url: 'https://www.instagram.com/raki_quickhaircut/', iconClass: 'fab fa-instagram' },
    { platform: 'whatsapp', url: 'https://wa.me/17788552855', iconClass: 'fab fa-whatsapp' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-zinc-800 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-black py-4'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                    <span className="text-xl md:text-2xl font-serif tracking-[0.15em] text-white uppercase hover:text-raki-gold transition-colors duration-300">RAKI</span>
                </div>
                <div className="flex items-center space-x-5 md:space-x-6">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.platform}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-raki-gold transition-colors duration-300 transform hover:scale-110 p-1"
                        >
                            <i className={`${link.iconClass} text-xl md:text-xl`}></i>
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;