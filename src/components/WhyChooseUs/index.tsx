"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full max-w-[1192px]">
        <div className="flex flex-col gap-2 items-center w-full">
          <header className="flex flex-col items-center w-full">
            <h1
              className="w-full text-[42px] font-bold leading-[80px] text-center capitalize bg-clip-text max-w-[1050px] max-md:text-4xl max-md:leading-[44px] max-sm:text-3xl max-sm:leading-[36px]"
              style={{
                fontFamily: "Font 1",
                fontWeight: 700,
                letterSpacing: "0%",
                background:
                  "linear-gradient(114.64deg, #00D8B2 22.88%, #048EEA 88.49%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h1>
          </header>

          <p className="w-full text-lg leading-8 text-center text-gray-600 max-w-[1294px] max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-6">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  image: string;
  title: string;
  problem: string;
  solution: string;
  altText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  problem,
  solution,
  altText = "",
}) => {
  return (
    <article className="box-border flex flex-col shrink-0 gap-2 justify-center items-start p-2.5 bg-white rounded-2xl shadow-md border-none h-[216px] w-[640px] max-md:w-full max-md:max-w-screen-sm max-md:h-auto max-md:min-h-[200px] max-sm:p-4 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center w-full max-md:flex-col max-md:text-center">
        <img
          src={image}
          alt={altText}
          className="shrink-0 h-[154px] w-[174px] max-md:mb-4 max-md:h-[100px] max-md:w-[120px] max-sm:h-20 max-sm:w-[100px] transition-all duration-300 hover:h-[170px] hover:w-[190px] max-md:hover:h-[110px] max-md:hover:w-[130px] max-sm:hover:h-24 max-sm:hover:w-[110px]"
        />
        <div className="flex flex-col flex-1 gap-2 items-start pl-4 max-md:items-center">
          <h3 className="w-full text-2xl font-semibold leading-7 text-gray-800 max-md:text-center max-sm:text-xl max-sm:leading-6 transition-all duration-300 hover:translate-x-2 hover:scale-95">
            {title}
          </h3>
          <div className="flex flex-col items-start w-full max-md:items-center">
            <p className="mb-2 w-full text-base leading-6 text-gray-600 max-md:text-center max-sm:text-sm max-sm:leading-5 transition-all duration-300 hover:translate-x-2 hover:scale-95">
              {problem}
            </p>
            <p className="w-full text-base leading-6 text-teal-600 max-md:text-center max-sm:text-sm max-sm:leading-5 transition-all duration-300 hover:translate-x-2 hover:scale-95">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

interface GetStartedButtonProps {
  text: string;
  onClick?: () => void;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text,
  onClick,
}) => {
  const router=useRouter()
  return (
    <div className="flex flex-col items-center h-14 w-[249px] max-sm:w-full">
      <button
        onClick={() => router.push("/contact-form")}
        className="group relative flex justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[100px] w-[210px] max-sm:w-full max-sm:max-w-[300px] transition-all duration-300 ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        {/* Text */}
        <span className="cursor-pointer text-xl font-semibold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6 transition-all duration-300 ease-[ease] group-hover:-translate-x-[20px]">
          Get Started
        </span>

        {/* Arrow */}
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
};

const challengesData = [
  {
    image: "/whychooseus/first.png",
    title: "Too Many Tools",
    problem:
      "Managing bookings, guest communications, and accounting across multiple fragmented platforms creates inefficiencies and increases errors.",
    solution:
      "Puma Pro integrates everything into one simple platform, reducing complexity and streamlining your workflow.",
    altText: "Home investors choosing designs illustration",
  },
  {
    image: "/whychooseus/third.png",
    title: "High OTA Fees",
    problem:
      "Operating across fragmented systems limits your ability to manage listings and control expenses effectively.",
    solution:
      "Puma Pro centralizes operations, offering clear insights to reduce unnecessary fees and maximize revenue.",
    altText: "Flat isometric illustration concept notes detail",
  },
  {
    image: "/whychooseus/second.png",
    title: "Outdated Software",
    problem:
      "Legacy property management software is slow, cumbersome, and often outdated.",
    solution:
      "Puma Pro offers a modern, intuitive, cloud-based platform that's always updated, keeping you ahead of industry standards.",
    altText: "Cloud computing technology concept isometric vector",
  },
  {
    image: "/whychooseus/fourth.png",
    title: "Complicated Trust Accounting",
    problem:
      "Manual trust account reconciliation is time-consuming and prone to mistakes.",
    solution:
      "Puma Pro automates trust account reconciliation, ensuring compliance and accuracy, hassle-free.",
    altText: "Choose and look for home designs for the best investment",
  },
];

export const ChallengesSection: React.FC = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <section className="box-border flex flex-col gap-10 justify-center items-center px-12 pt-24 pb-24 w-full bg-[#F5F5F5] min-h-[884px] max-md:px-8 max-md:py-16 max-sm:px-4 max-sm:py-12">
      <div className="flex flex-col gap-12 justify-center items-center w-full max-w-[1294px]">
        <SectionHeader
          title="Turning Challenges Into Opportunities"
          subtitle="Puma Pro transforms the usual headaches into seamless, automated
workflows so you can focus on what matters most—your guests."
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 max-w-[1334px] w-full mx-auto max-md:grid-cols-1 max-md:gap-4">
          {challengesData.map((challenge, index) => (
            <FeatureCard
              key={index}
              image={challenge.image}
              title={challenge.title}
              problem={challenge.problem}
              solution={challenge.solution}
              altText={challenge.altText}
            />
          ))}
        </div>

        <GetStartedButton text="Get Started" onClick={handleGetStarted} />
      </div>
    </section>
  );
};

export default ChallengesSection;
