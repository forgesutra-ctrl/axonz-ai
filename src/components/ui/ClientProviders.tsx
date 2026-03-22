"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useApp } from "@/context/AppContext";
import DemoModal from "./DemoModal";

const Cursor = dynamic(() => import("./Cursor"), { ssr: false });
const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false });

export default function ClientProviders() {
  const { isDemoOpen, closeDemo } = useApp();

  useEffect(() => {
    document.documentElement.classList.add("js-loaded");
  }, []);

  return (
    <>
      <Cursor />
      <NeuralCanvas />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </>
  );
}
