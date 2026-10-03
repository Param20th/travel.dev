import * as React from "react";
import { ImageStreamHero, type StreamImage } from "@/components/ui/image-stream-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  MapPin,
  Calendar,
  DollarSign,
  Compass,
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import parisImg from "./assets/images/paris_eiffel_twilight_1790955878878.jpg";
import switzerlandImg from "./assets/images/switzerland_alps_village_1790955891767.jpg";
import hawaiiImg from "./assets/images/hawaii_tropical_coast_1790955904971.jpg";
import japanImg from "./assets/images/japan_kyoto_pagoda_1790955916265.jpg";
import amalfiImg from "./assets/images/amalfi_coast_italy_1790955964766.jpg";
import icelandImg from "./assets/images/iceland_aurora_waterfall_1790955976621.jpg";

// Curated destinations with bundled Vite production assets and resilient public fallbacks
const HERO_DESTINATIONS: StreamImage[] = [
  {
    src: parisImg || "/images/paris.jpg",
    alt: "Eiffel Tower in Paris at twilight with golden evening glow",
  },
  {
    src: switzerlandImg || "/images/switzerland.jpg",
    alt: "Swiss Alps village with snow-dusted peaks and lush alpine valley",
  },
  {
    src: hawaiiImg || "/images/hawaii.jpg",
    alt: "Hawaii tropical emerald coastline and turquoise Pacific waters",
  },
  {
    src: japanImg || "/images/japan.jpg",
    alt: "Kyoto Japan iconic tiered pagoda with cherry blossoms at dusk",
  },
  {
    src: amalfiImg || "/images/amalfi.jpg",
    alt: "Pastel Amalfi Coast cliffside villas overlooking azure sea",
  },
  {
    src: icelandImg || "/images/iceland.jpg",
    alt: "Iceland aurora borealis dancing over glacial waterfall",
  },
];

interface JourneyTier {
  id: string;
  name: string;
  destination: string;
  country: string;
  duration: string;
  nights: number;
  pricePerPerson: number;
  image: string;
  summary: string;
  inclusions: string[];
  days: { title: string; desc: string }[];
  budgetBreakdown: { category: string; amount: number }[];
}

const JOURNEYS: JourneyTier[] = [
  {
    id: "paris",
    name: "Parisian Atelier & Marais Quarters",
    destination: "Paris & Île-de-France",
    country: "France",
    duration: "6 Days · 5 Nights",
    nights: 5,
    pricePerPerson: 1420,
    image: parisImg || "/images/paris.jpg",
    summary:
      "A quiet, literary perspective on the French capital. Stay in a restored 19th-century Marais apartment, cruise the Seine at sundown via private wooden tender, and discover secret museum courtyards without crowded queues.",
    inclusions: [
      "5 nights in a boutique Marais atelier residence",
      "Private evening Seine wooden boat excursion with sommelier pairings",
      "Priority skip-the-line Paris Museum Pass & secret Sainte-Chapelle access",
      "Daily artisanal boulangerie breakfast voucher and neighborhood dining map",
      "All regional transit passes and RER airport transfer",
    ],
    days: [
      {
        title: "Day 1: Arrival & Marais Twilight Walk",
        desc: "Check in to your private atelier. Evening stroll past Place des Vosges followed by welcome apéritifs at an independent wine cellar.",
      },
      {
        title: "Day 2: Secret Ateliers & Private Seine Cruise",
        desc: "Guided morning walking tour of artisan leather and printmaking studios. At sunset, board a classic 1930s mahogany launch along the river.",
      },
      {
        title: "Day 3: Montmartre Beyond the Tourist Traps",
        desc: "Ascend the quiet northern slopes of Montmartre. Meet local sculptors and enjoy an unhurried bistro lunch in a hidden garden.",
      },
      {
        title: "Day 4: Musée de l'Orangerie & Saint-Germain",
        desc: "Contemplate Monet's waterlilies before crowds arrive, followed by an afternoon exploring historic bookstores and independent galleries.",
      },
      {
        title: "Day 5: Versailles Gardens & Hameau de la Reine",
        desc: "An easy 35-minute scenic train journey to wander Marie Antoinette's secluded hamlet and the grand orange tree parterres.",
      },
      {
        title: "Day 6: Farewell Pastries & Return Departure",
        desc: "A final morning espresso and pain au chocolat at a historic café before scheduled airport transit.",
      },
    ],
    budgetBreakdown: [
      { category: "Boutique Accommodation (5 nights)", amount: 720 },
      { category: "Curated Experiences & Private Boat", amount: 380 },
      { category: "Transit, Museum Passes & Transfers", amount: 190 },
      { category: "Flat Agetrave Curation Fee (8%)", amount: 130 },
    ],
  },
  {
    id: "switzerland",
    name: "Alpine Solitude & Glacier Express",
    destination: "Lauterbrunnen & Zermatt",
    country: "Switzerland",
    duration: "7 Days · 6 Nights",
    nights: 6,
    pricePerPerson: 1880,
    image: switzerlandImg || "/images/switzerland.jpg",
    summary:
      "A serene passage through 72 cascading waterfalls and snow-crowned alpine pinnacles. Ride panoramic rail cars through mountain passes, lodge in hand-hewn timber chalets, and hike tranquil high-altitude ridge paths.",
    inclusions: [
      "6 nights in family-operated Swiss alpine chalets with Matterhorn views",
      "First-class Swiss Travel Pass covering all trains, lake steamers, and cogwheels",
      "Guided quiet-season hike from Mürren to Gimmelwald with local naturalist",
      "Traditional fondue experience and cheese cave tasting in Gruyères",
      "Gornergrat mountain railway ascent tickets",
    ],
    days: [
      {
        title: "Day 1: Zurich to the Valley of 72 Waterfalls",
        desc: "Arrive in Zurich and board the scenic lakeside rail direct into Lauterbrunnen. Settle into a timber chalet beneath Staubbach Falls.",
      },
      {
        title: "Day 2: Mürren Cliffside Ridge & Alpine Meadows",
        desc: "Cable car up to car-free Mürren. Walk gentle panoramic wildflower tracks with towering views of the Eiger, Mönch, and Jungfrau.",
      },
      {
        title: "Day 3: Lake Brienz Steamer & Historic Giessbach",
        desc: "Glide across turquoise glacial waters on a vintage steam vessel and hike through ancient mossy forests beside waterfalls.",
      },
      {
        title: "Day 4: Glacier Express Transfer to Zermatt",
        desc: "Traverse high mountain passes in panoramic glass rail cars into the iconic alpine enclave of Zermatt.",
      },
      {
        title: "Day 5: Gornergrat Summit & Matterhorn Reflection",
        desc: "Ascend Europe's highest open-air cogwheel railway to Riffelsee to photograph the iconic Matterhorn mirror reflections.",
      },
      {
        title: "Day 6: Alpine Farm Cheese Making & Twilight Spa",
        desc: "Visit an alpine dairy producing raw-milk Alpkäse, followed by cedar hot tub relaxation overlooking the valley.",
      },
      {
        title: "Day 7: Descent to Geneva/Zurich",
        desc: "A smooth, scenic railway return to the international airport of your choice.",
      },
    ],
    budgetBreakdown: [
      { category: "Traditional Chalet Accommodations (6 nights)", amount: 940 },
      { category: "Swiss Travel Rail Pass & Summit Cogwheels", amount: 480 },
      { category: "Guides, Tastings & Permits", amount: 310 },
      { category: "Flat Agetrave Curation Fee (8%)", amount: 150 },
    ],
  },
  {
    id: "hawaii",
    name: "Kauai Emerald Coast & Pacific Solitude",
    destination: "Kauai (The Garden Isle)",
    country: "Hawaii, USA",
    duration: "7 Days · 6 Nights",
    nights: 6,
    pricePerPerson: 1760,
    image: hawaiiImg || "/images/hawaii.jpg",
    summary:
      "Avoid overcrowded resort strips. Experience Hawaii's oldest island through secluded plantation bungalows, catamaran sailing past the 4,000-foot Na Pali sea cliffs, and peaceful rainforest canyon hikes.",
    inclusions: [
      "6 nights in an ocean-breeze eco-lodge on the North Shore",
      "Private small-group catamaran excursion along the monumental Na Pali coast",
      "Waimea Canyon & Koke'e State Park guided ridge exploration",
      "Sustainable snorkeling gear and reserved Hanalei Bay surfboard access",
      "All-wheel drive island exploration vehicle with unlimited mileage",
    ],
    days: [
      {
        title: "Day 1: Arrival in Lihue & Hanalei Bay Sunset",
        desc: "Collect your island vehicle and drive north through emerald taro fields to your secluded oceanfront sanctuary.",
      },
      {
        title: "Day 2: Na Pali Coast Sea Cliff Expedition",
        desc: "Early morning catamaran journey alongside dramatic sea caves, spinner dolphin pods, and cascading ocean waterfalls.",
      },
      {
        title: "Day 3: Waimea Canyon & The Grand Vista",
        desc: "Traverse the 'Grand Canyon of the Pacific'. Red volcanic cliffs layered with jade flora and mist-shrouded viewpoints.",
      },
      {
        title: "Day 4: Secret Botanical Sanctuaries",
        desc: "Private morning walk through Limahuli Garden & Preserve, witnessing rare endemic Hawaiian flora preserved for generations.",
      },
      {
        title: "Day 5: Poipu Shore & Sea Turtle Sanctuary",
        desc: "Head south to calm lagoons where green sea turtles (honu) rest on warm sand. Evening Hawaiian poke tasting.",
      },
      {
        title: "Day 6: Kuilau Rainforest Ridge & Coastal Rest",
        desc: "A gentle hike through tropical ferns with panoramic mountain views, followed by an afternoon relaxing at Tunnels Beach.",
      },
      {
        title: "Day 7: Aloha Farewell",
        desc: "Morning swim in calm Hanalei waters and fresh tropical fruit breakfast before departure.",
      },
    ],
    budgetBreakdown: [
      { category: "Eco-Lodge Plantation Cottage (6 nights)", amount: 880 },
      { category: "Island Vehicle & Fuel Allowance", amount: 390 },
      { category: "Na Pali Catamaran & State Park Permits", amount: 350 },
      { category: "Flat Agetrave Curation Fee (8%)", amount: 140 },
    ],
  },
  {
    id: "japan",
    name: "Kyoto Heritage Machiya & Bamboo Sanctuaries",
    destination: "Kyoto & Uji",
    country: "Japan",
    duration: "8 Days · 7 Nights",
    nights: 7,
    pricePerPerson: 1650,
    image: japanImg || "/images/japan.jpg",
    summary:
      "Immerse yourself in Japan's cultural heartland. Inhabit a traditional wooden machiya townhouse, savor hand-whisked Uji matcha in 400-year-old tea gardens, and walk torchlit temple corridors in the evening calm.",
    inclusions: [
      "7 nights in a preserved wooden Machiya residence with tatami and cedar bath",
      "Private tea ceremony with a 15th-generation Uji tea master",
      "Kyoto city regional transit pass and Kansai airport Haruka express",
      "Guided dawn exploration of Fushimi Inari and Arashiyama bamboo grove",
      "Kaiseki seasonal dinner experience at a historic Kamogawa river veranda",
    ],
    days: [
      {
        title: "Day 1: Arrival & Machiya Welcome",
        desc: "Arrive via Kyoto Station and check in to your preserved historic machiya townhouse. Unwind in your private aromatic cypress bath.",
      },
      {
        title: "Day 2: Dawn at Fushimi Inari & Tofuku-ji",
        desc: "Wander the thousand vermillion torii gates at 6:30 AM before tourists arrive, then contemplate the tranquil moss gardens of Tofuku-ji.",
      },
      {
        title: "Day 3: Arashiyama Bamboo Grove & River Punt",
        desc: "Listen to the rustle of towering green stalks, visit Tenryu-ji temple, and drift down the Oi River on an authentic wooden punt.",
      },
      {
        title: "Day 4: Master Tea Ceremony in Uji",
        desc: "A 20-minute train ride to Uji, the ancient birthplace of Japanese green tea. Grind your own ceremonial matcha under master tutelage.",
      },
      {
        title: "Day 5: Gion Twilight Walk & Zen Rock Gardens",
        desc: "Morning meditation at Ryoan-ji's 15-stone dry garden. Twilight stroll through Gion's flagstone alleyways.",
      },
      {
        title: "Day 6: Nara Deer Park & Wooden Great Buddha",
        desc: "Day trip to ancient Nara. Feed sacred free-roaming sika deer and stand beneath the world's largest bronze Buddha statue.",
      },
      {
        title: "Day 7: Nishiki Market & Artisan Ceramic Workshops",
        desc: "Sample pickled Kyoto vegetables, dashi tamago, and visit generational Kiyomizu pottery kilns.",
      },
      {
        title: "Day 8: Departure",
        desc: "Enjoy a final bowl of hot genmaicha and seasonal sweets before scenic Shinkansen or airport transit.",
      },
    ],
    budgetBreakdown: [
      { category: "Preserved Machiya Stay (7 nights)", amount: 820 },
      { category: "Private Tea Master, Guides & Kaiseki Dinner", amount: 410 },
      { category: "Regional Rail, Transfers & Temple Access", amount: 290 },
      { category: "Flat Agetrave Curation Fee (8%)", amount: 130 },
    ],
  },
];

const TESTIMONIALS = [
  {
    author: "Elena Rostova",
    role: "Architectural Designer",
    location: "Zurich to Paris Expedition",
    quote:
      "Agetrave unraveled Switzerland and Paris for us without the sterile, packaged feeling of ordinary agencies. We woke up above the clouds in Mürren at an honest price that felt impossible for Switzerland. Every hour felt intentional.",
    trip: "Alpine Solitude & Glacier Express",
  },
  {
    author: "Marcus & Sarah Vance",
    role: "Editorial Photographers",
    location: "Kauai Pacific Expedition",
    quote:
      "The Na Pali coast catamaran voyage was scheduled precisely when the afternoon light strikes the cathedral cliffs. Zero tourist gimmicks, total transparent pricing, and genuine respect for local communities.",
    trip: "Kauai Emerald Coast",
  },
  {
    author: "Kenji Takahashi",
    role: "Author & Historian",
    location: "Kyoto Heritage Journey",
    quote:
      "Staying in an authentic 120-year-old machiya while having direct access to an Uji tea master was the highlight of our decade. Agetrave proves that true luxury is intimacy and quiet, not gold taps and bus tours.",
    trip: "Kyoto Heritage Machiya",
  },
];

export default function App() {
  const [selectedJourney, setSelectedJourney] = React.useState<JourneyTier | null>(null);
  const [inquiryOpen, setInquiryOpen] = React.useState(false);
  const [inquiryDestination, setInquiryDestination] = React.useState("Paris, France");
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    travelers: "2 Travelers",
    month: "Autumn 2026",
    notes: "",
  });

  const handleOpenInquiry = (destination = "Paris, France") => {
    setInquiryDestination(destination);
    setFormSubmitted(false);
    setInquiryOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryOpen(false);
      setFormSubmitted(false);
      setFormState({
        name: "",
        email: "",
        travelers: "2 Travelers",
        month: "Autumn 2026",
        notes: "",
      });
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#090d14] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800">
      {/* ── TOP BAR CONTRACT ──────────────────────────────────────────
          Exactly 3 zones:
          Zone 1: Wordmark brand element
          Zone 2: 4 clean text navigation links with 21st.dev hover line
          Zone 3: 1 clean primary action with ShimmerButton effect
      ───────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#090d14]/90 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Zone 1: Single text wordmark with subtle interactive glow */}
          <a
            href="#"
            className="group relative text-2xl font-serif-display font-medium tracking-tight text-white hover:text-neutral-200 transition-all duration-300"
          >
            <span>Agetrave</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-200/80 via-white to-transparent group-hover:w-full transition-all duration-500 ease-out" />
          </a>

          {/* Zone 2: 4 clean single-line nav links with animated underline */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300 font-medium">
            <a href="#hero" className="nav-link-hover hover:text-white transition-colors py-1">
              Destinations
            </a>
            <a href="#about" className="nav-link-hover hover:text-white transition-colors py-1">
              About Us
            </a>
            <a
              href="#budget-friendly"
              className="nav-link-hover hover:text-white transition-colors py-1"
            >
              Budget Friendly
            </a>
            <a
              href="#testimonials"
              className="nav-link-hover hover:text-white transition-colors py-1"
            >
              Testimonials
            </a>
          </nav>

          {/* Zone 3: 1 single-line primary action with 21st.dev Shimmer Button */}
          <div className="flex items-center gap-4">
            <ShimmerButton
              onClick={() => handleOpenInquiry("General Inquiry")}
              shimmerColor="#e2b168"
              className="text-xs uppercase tracking-wider px-5 py-2.5"
            >
              Plan Your Journey
            </ShimmerButton>
          </div>
        </div>
      </header>

      {/* ── SECTION 1: HERO (ImageStreamHero + Editorial Overlay) ───── */}
      <section id="hero" className="relative w-full border-b border-white/5">
        <ImageStreamHero
          images={HERO_DESTINATIONS}
          cards={10}
          speed={20}
          axis={52}
          className="h-[620px] md:h-[700px] w-full bg-[#070a0f]"
        >
          {/* Subtle gradient vignette to guarantee text legibility */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#090d14]/60 to-[#090d14] pointer-events-none" />

          {/* Minimalist Centered Editorial Hero Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 md:py-16 text-center max-w-4xl mx-auto px-6">
            {/* Top Kicker Metadata with React Bits ShinyText shimmer effect */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono">
              <ShinyText speed={3.5} className="font-mono text-xs">
                Paris · Switzerland · Hawaii · Japan · Amalfi
              </ShinyText>
            </div>

            {/* Dominant Headline with subtle hover glow interaction */}
            <div className="my-auto space-y-4">
              <h1 className="group cursor-default text-balance text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium tracking-tight text-white leading-[1.08] transition-all duration-500">
                The Earth, <br />
                <span className="bg-gradient-to-r from-white via-neutral-200 to-white/80 bg-clip-text hover:text-white transition-all">
                  curated with quiet wonder.
                </span>
              </h1>
              <p className="max-w-xl mx-auto text-balance text-sm sm:text-base text-neutral-300 font-light leading-relaxed transition-colors hover:text-neutral-100">
                Agetrave architects intimate, independent expeditions to the world’s most poetic
                landscapes. Uncrowded routes, direct local guilds, and radical price transparency.
              </p>
            </div>

            {/* Bottom Proof Bar & Quick Jump with animated hover arrow */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-2 group cursor-default">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-neutral-200 transition-colors">
                  2026/2027 Itinerary Windows Open
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#budget-friendly"
                  className="group hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="relative">
                    Explore 4 Curated Tiers
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </ImageStreamHero>
      </section>

      {/* ── SECTION 2: ABOUT US (Modern Editorial Asymmetric Grid) ──── */}
      <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
        {/* Section Heading with ShinyText kicker */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-mono">
            <ShinyText speed={4}>About Us</ShinyText>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-white tracking-tight leading-tight hover:text-neutral-100 transition-colors">
            The antidote to mass tourism and inflated agency margins.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-2">
            Most travel agencies mark up independent hotels by 30% to 50% while corralling travelers
            onto noisy bus tours. Agetrave was founded on a simpler, more respectful covenant:
            handcrafted routes, direct local compensation, and transparent, fixed pricing.
          </p>
        </div>

        {/* Clean Modern 3-Column Bento Grid with 21st.dev SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.09)"
            className="p-8 flex flex-col justify-between space-y-8 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:text-amber-200 transition-all duration-300">
                <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <h3 className="text-xl font-serif-display font-medium text-white group-hover:text-neutral-100 transition-colors">
                Bespoke Route Engineering
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                We craft each itinerary around optimal daylight, quiet hours, and natural geography.
                Whether ascending the Schilthorn in Switzerland or visiting Kyoto temples at dawn,
                you experience places at their most serene.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 font-mono group-hover:text-neutral-300 transition-colors">
              Zero rushed checklists · Thoughtful pacing
            </div>
          </SpotlightCard>

          {/* Card 2 */}
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.09)"
            className="p-8 flex flex-col justify-between space-y-8 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-300">
                <ShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-serif-display font-medium text-white group-hover:text-neutral-100 transition-colors">
                Direct Local Guilds
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                By connecting directly with generational alpine guides in Zermatt, indigenous boat
                captains on Kauai’s Na Pali coast, and preservation machiya hosts in Japan, we ensure
                100% of your stay directly sustains the host region.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 font-mono group-hover:text-neutral-300 transition-colors">
              Generational guides · Ethical footprint
            </div>
          </SpotlightCard>

          {/* Card 3 */}
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.09)"
            className="p-8 flex flex-col justify-between space-y-8 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300">
                <DollarSign className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-serif-display font-medium text-white group-hover:text-neutral-100 transition-colors">
                Transparent Financial Architecture
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                High-end independent travel should not require opacity. You receive line-by-line
                breakdowns of true lodge rates, transit passes, and permits, accompanied by our flat
                8% curation fee. No surprise fees.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 font-mono group-hover:text-neutral-300 transition-colors">
              Line-item receipts · Flat 8% curation
            </div>
          </SpotlightCard>
        </div>

        {/* Quiet Quantified Proof Strip with interactive card hover */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 rounded-xl border border-white/5 bg-neutral-900/30">
          <div className="group cursor-default p-2 rounded-lg transition-colors hover:bg-white/[0.02]">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-white tabular-nums group-hover:text-amber-200 transition-colors duration-300">
              2,400+
            </div>
            <div className="text-xs text-neutral-400 mt-1 group-hover:text-neutral-300 transition-colors">
              Independent Travelers Served
            </div>
          </div>
          <div className="group cursor-default p-2 rounded-lg transition-colors hover:bg-white/[0.02]">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-white tabular-nums group-hover:text-emerald-300 transition-colors duration-300">
              4.97 / 5.0
            </div>
            <div className="text-xs text-neutral-400 mt-1 group-hover:text-neutral-300 transition-colors">
              Verified Client Satisfaction
            </div>
          </div>
          <div className="group cursor-default p-2 rounded-lg transition-colors hover:bg-white/[0.02]">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-white tabular-nums group-hover:text-amber-200 transition-colors duration-300">
              100%
            </div>
            <div className="text-xs text-neutral-400 mt-1 group-hover:text-neutral-300 transition-colors">
              Line-Item Cost Transparency
            </div>
          </div>
          <div className="group cursor-default p-2 rounded-lg transition-colors hover:bg-white/[0.02]">
            <div className="text-2xl sm:text-3xl font-serif-display font-medium text-white tabular-nums group-hover:text-blue-300 transition-colors duration-300">
              38
            </div>
            <div className="text-xs text-neutral-400 mt-1 group-hover:text-neutral-300 transition-colors">
              Handpicked Boutique Sanctuaries
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BUDGET FRIENDLY (Modern Grid of Curated Tiers) ── */}
      <section
        id="budget-friendly"
        className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-mono">
              <ShinyText speed={4}>Budget Friendly</ShinyText>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-white tracking-tight leading-tight hover:text-neutral-100 transition-colors">
              Curated journeys to iconic coordinates. Fairly priced.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Experience the world’s most coveted destinations—Paris, Switzerland, Hawaii, and
              Japan—without arbitrary luxury markups. Click any journey to view the itemized budget
              and day-by-day outline.
            </p>
          </div>
          <div className="text-xs text-neutral-400 font-mono hover:text-neutral-300 transition-colors">
            Includes all lodging, regional transport & guide permits
          </div>
        </div>

        {/* 4-Item Modern Travel Grid with 21st.dev SpotlightCard & Zoom Sheen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNEYS.map((journey) => (
            <SpotlightCard
              key={journey.id}
              spotlightColor="rgba(226, 177, 104, 0.1)"
              onClick={() => setSelectedJourney(journey)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900/70 border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Media banner with slow continuous scale & vignette sweep */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                <img
                  src={journey.image}
                  alt={journey.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = "true";
                      target.src = `/images/${journey.id}.jpg`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-black/30 to-transparent group-hover:opacity-80 transition-opacity duration-500" />

                {/* Top Location Tag with interactive hover scale */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-black/70 transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-300 transition-colors" />
                  <span>{journey.destination}</span>
                </div>

                {/* Price Tag badge with subtle scale and shine */}
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-xs text-neutral-300 uppercase tracking-wider group-hover:text-amber-200 transition-colors">
                    From
                  </div>
                  <div className="text-2xl font-serif-display font-bold text-white tabular-nums group-hover:scale-105 group-hover:text-amber-100 origin-bottom-right transition-all duration-300">
                    ${journey.pricePerPerson.toLocaleString()}
                    <span className="text-xs font-sans font-normal text-neutral-400"> / person</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                    <span className="flex items-center gap-1 group-hover:text-neutral-300 transition-colors">
                      <Calendar className="w-3.5 h-3.5" />
                      {journey.duration}
                    </span>
                    <span>·</span>
                    <span className="group-hover:text-neutral-300 transition-colors">
                      {journey.country}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif-display font-medium text-white group-hover:text-amber-100 transition-colors duration-300">
                    {journey.name}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3 group-hover:text-neutral-200 transition-colors">
                    {journey.summary}
                  </p>
                </div>

                {/* Inclusions summary strip with hover arrow animation */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {journey.inclusions.length} premium inclusions verified
                  </div>
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5 group-hover:text-amber-200 transition-colors">
                    <span>View Itinerary Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: CUSTOMER TESTIMONIALS (Clean Modern Grid) ───── */}
      <section
        id="testimonials"
        className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5"
      >
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-mono">
            <ShinyText speed={4}>Customer Testimonials</ShinyText>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-white tracking-tight leading-tight hover:text-neutral-100 transition-colors">
            Memories chronicled by discerning travelers.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Real stories from travelers who swapped packaged chaos for intimate, budget-conscious
            expeditions across Europe, the Pacific, and East Asia.
          </p>
        </div>

        {/* Modern 3-Column Testimonial Grid with 21st.dev SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(255, 255, 255, 0.08)"
              className="p-8 rounded-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Quiet Rating Indicator with hover sparkle animation */}
                <div className="flex items-center gap-1 text-amber-300/80 group-hover:text-amber-300 transition-colors">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <p className="text-neutral-200 text-sm sm:text-base italic leading-relaxed font-serif-display group-hover:text-white transition-colors duration-300">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="text-sm font-medium text-white group-hover:text-amber-100 transition-colors">
                  {item.author}
                </div>
                <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {item.role} · {item.location}
                </div>
                <div className="text-[11px] text-neutral-400 font-mono">{item.trip}</div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Minimal Banner CTA for Bespoke Inquiries with 21st.dev ShimmerButton */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-white/20 transition-all duration-300">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-white hover:text-neutral-100 transition-colors">
              Ready to architect your custom route?
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every Agetrave itinerary can be calibrated to your exact travel dates, party size,
              and comfort preferences with no obligations.
            </p>
          </div>
          <ShimmerButton
            onClick={() => handleOpenInquiry("Custom Route Planning")}
            shimmerColor="#e2b168"
            className="text-xs uppercase tracking-wider px-6 py-3.5"
          >
            Inquire With a Specialist
          </ShimmerButton>
        </div>
      </section>

      {/* ── MODAL: JOURNEY DETAILS & BUDGET BREAKDOWN ────────────────── */}
      {selectedJourney && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-3xl bg-[#0e131d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 transform transition-all">
            {/* Header Image */}
            <div className="relative h-60 w-full bg-neutral-950 overflow-hidden">
              <img
                src={selectedJourney.image}
                alt={selectedJourney.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = "true";
                    target.src = `/images/${selectedJourney.id}.jpg`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131d] via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedJourney(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 hover:scale-110 transition-all border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-neutral-300 font-mono mb-1">
                  {selectedJourney.country} · {selectedJourney.duration}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-white">
                  {selectedJourney.name}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              {/* Summary */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {selectedJourney.summary}
              </p>

              {/* Verified Inclusions */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Verified Trip Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedJourney.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 p-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day by Day Plan */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Day-by-Day Experience Arc
                </h4>
                <div className="space-y-4">
                  {selectedJourney.days.map((day, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1 hover:border-white/15 hover:bg-white/[0.07] transition-all duration-200"
                    >
                      <div className="text-xs font-semibold text-white font-mono">{day.title}</div>
                      <p className="text-xs text-neutral-300 leading-relaxed">{day.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Financial Itemization */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                    Transparent Line-Item Budget
                  </h4>
                  <span className="text-xs text-emerald-400">Fixed rate guarantee</span>
                </div>
                <div className="rounded-lg bg-black/40 border border-white/5 p-4 divide-y divide-white/5">
                  {selectedJourney.budgetBreakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-2 flex items-center justify-between text-xs sm:text-sm hover:bg-white/[0.02] px-2 rounded transition-colors"
                    >
                      <span className="text-neutral-300">{item.category}</span>
                      <span className="font-mono text-white tabular-nums">${item.amount}</span>
                    </div>
                  ))}
                  <div className="pt-3 flex items-center justify-between text-sm sm:text-base font-semibold px-2">
                    <span className="text-white">Total per traveler</span>
                    <span className="font-serif-display text-white tabular-nums text-lg">
                      ${selectedJourney.pricePerPerson.toLocaleString()} USD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Action */}
            <div className="p-6 bg-black/60 border-t border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Total All-Inclusive</div>
                <div className="text-xl font-serif-display font-bold text-white tabular-nums">
                  ${selectedJourney.pricePerPerson.toLocaleString()}
                  <span className="text-xs font-sans font-normal text-neutral-400"> / person</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShimmerButton
                  onClick={() => {
                    const name = selectedJourney.name;
                    setSelectedJourney(null);
                    handleOpenInquiry(name);
                  }}
                  shimmerColor="#ffffff"
                  className="text-xs uppercase tracking-wider px-6 py-2.5"
                >
                  Reserve Dates
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: MINIMAL INQUIRY / BOOKING ──────────────────────────── */}
      {inquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-lg bg-[#0e131d] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setInquiryOpen(false)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 hover:scale-110 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif-display text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-xs mx-auto leading-relaxed">
                  Your dedicated Agetrave regional specialist will review your coordinates and reach
                  out within 24 hours with an itemized draft.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                    Direct Inquiry
                  </div>
                  <h3 className="text-2xl font-serif-display text-white font-medium">
                    Plan Your Expedition
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Bespoke routes to Paris, Switzerland, Hawaii, Japan, and beyond.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Destination</label>
                    <input
                      type="text"
                      value={inquiryDestination}
                      onChange={(e) => setInquiryDestination(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Your Name</label>
                      <input
                        type="text"
                        placeholder="Alexandre Dumont"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Email Address</label>
                      <input
                        type="email"
                        placeholder="alexandre@travel.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Travelers</label>
                      <select
                        value={formState.travelers}
                        onChange={(e) => setFormState({ ...formState, travelers: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                      >
                        <option>1 Traveler (Solo)</option>
                        <option>2 Travelers (Couple / Duo)</option>
                        <option>3-4 Travelers (Family / Small Group)</option>
                        <option>5+ Travelers (Private Guild)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Target Season</label>
                      <select
                        value={formState.month}
                        onChange={(e) => setFormState({ ...formState, month: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                      >
                        <option>Autumn 2026</option>
                        <option>Winter / Snow 2026-2027</option>
                        <option>Spring / Blossom 2027</option>
                        <option>Summer 2027</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">
                      Special Preferences or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Interest in architecture, quiet alpine chalets, culinary masterclasses..."
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-neutral-400">
                    Direct reply within 24 hours · No spam
                  </div>
                  <ShimmerButton
                    type="submit"
                    shimmerColor="#ffffff"
                    className="text-xs uppercase tracking-wider px-6 py-2.5"
                  >
                    Submit Itinerary Request
                  </ShimmerButton>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="mt-auto border-t border-white/5 py-12 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-base font-serif-display font-medium text-white tracking-tight hover:text-amber-200 transition-colors cursor-default">
              Agetrave
            </span>
            <span>·</span>
            <span>Independent Travel & Itinerary Architecture</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="nav-link-hover hover:text-white transition-colors">
              Destinations
            </a>
            <a href="#about" className="nav-link-hover hover:text-white transition-colors">
              About Us
            </a>
            <a
              href="#budget-friendly"
              className="nav-link-hover hover:text-white transition-colors"
            >
              Budget Friendly
            </a>
            <a
              href="#testimonials"
              className="nav-link-hover hover:text-white transition-colors"
            >
              Testimonials
            </a>
          </div>

          <div className="text-neutral-500 font-mono">
            © {new Date().getFullYear()} Agetrave. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
