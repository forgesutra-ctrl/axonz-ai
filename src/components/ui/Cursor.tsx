"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      animId = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      dot.style.width = "20px";
      dot.style.height = "20px";
      dot.style.background = "#F4C563";
      ring.style.width = "52px";
      ring.style.height = "52px";
    };

    const onLeave = () => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.background = "#2DD4BF";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest("a, button");
      if (t) onEnter();
      else onLeave();
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOver);

    loop();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        style={{
          position: "fixed",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#2DD4BF",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, background 0.2s",
          mixBlendMode: "multiply",
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(45,212,191,0.5)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
