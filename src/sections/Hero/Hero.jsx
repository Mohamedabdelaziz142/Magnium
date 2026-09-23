import { useState, useRef } from 'react';
import { NETWORK_STATS } from '../../data/portfolioData';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="top" className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Ambient Video for subtle motion & depth */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/facility-management.jpg"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out opacity-40"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        
        {/* Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full z-10">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-widest text-blue-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Magnium Operating Group
            <span className="text-white/40">|</span>
            <span className="text-white/80">Scaling Essential Services</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
            Managing & scaling the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300">world's trusted</span> service leaders.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal">
            From advancing global biosecurity through <strong className="text-white font-semibold">Orkin Türkiye</strong> in pest control, to enterprise digital automation and next-generation facility solutions — Magnium powers champions across vital sectors.
          </p>

          {/* Clean Dual Call-To-Action */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold py-3.5 px-8 rounded-xl uppercase tracking-wider transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-700/50 hover:-translate-y-0.5"
            >
              Explore Our Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {NETWORK_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discrete Ambient Motion Control */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400">
        <button
          onClick={toggleVideoPlayback}
          className="hover:text-white transition-colors focus:outline-none cursor-pointer"
          title={isPlaying ? "Pause background motion" : "Resume background motion"}
        >
          {isPlaying ? "❚❚ Pause Motion" : "▶ Resume Motion"}
        </button>
      </div>
    </section>
  );
}