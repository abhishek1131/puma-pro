"use client";
import * as React from "react";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header className="absolute top-0 left-0 h-28 text-4xl font-bold text-gray-800 leading-[56px] w-[661px] max-md:static max-md:w-full max-md:max-w-full max-md:h-auto max-md:text-3xl max-md:leading-10 max-md:text-center max-sm:text-3xl max-sm:leading-9">
      {title}
    </header>
  );
}

interface ContentImageProps {
  src: string;
  alt: string;
}

export function ContentImage({ src, alt }: ContentImageProps) {
  return (
    <figure className="absolute left-0 shrink-0 h-[294px] top-[151px] w-[520px] max-md:static max-md:mx-auto max-md:my-0 max-md:w-full max-md:h-auto max-md:max-w-[520px] max-sm:max-w-full">
      <div className="absolute top-0 left-0 shrink-0 rounded-3xl bg-zinc-300 h-[294px] w-[520px] max-md:size-full" />
      <img
        src={src}
        alt={alt}
        className="object-cover absolute top-0 shrink-0 rounded-3xl h-[351px] left-[-3px] w-[526px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-full max-md:h-auto"
      />
    </figure>
  );
}

interface ContentTextProps {
  paragraphs: string[];
}

export function ContentText({ paragraphs }: ContentTextProps) {
  return (
    <div className="flex absolute right-0 flex-col gap-6 items-start pt-0.5 h-[274px] top-[151px] w-[705px] max-md:static max-md:w-full max-md:max-w-[600px] max-sm:max-w-full">
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="flex relative flex-col items-start w-full">
          {index === 0 && (
            <div className="flex relative flex-col items-start w-2 left-[-18.312px] opacity-[0.9025]">
              <span className="relative text-lg leading-7 text-teal-500 max-sm:text-base max-sm:leading-6">
                ›
              </span>
            </div>
          )}
          <p className="relative w-full text-lg leading-7 text-neutral-700 max-sm:text-base max-sm:leading-6">
            {paragraph}
          </p>
        </div>
      ))}
    </div>
  );
}

interface SectionContentProps {
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export function SectionContent({
  paragraphs,
  imageSrc,
  imageAlt,
}: SectionContentProps) {
  return (
    <div className="relative w-full min-h-[460px] max-md:flex max-md:flex-col max-md:gap-10 max-md:items-center max-md:min-h-[auto]">
      <ContentText paragraphs={paragraphs} />
      <ContentImage src={imageSrc} alt={imageAlt} />
    </div>
  );
}

export function Section() {
  const title = "We Know Your Business Because We're in It Too";

  const paragraphs = [
    "Puma Pro is a next-generation platform created by industry insiders with over 20 years in property management and MLR, 20+ years in tech, and a team that's actively investing in short-term rentals.",
    "We understand the pain of juggling outdated systems, rising booking fees, and too many tools that don't talk to each other. That's why we rebuilt Puma Pro from the ground up to give you back control.",
    "We're lean, local, and here to help you grow. With Puma Pro, you're not just using software you're partnering with a team that lives and breathes this industry.",
  ];

  return (
    <section className="flex relative flex-col justify-center items-center px-12 py-20 w-full bg-white min-h-[620px] max-md:px-8 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="absolute top-2/4 left-2/4 bg-blue-100 rounded-full opacity-20 blur-md -translate-x-2/4 -translate-y-2/4 h-[333px] w-[333px]" />

      <div className="flex relative flex-col justify-center items-center w-full max-w-screen-xl z-[1]">
        <div className="relative w-full min-h-[460px] max-md:flex max-md:flex-col max-md:gap-10 max-md:items-center max-md:min-h-[auto]">
          <SectionHeader title={title} />
          <SectionContent
            paragraphs={paragraphs}
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/caff20b6281b3a7e005b8bd306e243f10c6072b1?width=1052"
            imageAlt=""
          />
        </div>
      </div>
    </section>
  );
}

export function GetStartedButton() {
  return (
    <section className="flex flex-col items-center mt-8 max-w-full text-xl font-semibold leading-none text-center text-white min-h-14 w-[249px] mb-6">
      <button className="group flex shrink-0 gap-3 justify-center items-center px-8 py-3.5 max-w-full min-h-14 rounded-[100px] w-[210px] max-md:px-5 transition-all duration-[0.3s] ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative overflow-hidden">
        <div className="relative transition-all duration-[0.3s] ease-[ease] group-hover:absolute group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-110">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 flex-shrink-0 group-hover:fill-[#00D8B2] transition-[fill] duration-[0.3s]"
          >
            <g clipPath="url(#clip0_6_3357)">
              <path
                d="M20.8109 9.81848L6.63593 1.08075C5.6104 0.449388 4.37051 0.423138 3.31915 1.01053C2.26779 1.59783 1.64014 2.66756 1.64014 3.87182V21.2677C1.64014 23.0886 3.10732 24.578 4.91061 24.5878L4.92528 24.5879C5.48881 24.5878 6.07606 24.4112 6.62454 24.0765C7.06578 23.8073 7.20523 23.2314 6.93603 22.7902C6.66682 22.3489 6.09082 22.2095 5.64973 22.4787C5.39318 22.6352 5.14264 22.7161 4.92068 22.7161C4.24029 22.7124 3.51181 22.1295 3.51181 21.2677V3.87187C3.51181 3.35526 3.78106 2.8965 4.232 2.64454C4.68298 2.39259 5.21478 2.40384 5.65414 2.67436L19.8292 11.4121C20.2552 11.6744 20.499 12.1118 20.498 12.6121C20.497 13.1124 20.2514 13.5488 19.823 13.8103L9.57439 20.0853C9.13357 20.3552 8.99501 20.9314 9.26492 21.3721C9.53478 21.813 10.1109 21.9515 10.5517 21.6816L20.7991 15.4073C21.7803 14.8087 22.3674 13.7653 22.3698 12.6159C22.3721 11.4666 21.7892 10.4207 20.8109 9.81848Z"
                fill="white"
                className="group-hover:fill-[#00D8B2] transition-[fill] duration-[0.3s]"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_3357">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.00488281 0.587891)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="flex flex-col items-center self-stretch my-auto leading-7 transition-all duration-[0.3s] ease-[ease] group-hover:translate-x-[50px] group-hover:opacity-0">
          Get Started
        </span>
      </button>
    </section>
  );
}

export function ImageSection() {
  return (
    <div className="grow shrink rounded-3xl min-w-60 w-[342px] max-md:max-w-full">
      <div className="px-9 rounded-3xl max-md:px-5 max-md:max-w-full">
        <img
          src="/earth.gif"
          alt="Global reach and local expertise illustration"
          className="object-contain w-full rounded-3xl aspect-[1.34]"
        />
      </div>
    </div>
  );
}

export function ContentSection() {
  return (
    <div className="flex flex-col grow shrink justify-center min-h-[248px] min-w-60 w-[570px] max-md:max-w-full">
      <header className="flex flex-col justify-center max-w-full text-4xl font-bold leading-none text-gray-800 w-[655px]">
        <h2 className="leading-10 max-md:max-w-full">
          Global Reach, Local Expertise
        </h2>
      </header>
      <div className="mt-10 max-w-full text-lg leading-6 text-neutral-700 w-[645px]">
        <p className="max-md:max-w-full">
          Our platform is designed to work with local regulations and market
          conditions in every region, helping you navigate the complexities of
          global property management with ease.
        </p>
        <p className="mt-4 max-md:max-w-full">
          With multi-language support and region-specific features, Puma Pro
          adapts to your business needs no matter where you operate.
        </p>
      </div>
    </div>
  );
}

function GlobalReachSection() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col justify-center items-center px-8 py-12 w-full bg-gray-50 rounded-2xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start max-w-full w-[1122px]">
          <ContentSection />
          <ImageSection />
        </div>
      </section>
      <GetStartedButton />
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full">
      <Section />
      <GlobalReachSection />
    </main>
  );
}
