"use client";
import { useEffect, useRef } from "react";

class Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = 1;
    this.density = Math.random() * 15 + 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#024a70";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: { x: number | null; y: number | null }) {
    // Always return dots to base when no mouse
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 50;

      if (distance < maxDistance) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (maxDistance - distance) / maxDistance;
        this.x -= forceDirectionX * force * this.density;
        this.y -= forceDirectionY * force * this.density;
        return;
      }
    }

    // Return to base position
    if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
    if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
  }
}

export function DotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let animationId: number; // 🔧 Fix 1: track animation frame
    const mouse = { x: null as number | null, y: null as number | null };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      for (let i = 0; i < 150; i++) {
        dots.push(
          new Dot(Math.random() * canvas.width, Math.random() * canvas.height)
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.update(mouse);
        dot.draw(ctx);
      });
      animationId = requestAnimationFrame(animate); // 🔧 Fix 1: store the id
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX; // 🔧 Fix 2: clientX over e.x (more reliable)
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      // 🔧 Fix 3: clear mouse on leave
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId); // 🔧 Fix 1: cancel on unmount
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-transparent"
    />
  );
}
