"use client";

import { GalleryArea } from "@/components/GalleryArea";
import { GalleryProvider } from "@/contexts/GalleryContext";

export default function Home() {

  return (
    <main className="bg-black min-h-screen">
      <GalleryProvider>
        <GalleryArea />
      </GalleryProvider>
    </main>
  )
}
