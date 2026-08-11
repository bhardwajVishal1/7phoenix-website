import { ArrowUpRight, Award } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-[5%] pt-32 lg:pt-36">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <Award
              size={20}
              strokeWidth={1.5}
              className="text-white/80"
            />

            <span className="uppercase tracking-[7px] text-sm lg:text-base text-white/75">
              World-Class Digital Agency
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="
              uppercase
              text-white
              font-normal
              text-[64px]
              sm:text-[72px]
              md:text-[82px]
              lg:text-[96px]
              xl:text-[105px]
              leading-[0.92]
              tracking-[-2px]
              max-w-[700px]
              relative
              z-10
            "
          >
            DESIGN.
            <br />
            DISRUPT.
            <br />
            CONQUER.
          </h1>

          {/* CTA + Award */}
          <div className="flex flex-wrap items-center gap-8 mt-12">

            {/* See Our Work */}
            <a
              href="#portfolio"
              className="
                group
                inline-flex
                items-center
                gap-4
                bg-black
                text-white
                px-8
                py-5
                text-sm
                uppercase
                tracking-[2px]
                font-semibold
                hover:bg-orange-500
                transition-all
                duration-300
              "
            >
              See Our Work

              <ArrowUpRight
                size={20}
                className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                "
              />
            </a>

            {/* Top Rated */}
            <div className="flex items-center gap-4">

              <Award
                size={42}
                strokeWidth={1.2}
                className="text-white/70"
              />

              <div className="leading-tight">
                <p className="text-xs uppercase tracking-[2px] text-white/50">
                  Top-Rated
                </p>

                <p className="text-sm uppercase tracking-[2px] text-white/80">
                  Brand Studio
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;