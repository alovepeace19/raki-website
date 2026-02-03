import React from 'react';

const Hero: React.FC = () => {
    const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('booking-options');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center justify-center text-white px-4 border-b border-zinc-900 py-16 md:py-0">
            <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
                <p className="text-raki-gold font-bold tracking-[0.2em] mb-4 md:mb-8 text-sm sm:text-base uppercase">
                    20 min · No Wash · Walk-in & Booking
                </p>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] md:leading-[0.9] text-white">
                    Burnaby Quick <br className="block" /> Haircut $19.99
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-14 tracking-tighter uppercase text-zinc-400">
                    Serving Vancouver · Men & Women
                </h2>
                <div className="flex flex-col items-center gap-3 w-full">
                    <a 
                        href="#booking-options" 
                        onClick={scrollToBooking}
                        className="bg-raki-gold text-black px-10 py-5 md:px-12 md:py-5 rounded-sm text-base md:text-lg uppercase tracking-[0.15em] shadow-xl text-center w-full max-w-[320px] md:max-w-sm font-extrabold hover:scale-105 hover:shadow-[0_0_25px_rgba(251,176,59,0.4)] transition-all duration-300"
                    >
                        Book & Skip the Wait
                    </a>
                    <p className="text-zinc-500 text-xs md:text-[11px] tracking-widest font-bold mt-2 uppercase">
                        Online booking +$5 CAD
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;