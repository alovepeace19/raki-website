import React, { useEffect } from 'react';

const TikTokFeed: React.FC = () => {
    useEffect(() => {
        // Load TikTok embed script
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <section id="feed" className="py-16 md:py-24 bg-black text-center border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tighter mb-2">
                        A QUICK CUT · IN REAL TIME
                    </h2>
                    <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                        Shot in store · real clients
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12 items-start">
                    {/* Embed 1 - Always visible */}
                    <div className="flex justify-center w-full">
                        <blockquote 
                            className="tiktok-embed" 
                            cite="https://www.tiktok.com/@raki_crystalmall/video/7596211688400096519" 
                            data-video-id="7596211688400096519" 
                            style={{ maxWidth: '605px', width: '100%' }} 
                        > 
                            <section> 
                                <a target="_blank" rel="noopener noreferrer" title="@raki_crystalmall" href="https://www.tiktok.com/@raki_crystalmall?refer=embed">@raki_crystalmall</a> 
                            </section> 
                        </blockquote>
                    </div>
                    {/* Embed 2 - Hidden on mobile, visible on tablet+ */}
                    <div className="hidden sm:flex justify-center w-full">
                         <blockquote 
                            className="tiktok-embed" 
                            cite="https://www.tiktok.com/@lenairolf/video/7597647039362551062" 
                            data-video-id="7597647039362551062" 
                            style={{ maxWidth: '605px', width: '100%' }}
                        > 
                            <section> <a target="_blank" rel="noopener noreferrer" title="@lenairolf" href="https://www.tiktok.com/@lenairolf?refer=embed">@lenairolf</a> </section> 
                        </blockquote>
                    </div>
                     {/* Embed 3 - Hidden on mobile & tablet, visible on desktop */}
                    <div className="hidden lg:flex justify-center w-full">
                        <blockquote 
                            className="tiktok-embed" 
                            cite="https://www.tiktok.com/@eunchaejabchae/video/7599867699514166548" 
                            data-video-id="7599867699514166548" 
                            style={{ maxWidth: '605px', width: '100%' }}
                        > 
                            <section> <a target="_blank" rel="noopener noreferrer" title="@eunchaejabchae" href="https://www.tiktok.com/@eunchaejabchae?refer=embed">@eunchaejabchae</a> </section> 
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TikTokFeed;