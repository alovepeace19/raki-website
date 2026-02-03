import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="pt-16 md:pt-[120px] px-4 pb-12 md:pb-20 text-center bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Logo */}
                <h2 className="text-4xl md:text-[64px] font-serif tracking-[0.15em] mb-8 md:mb-12 text-white uppercase">
                    RAKI
                </h2>
                
                {/* Social Icons */}
                <div className="flex justify-center items-center gap-8 md:gap-10 mb-8 md:mb-9">
                    <a href="https://www.tiktok.com/@raki_crystalmall" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:opacity-70 transition-opacity">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="https://www.instagram.com/raki_quickhaircut/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:opacity-70 transition-opacity">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/17788552855" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:opacity-70 transition-opacity">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>

                {/* Address */}
                <a 
                    className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-3 text-[11px] md:text-[13px] tracking-[0.1em] uppercase font-bold text-white/95 hover:text-raki-gold transition-colors decoration-none" 
                    href="https://maps.app.goo.gl/dMGRM7ZQpbsRY2Q38" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-map-marker-alt text-raki-gold text-sm"></i> 
                    <span className="text-center">2603–4500 KINGSWAY · BURNABY, BC V5H 2A9 · CANADA</span>
                </a>

                {/* Hours */}
                <div className="text-[11px] tracking-[0.16em] uppercase text-white/35 mb-16 md:mb-24">
                    MON–SUN · 10:00 AM – 7:00 PM
                </div>

                {/* Meta */}
                <div className="pt-8 md:pt-10 border-t border-zinc-900">
                    <div className="text-[10px] md:text-[11px] tracking-[0.18em] text-white/30 uppercase mb-2">
                        © 2026 RAKI QUICK HAIRCUT. JAPANESE & KOREAN QUICK CUT SPECIALISTS.
                    </div>
                    <div className="text-[9px] md:text-[10px] tracking-[0.16em] text-white/20 uppercase">
                        Walk-ins welcome · Flat price · No upsell
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;