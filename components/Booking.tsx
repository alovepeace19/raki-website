import React from 'react';

const Booking: React.FC = () => {
    return (
        <section id="booking-options" className="scroll-mt-32 py-16 md:py-24 bg-black border-b border-zinc-900">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tighter mb-3">
                    How to Book
                </h2>
                <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                    Limited spots every day
                </p>
            </div>

            <div className="max-w-xl mx-auto bg-black border border-zinc-800 md:border-2 md:border-raki-gold p-8 md:p-12 text-center relative overflow-hidden group mx-4 md:mx-auto">
                <div className="absolute top-0 left-0 w-full h-full bg-raki-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <i className="fas fa-calendar-check text-raki-gold text-3xl md:text-4xl mb-6 relative z-10"></i>
                <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase mb-4 relative z-10">Book Your Quick Haircut</h3>
                <p className="text-zinc-400 text-sm mb-8 md:mb-10 font-medium uppercase relative z-10">No prepayment required · Pay in store</p>
                
                <a 
                    href="https://square.site/book/YOUR_SQUARE_ID" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-4 md:py-5 text-center uppercase tracking-widest text-sm bg-raki-gold text-black font-extrabold hover:scale-105 hover:shadow-lg hover:shadow-raki-gold/20 transition-all duration-300 relative z-10"
                >
                    Book & Skip the Wait
                </a>
                
                <p className="text-zinc-500 text-[10px] md:text-[11px] tracking-widest font-bold mt-4 relative z-10 uppercase">
                    Online booking +$5 CAD
                </p>
            </div>
        </section>
    );
};

export default Booking;