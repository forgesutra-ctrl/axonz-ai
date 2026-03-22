"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useApp } from "@/context/AppContext";
import DemoModal from "./DemoModal";

const Cursor = dynamic(() => import("./Cursor"), { ssr: false });
const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false });

export default function ClientProviders() {
  const { isDemoOpen, closeDemo } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("js-loaded");
  }, []);

  return (
    <>
      {mounted && (
        <>
          <Cursor />
          <NeuralCanvas />
        </>
      )}
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </>
  );
}
