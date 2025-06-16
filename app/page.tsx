'use client';

import Image from "next/image";
import BlurText from "./components/BlurText/BlurText";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <BlurText
          text="Who Is Misc/Dwi?"
          delay={250}
          animateBy="words"
          direction="bottom"
          className="text-6xl mb-8"
        />
      </div>
    </div>
  );
}
