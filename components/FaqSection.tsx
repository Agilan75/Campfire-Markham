"use client";

import Link from "next/link";
import { useId, useState } from "react";
import Image from "next/image";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  { q: "WHAT IS A GAME JAM?", a: "A game jam is an event where you build a game from scratch in a short time period! It's all about creativity, teamwork, and having fun while learning new skills." },
  { q: "AM I ELIGIBLE?", a: "If you're a high schooler (or younger), you're eligible! No prior experience required — just bring your enthusiasm and willingness to learn." },
  { q: "BUT I’VE NEVER HACKED BEFORE!", a: "Perfect! Game jams are designed for beginners. You'll have workshops, mentors, and teammates to help you every step of the way." },
  { q: "ALL THIS, FOR FREE?", a: "Yes! Everything is completely free — venue, food, swag, workshops, and prizes. Hack Club covers all costs so you can focus on creating." },
  { q: "WHAT DO I NEED TO BRING?", a: "Just bring yourself, a laptop, charger, and any personal items you need. We'll provide food, drinks, and everything else!" },
];

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentId = useId();

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between rounded-md bg-[#8C4C44] px-4 py-4 text-left text-white shadow-[0_5px_0_rgba(0,0,0,0.18)] transition hover:brightness-110"
        style={{ fontFamily: "DreamPlanner, Arial, sans-serif" }}
      >
        <span className="text-[15px] tracking-wide">{item.q}</span>
        <span className="ml-3 text-2xl leading-none">{isOpen ? "–" : "+"}</span>
      </button>

      <div
        id={contentId}
        className={[
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0",
        ].join(" ")}
      >
        <div className="overflow-hidden rounded-md bg-[#7C3F39] px-4 py-3 text-white/95">
          <p className="text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-[#384FBC]">
      {/* Clouds */}
      <div
        className="
          pointer-events-none absolute left-0 top-[-100] z-0 w-full
          h-[210px] md:h-[330px]
          bg-[url('/faq/clouds.png')] bg-repeat-x bg-top
          [background-size:auto_100%]
        "
      />

      <div
        className="
          pointer-events-none absolute left-0 bottom-[-100] z-10 w-full
          h-[210px] md:h-[360px]
          bg-[url('/faq/clouds.png')] bg-repeat-x bg-top
          [background-size:auto_100%]
          scale-y-[-1]
        "
      />

      <div className="relative z-20 flex justify-center px-4 pt-[140px] md:pt-[160px] pb-[260px] md:pb-[300px]">
        <div className="relative w-[92vw] md:w-[78vw] max-w-[980px]">
          <div className="rounded-2xl bg-[#A56A52] px-6 py-7 shadow-[0_16px_0_rgba(0,0,0,0.18)]">
            <h2
              className="text-center text-3xl text-white"
              style={{ fontFamily: "DreamPlanner, Arial, sans-serif" }}
            >
              FAQ
            </h2>

            <div className="mt-5 space-y-3">
              {FAQS.map((item, i) => (
                <AccordionRow
                  key={item.q}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}

              <div className="relative pt-2">
                <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-xl text-white">+</span>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xl text-white">+</span>

                <Link
                  href="/parent-guide"
                  className="block w-full rounded-md bg-[#163EA6] px-4 py-4 text-center text-white shadow-[0_6px_0_rgba(0,0,0,0.22)] transition hover:brightness-110"
                  style={{ fontFamily: "DreamPlanner, Arial, sans-serif" }}
                >
                  CHECK OUT THE PARENT GUIDE
                </Link>
              </div>
            </div>
          </div>

          {/* Gears */}
          <Image
            src="/faq/cog-left.png"
            alt=""
            width={320}
            height={320}
            className="
              pointer-events-none select-none absolute z-30
              -left-[55px] bottom-[-65px] w-[150px]
              md:-left-[85px] md:bottom-[-145px] md:w-[240px]
            "
          />
          <Image
            src="/faq/cog-right.png"
            alt=""
            width={260}
            height={260}
            className="
              pointer-events-none select-none absolute z-30
              -right-[45px] bottom-[-60px] w-[140px]
              md:-right-[75px] md:bottom-[-140px] md:w-[210px]
            "
          />
        </div>
      </div>
    </section>
  );
}
