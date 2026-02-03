import React from 'react';

const HappyHour: React.FC = () => {
    const scrollToLocation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('location');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="happy-hour" className="py-16 md:py-24 bg-black border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Content Side */}
                <div className="order-2 md:order-1">
                     <div className="inline-block border border-raki-gold px-3 py-1 mb-6">
                        <span className="text-raki-gold font-bold tracking-widest text-xs uppercase">Special Promotion</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter mb-4">
                        Happy Hour Special
                    </h2>
                    
                    <div className="flex items-baseline gap-2 mb-8 border-b border-zinc-900 pb-8">
                        <span className="text-5xl md:text-6xl font-extrabold text-raki-gold tracking-tight">$14.99</span>
                        <span className="text-xl md:text-2xl font-bold text-zinc-500 uppercase tracking-widest">CAD</span>
                    </div>
                    
                    <ul className="space-y-4 md:space-y-5">
                        {[
                            'Monday–Friday',
                            '10:00 AM – 2:00 PM',
                            'Walk-in Only',
                            'Limited Time Slots'
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-4 group">
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-raki-gold rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                {item === 'Walk-in Only' ? (
                                    <a 
                                        href="#location"
                                        onClick={scrollToLocation}
                                        className="text-raki-gold font-bold uppercase tracking-wide text-sm md:text-base hover:text-white transition-colors hover:underline decoration-raki-gold underline-offset-4 cursor-pointer"
                                    >
                                        {item}
                                    </a>
                                ) : (
                                    <span className="text-zinc-200 font-bold uppercase tracking-wide text-sm md:text-base group-hover:text-white transition-colors">{item}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Side */}
                <div className="order-1 md:order-2 h-72 md:h-[500px] relative overflow-hidden">
<img
  src="/store-photo.jpeg"
  alt="RAKI salon interior"
  loading="lazy"
  className="w-full h-full object-cover grayscale contrast-125 brightness-75 hover:scale-105 transition-transform duration-1000 ease-out"
/>
                    {/* Inner border/overlay effect */}
                    <div className="absolute inset-0 border border-zinc-800/50 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default HappyHour;
