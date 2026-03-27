"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

export default function BeforeAfter({ beforeImage, afterImage, label }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ("touches" in e) ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt="Después"
        fill
        className="object-cover"
      />
      
      {/* Before Image (Foreground overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden z-10" 
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ width: `${100 / (sliderPos / 100 || 0.001)}%` }}
        >
           <Image
            src={beforeImage}
            alt="Antes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 group"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-brand-green rounded-full opacity-50" />
            <div className="w-1 h-4 bg-brand-green rounded-full" />
            <div className="w-1 h-4 bg-brand-green rounded-full opacity-50" />
          </div>
        </div>
      </div>

      {/* Service Label */}
      {label && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-anthracite/70 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full uppercase font-bold tracking-widest z-30">
          {label}
        </div>
      )}

      {/* Before/After Labels */}
      <div className="absolute bottom-4 left-4 bg-anthracite/80 text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-widest z-30">
        Antes
      </div>
      <div className="absolute bottom-4 right-4 bg-brand-green/80 text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-widest z-30">
        Después
      </div>
    </div>
  );
}
