import { ImageStreamHero } from "@/components/ui/image-stream-hero";

const IMAGES = [
  {
    src: "/images/paris.jpg",
    alt: "Eiffel Tower in Paris at twilight with golden evening glow",
  },
  {
    src: "/images/switzerland.jpg",
    alt: "Swiss Alps village with snow-dusted peaks and lush alpine valley",
  },
  {
    src: "/images/hawaii.jpg",
    alt: "Hawaii tropical emerald coastline and turquoise Pacific waters",
  },
  {
    src: "/images/japan.jpg",
    alt: "Kyoto Japan iconic tiered pagoda with cherry blossoms at dusk",
  },
  {
    src: "/images/amalfi.jpg",
    alt: "Pastel Amalfi Coast cliffside villas overlooking azure sea",
  },
  {
    src: "/images/iceland.jpg",
    alt: "Iceland aurora borealis dancing over glacial waterfall",
  },
];

export default function DemoOne() {
  return (
    <ImageStreamHero
      images={IMAGES}
      className="h-[560px] w-full rounded-lg border border-neutral-800 bg-[#090d14]"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
        <div className="px-6">
          <h1 className="text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl font-serif-display">
            Agetrave
            <br />
            The Earth, unbound.
          </h1>
        </div>
        <p className="max-w-md text-balance px-6 text-sm text-neutral-400">
          Handcrafted expeditions to Paris, the Swiss Alps, Hawaii, and Kyoto with transparent, budget-conscious curation.
        </p>
      </div>
    </ImageStreamHero>
  );
}
