'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import { FaSprayCanSparkles } from 'react-icons/fa6';
import { HiLightningBolt } from 'react-icons/hi';

const slides = [
  {
    id: 1,
    title: "Unlock the Idea Vault",
    subtitle: "Your Gateway to Proprietary Frontier Technology",
    description: "Access a curated repository of high-potential, pre-vetted startup concepts ready for execution.",
    icon: <FaLightbulb className="w-12 h-12" />,
    bgGradient: "from-slate-900 via-purple-900 to-indigo-900",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop", // Abstract Tech Image
  },
  {
    id: 2,
    title: "Forge Your Unicorn",
    subtitle: "Bridging the Gap Between Concept and Capital",
    description: "Leverage our neural network of mentors and institutional investors to scale your MVP at light speed.",
    icon: <HiLightningBolt className="w-12 h-12" />,
    bgGradient: "from-blue-900 via-cyan-900 to-emerald-900",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Microchip/Tech Image
  },
  {
    id: 3,
    title: "Future-Proof Infrastructure",
    subtitle: "Decentralized Ecosystem for Tomorrow's Leaders",
    description: "Build on a secure, scalable foundation designed for Web3, Deep Tech, and Bio-Digital innovations.",
    icon: <FaShieldAlt className="w-12 h-12" />,
    bgGradient: "from-fuchsia-900 via-rose-900 to-amber-900",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop", // Space/Global Tech Image
  },
];

export default function StartupBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 10000); 
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="relative h-screen min-h-[540px] overflow-hidden bg-black">
      <div  className="flex h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full w-full flex-shrink-0">
            <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />

            {/* over */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-75`} />
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
                <div className="max-w-2xl space-y-5">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                    {slide.icon}
                  </div>

                  {/* Text */}
                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-white/90 font-light">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-white/80 max-w-md">
                      {slide.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group px-10 py-4 bg-white text-black font-semibold rounded-2xl flex items-center gap-3 hover:bg-white/90 transition-all active:scale-95 text-lg shadow-xl shadow-black/30"
                    >
                      Explore Ideas
                      <FaSprayCanSparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </button>

                    <button className="px-8 py-4 border border-white/70 hover:bg-white/10 text-white font-medium rounded-2xl transition-all text-lg">
                      Watch Demo
                    </button>
                  </div>

                  <div className="pt-3 flex items-center gap-8 text-sm text-white/70">
                    <div>Trusted by 12,000+ founders</div>
                    <div className="flex items-center gap-1">
                      ★★★★☆ <span className="text-white/90">4.98</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 text-white backdrop-blur-xl transition-all active:scale-90" >
          <FaChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-3 px-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 text-white backdrop-blur-xl transition-all active:scale-90"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}
      >

      </div>
    </div>
  );
}