import Image from "next/image";
import Link from "next/link";

export default function FooterScene() {
  return (
    <section className="relative w-full overflow-hidden bg-[#384FBC]">
      {/* Forest */}
      <div className="relative w-full h-[620px] md:h-[680px]">
 
        <Image
          src="/faq/bottom.png"
          alt="Forest background"
          fill
          className="select-none object-cover object-bottom"
          priority={false}
        />

        {/* Moon  */}
        <Image
          src="/faq/moon.png"
          alt=""
          width={420}
          height={600}
          className="
            pointer-events-none absolute left-1/2 z-10 select-none
            bottom-[170px] w-[220px] -translate-x-1/2
            md:bottom-[180px] md:w-[320px]
          "
        />

        <footer className="absolute bottom-[28px] left-0 z-20 w-full px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center text-white/90">
            <p className="text-2xl" style={{ fontFamily: "DreamPlanner, Arial, sans-serif" }}>
              Footer here
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              <Link className="hover:underline" href="#faq">FAQ</Link>
              <Link className="hover:underline" href="/parent-guide">Parent Guide</Link>
              <Link className="hover:underline" href="/code-of-conduct">Code of Conduct</Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
