"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfter from "./BeforeAfter";

export interface ProjectSlide {
  label: string;
  beforeImage: string;
  afterImage: string;
}

interface BeforeAfterCarouselProps {
  projects: ProjectSlide[];
  autoPlayInterval?: number;
}

export default function BeforeAfterCarousel({
  projects,
  autoPlayInterval = 5000,
}: BeforeAfterCarouselProps) {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(300); // Fallback radius
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentRotation = useRef(0); // tracks continuous rotation instead of snapping perfectly during drag
  const [dragOffset, setDragOffset] = useState(0);

  const anglePerSlide = 360 / projects.length;
  
  // Get the normalized current slide index (0 to N-1)
  const current = ((rotationIndex % projects.length) + projects.length) % projects.length;

  // Measure container for dynamic 3D radius
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        // Si el item ocupa el 70% del contenedor:
        const itemWidth = width * 0.7;
        // R = (w/2) / tan(PI/N)
        const calcRadius = (itemWidth / 2) / Math.tan(Math.PI / projects.length);
        setRadius(calcRadius);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [projects.length]);

  const goTo = useCallback(
    (index: number) => {
      setRotationIndex((r) => {
        const currentNormalized = ((r % projects.length) + projects.length) % projects.length;
        let diff = index - currentNormalized;
        
        // Shortest path to target index to avoid spinning around
        if (diff > projects.length / 2) diff -= projects.length;
        else if (diff < -projects.length / 2) diff += projects.length;
        
        return r + diff;
      });
    },
    [projects.length]
  );

  const next = useCallback(() => setRotationIndex((r) => r + 1), []);
  const prev = useCallback(() => setRotationIndex((r) => r - 1), []);

  // Auto-play (5 segundos)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, isPaused, isDragging, autoPlayInterval]);

  // Drag handlers for the entire cylinder
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Solo permitimos arrastrar el cilindro si hacemos click fuera del slider interno.
    // El slider interno de BeforeAfter captura sus propios eventos.
    // Si el usuario clica en algo que diga "cursor-ew-resize", lo ignoramos para no romper el BeforeAfter.
    if ((e.target as HTMLElement).closest('.cursor-ew-resize')) return;

    setIsDragging(true);
    setIsPaused(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    currentRotation.current = rotationIndex * -anglePerSlide;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dx = x - startX.current;
    
    // Sensitivity factor
    const rotationDelta = (dx / window.innerWidth) * 180;
    setDragOffset(rotationDelta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);
    
    // Si arrastramos lo suficiente (> 20 grados), cambiamos de slide
    if (dragOffset > 20) prev();
    else if (dragOffset < -20) next();
    
    setDragOffset(0);
  };

  // El ángulo final del contenedor giratorio (spinner)
  const baseRotation = rotationIndex * -anglePerSlide;
  const finalRotation = isDragging ? currentRotation.current + dragOffset : baseRotation;

  return (
    <div
      className="relative w-full max-w-5xl mx-auto py-12"
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging) handleDragEnd();
      }}
    >
      {/* 3D Spinner Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateZ(${-radius}px) rotateY(${finalRotation}deg)`,
          transition: isDragging ? "none" : "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {projects.map((project, idx) => {
          // Diferencia de slide para calcular opacidad/pointer-events
          // El slide actual (0) debe estar totalmente activo, los traseros inactivos.
          // Ojo con el módulo para saber la distancia más corta.
          let distance = Math.abs(current - idx);
          if (distance > projects.length / 2) distance = projects.length - distance;
          
          const isFront = distance === 0;

          return (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2 w-[85%] md:w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl transition-all duration-700"
              style={{
                transform: `rotateY(${idx * anglePerSlide}deg) translateZ(${radius}px)`,
                opacity: isFront ? 1 : Math.max(0.1, 1 - distance * 0.4),
                pointerEvents: isFront ? "auto" : "none",
                willChange: "transform, opacity",
              }}
            >
              <BeforeAfter
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                label={project.label}
              />
            </div>
          );
        })}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prev}
        aria-label="Proyecto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-white hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-anthracite" />
      </button>
      <button
        onClick={next}
        aria-label="Proyecto siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-white hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-anthracite" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Ver proyecto ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-brand-green scale-125"
                : "bg-slate-300 hover:bg-brand-green/50"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center mt-4 text-sm text-slate-400 font-bold tracking-widest uppercase">
        {current + 1} / {projects.length}
      </p>
    </div>
  );
}
