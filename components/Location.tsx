import React from 'react';

const Location: React.FC = () => {
    return (
        <section id="location" className="py-16 md:py-24 bg-black border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 border border-zinc-800 grid md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center bg-black order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-10 text-white uppercase tracking-tighter text-center md:text-left">Contact Us</h2>
                    <div className="space-y-8 md:space-y-10">
                        <div className="flex items-start gap-4 md:gap-6 group">
                            <i className="fas fa-map-marker-alt text-raki-gold mt-1 text-xl group-hover:scale-125 transition-transform duration-300 shrink-0"></i>
                            <div>
                                <a 
                                    href="https://maps.app.goo.gl/dMGRM7ZQpbsRY2Q38" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-base md:text-lg font-bold text-zinc-200 underline hover:text-raki-gold transition-colors block mb-1 decoration-zinc-700 underline-offset-4 py-1"
                                >
                                    4500 Kingsway #2603, Burnaby, BC V5H 2A9
                                </a>
                                <p className="text-base md:text-lg font-bold text-raki-gold uppercase text-sm tracking-wider">Located in Crystal Mall</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 md:gap-6 group">
                            <i className="fas fa-clock text-raki-gold mt-1 text-xl group-hover:scale-125 transition-transform duration-300 shrink-0"></i>
                            <p className="text-base md:text-lg font-bold text-zinc-200 uppercase py-1">Daily: 10 a.m. – 7 p.m.</p>
                        </div>
                        <div className="flex items-start gap-4 md:gap-6 group">
                            <i className="fas fa-phone-alt text-raki-gold mt-1 text-xl group-hover:scale-125 transition-transform duration-300 shrink-0"></i>
                            <a 
                                href="tel:+17788552855" 
                                className="text-base md:text-lg font-bold text-raki-gold hover:underline hover:text-white transition-colors uppercase decoration-raki-gold underline-offset-4 py-1"
                            >
                                (778) 855-2855
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-80 md:h-auto grayscale invert opacity-70 hover:opacity-100 transition-all duration-700 border-b md:border-b-0 md:border-l border-zinc-800 order-1 md:order-2">
                    <iframe 
                        title="Raki Location" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.350616196237!2d-123.0039294!3d49.2276508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867660601f0535%3A0x6b8d4e7195d7f191!2sRaki%20Quick%20Haircut!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;