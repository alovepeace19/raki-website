import React from 'react';

const Careers: React.FC = () => {
    return (
        <section id="careers" className="py-20 md:py-32 bg-black border-b border-zinc-900">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter mb-6">
                    Work With Us
                </h2>
                <p className="text-xl md:text-2xl font-bold text-white mb-6">
                    Join the Raki team in Burnaby.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
                    We are hiring professional hair stylists who value efficiency and precision. If you're interested in joining us, please send your resume directly to:
                </p>
                
                <a 
                    href="mailto:rakihairsalon@gmail.com" 
                    className="text-2xl md:text-4xl font-bold text-raki-gold hover:text-white transition-colors block tracking-tight"
                >
                    rakihairsalon@gmail.com
                </a>
            </div>
        </section>
    );
};

export default Careers;