import React from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How long does a haircut take at Raki?",
        answer: "All haircuts follow a 20-minute system cut."
    },
    {
        question: "Is the price the same for men, women, and kids?",
        answer: "Yes. All haircuts are $19.99 CAD, tax included, for men, women, and kids."
    },
    {
        question: "Can I walk in without booking?",
        answer: "Yes. Walk-ins are welcome, based on availability."
    },
    {
        question: "Do you offer online booking?",
        answer: "Yes. Online booking is available to skip the wait. A $5 booking fee applies. No prepayment required."
    },
    {
        question: "Is washing included with the haircut?",
        answer: "No. Haircuts are no-wash to keep the service fast and affordable."
    },
    {
        question: "Where is Raki located?",
        answer: "RAKI is located in Burnaby, inside Crystal Mall, and serves customers from Vancouver and nearby areas."
    }
];

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-16 md:py-24 bg-black border-b border-zinc-900">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tighter mb-3">
                        FAQ
                    </h2>
                    <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                        Common Questions
                    </p>
                </div>

                <div className="space-y-8 md:space-y-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-l-2 border-raki-gold pl-6 py-1 group hover:border-white transition-colors duration-300">
                            <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-3 tracking-tight group-hover:text-raki-gold transition-colors duration-300">
                                {faq.question}
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;