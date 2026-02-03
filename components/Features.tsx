import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
    {
        iconClass: 'fas fa-stopwatch',
        title: 'AROUND 20 MIN',
        subtitle: 'Pay by job · Not by the minute'
    },
    {
        iconClass: 'fas fa-tag',
        title: '$19.99 CAD · For All',
        subtitle: 'Flat Price · Men, Women & Kids'
    },
    {
        iconClass: 'fas fa-calendar-check',
        title: 'Walk-in or Book',
        subtitle: 'Online Booking +$5 CAD'
    }
];

const Features: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-black border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white uppercase tracking-tighter">Why Raki</h2>
                    <div className="h-1 w-20 bg-raki-gold mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <article 
                            key={index}
                            className="p-6 md:p-10 bg-black border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:border-raki-gold group"
                        >
                            <div className="w-10 h-10 border border-zinc-800 group-hover:border-raki-gold text-raki-gold flex items-center justify-center mb-6 md:mb-8 transition-colors duration-300">
                                <i className={`${feature.iconClass} text-lg`}></i>
                            </div>
                            <h3 className="text-xl font-extrabold mb-3 md:mb-4 text-white uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed font-bold uppercase tracking-wide text-sm group-hover:text-zinc-400 transition-colors">
                                {feature.subtitle}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;