"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header className="relative top-0 left-0 h-28 text-4xl font-bold text-gray-800 leading-[56px] w-full max-w-[661px] mx-auto md:absolute md:w-[661px] max-md:h-auto max-md:text-3xl max-md:leading-10 max-md:text-center max-sm:text-2xl max-sm:leading-9">
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
    <figure className="relative shrink-0 h-[294px] w-full max-w-[520px] mx-auto md:absolute md:left-0 md:top-[151px] max-md:my-4 max-sm:max-w-full">
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl " />
      <img
        src={src}
        alt={alt}
        className="object-cover relative w-full h-auto rounded-3xl md:absolute md:top-0 md:left-[-3px] md:h-[351px] md:w-[526px] max-md:w-full max-md:h-auto"
      />
    </figure>
  );
}

interface ContentTextProps {
  paragraphs: string[];
}

export function ContentText({ paragraphs }: ContentTextProps) {
  return (
    <div className="relative w-full max-w-[705px] mx-auto flex flex-col gap-6 items-start pt-0.5 md:absolute md:right-0 md:top-[151px] max-md:max-w-[600px] max-sm:max-w-full">
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
    <div className="relative w-full min-h-[460px] flex flex-col gap-10 items-center md:flex-row md:gap-0 max-md:min-h-auto">
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
    "We're lean, local, and here to help you grow. With Puma Pro, you're not just using software—you're partnering with a team that lives and breathes this industry.",
  ];

  return (
    <section className="relative flex flex-col justify-center items-center px-4 py-12 w-full bg-white min-h-[620px] md:px-12 md:py-20 max-sm:px-3 max-sm:py-8">
      <div className="absolute top-1/2 left-1/2 bg-blue-100 rounded-full opacity-20 blur-md -translate-x-1/2 -translate-y-1/2 h-[333px] w-[333px] max-sm:h-[200px] max-sm:w-[200px]" />
      <div className="relative flex flex-col justify-center items-center w-full max-w-screen-xl z-[1]">
         <SectionHeader title={title} />
        <SectionContent
          paragraphs={paragraphs}
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/caff20b6281b3a7e005b8bd306e243f10c6072b1?width=1052"
          imageAlt=""
        />
       
      </div>
    </section>
  );
}

export function GetStartedButton() {
  const router = useRouter();
  return (
    <div className="flex my-10 flex-col items-center w-full max-w-[249px] max-sm:max-w-full">
      <button
        onClick={() => router.push("/contact-form")}
        className="group relative flex justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[100px] w-full max-w-[210px] max-sm:max-w-[300px] transition-all duration-300 ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        <span className="cursor-pointer text-xl font-semibold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6 transition-all duration-300 ease-[ease] group-hover:-translate-x-[20px]">
          Get Started
        </span>
        <span className="absolute right-[20px] translate-x-[40px] opacity-0 transition-all duration-300 ease-[ease] group-hover:translate-x-0 group-hover:opacity-100">
          <Image
            src="/arrow-right.svg"
            alt="Arrow"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </span>
      </button>
    </div>
  );
}

export function ImageSection() {
  return (
    <div className="grow shrink rounded-3xl min-w-[240px] w-full max-w-[342px] max-md:max-w-full">
      <div className="px-4 rounded-3xl max-md:px-3 max-md:max-w-full">
        <img
          src="/earth.gif"
          alt="Global reach and local expertise illustration"
          className="object-contain w-full rounded-3xl aspect-[1.34] max-md:h-auto"
        />
      </div>
    </div>
  );
}

export function ContentSection() {
  return (
    <div className="flex flex-col grow shrink justify-center min-h-[248px] min-w-[240px] w-full max-w-[570px] max-md:max-w-full">
      <header className="flex flex-col justify-center max-w-full text-4xl font-bold leading-none text-gray-800 w-full max-w-[655px] max-md:text-3xl max-sm:text-2xl">
        <h2 className="leading-10 max-md:max-w-full max-sm:leading-9">
          Global Reach, Local Expertise
        </h2>
      </header>
      <div className="mt-6 max-w-full text-lg leading-6 text-neutral-700 w-full max-w-[645px] max-sm:text-base max-sm:leading-6">
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
       <div className="flex flex-wrap gap-6 justify-center items-start w-full max-w-screen-xl md:gap-10 md:w-[1122px] md:max-w-full">
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