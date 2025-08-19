"use client";

import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageTop: number;
  imageLeft: number;
  layout?: "text-top";
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  specialContent?: React.ReactNode;
  isOddRow?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
  containerClassName = "",
  contentClassName = "",
  specialContent,
  isOddRow = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderTitle = () => {
    if (title === "Optimized Pricing Automatically") {
      return (
        <h2
          className={`mb-2 text-2xl font-semibold leading-7 text-gray-800 max-md:text-center max-sm:text-xl max-sm:leading-6 ${titleClassName} transition-all duration-300 ease-in-out group-hover:text-[22px] group-hover:leading-6 max-sm:group-hover:text-[18px] max-sm:group-hover:leading-5`}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          <div className="text-2xl max-sm:text-xl group-hover:text-[22px] max-sm:group-hover:text-[18px]">
            Optimized Pricing Automatically <span className="text-xs group-hover:text-[10px]"> (Live Soon)</span>
          </div>
        </h2>
      );
    }

    return (
      <h2
        className={`mb-2 text-2xl font-semibold leading-7 text-gray-800 max-md:text-center max-sm:text-xl max-sm:leading-6 ${titleClassName} transition-all duration-300 ease-in-out group-hover:text-[22px] group-hover:leading-6 max-sm:group-hover:text-[18px] max-sm:group-hover:leading-5`}
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
      >
        {title}
      </h2>
    );
  };

  const renderContent = () => (
    <div
      className={`flex flex-col justify-center w-full max-md:items-center ${contentClassName}`}
    >
      {renderTitle()}
      <p
        className={`mb-2 text-base leading-6 text-gray-600 max-md:text-center max-sm:text-sm max-sm:leading-5 ${descriptionClassName} transition-all duration-300 ease-in-out group-hover:text-[14px] group-hover:leading-5 max-sm:group-hover:text-[12px] max-sm:group-hover:leading-4`}
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );

  const renderImage = () => {
    if (specialContent) return specialContent;

    const staticImageUrl = imageUrl
      .replace("/gif/", "/images/")
      .replace(".gif", ".png");

    return (
      <img
        src={isHovered ? imageUrl : staticImageUrl}
        alt={imageAlt}
        className={`shrink-0 max-md:mb-4 max-md:static ${imageClassName} transition-all duration-300 ease-in-out group-hover:scale-105`}
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
        }}
        onError={(e) => {
          e.currentTarget.src = imageUrl;
        }}
      />
    );
  };

  return (
    <article
    className={`
      hover:border-teal-500 hover:border hover:border-2
      group relative box-border flex flex-col shrink-0 gap-16 justify-center items-center p-2.5
      bg-white rounded-2xl h-[256px] w-[660px] transition-all duration-300 ease-in-out
      hover:shadow-[0_0_25px_rgba(0,216,178,0.08),0_0_40px_rgba(0,117,195,0.08)]
      shadow-md
      before:content-[''] before:absolute before:inset-0 before:rounded-2xl
      before:border-[4px] before:border-transparent
      group-hover:before:border-teal-600
      before:opacity-0 group-hover:before:opacity-100
      before:transition-all before:duration-300
      before:pointer-events-none before:z-[1]
      ${containerClassName}
    `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="relative z-[2] flex items-center w-full max-md:flex-col max-md:text-center">
      {isOddRow ? (
        <>
          <div className="flex flex-col flex-1 gap-2 justify-center items-start pl-4 max-md:items-center max-md:pl-0">
            {renderContent()}
          </div>
          {renderImage()}
        </>
      ) : (
        <>
          {renderImage()}
          <div className="flex flex-col flex-1 gap-2 justify-center items-start pl-4 max-md:items-center max-md:pl-0">
            {renderContent()}
          </div>
        </>
      )}
    </div>
  </article>
  
  
  
  
  );
};
export const FeaturesGrid: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <section className="box-border flex flex-col gap-10 justify-center items-center px-12 pt-24 pb-24 w-full bg-[#EBEFF2] min-h-[884px] max-md:px-8 max-md:py-16 max-sm:px-4 max-sm:py-12">
        <div className="flex flex-col gap-12 justify-center items-center w-full max-w-[1294px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full max-w-[1192px]">
              <div className="flex flex-col gap-2 items-center w-full">
                <header className="flex flex-col items-center w-full">
                  <h1 className="w-full text-5xl font-bold leading-10 text-center capitalize bg-clip-text max-w-[1050px] max-md:text-4xl max-md:leading-9 max-sm:text-3xl max-sm:leading-8" style={{ color: "#1F2937" }}>
                    Powerful Features
                  </h1>
                </header>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-24 gap-y-8 max-w-[1334px] w-full  max-md:grid-cols-1 max-md:gap-8 -ml-[55px]">
            {/* Row 1: Text First */}
            <FeatureCard
              title="Integrated Payment Processor"
              description="Puma Pro Pay automates all your bookings and payments—no manual work, no bank fees, no errors. Enjoy seamless, effortless transactions every time."
              imageUrl="/gif/first.gif"
              imageAlt="Animation1"
              imageWidth={237}
              imageHeight={240}
              imageTop={11}
              imageLeft={394}
              isOddRow={true}
            />
            <FeatureCard
              title="Steve AI Assistant"
              description="Steve is your intuitive AI assistant, working 24/7 to save you time. From checking the weekend weather forecast to finding local events that could affect your room rates, Steve has it covered. Need to know how many cleans are scheduled this week? Just ask."
              imageUrl="/gif/second.gif"
              imageAlt="Animation4"
              imageWidth={255.51531982421875}
              imageHeight={223.2474365234375}
              imageTop={39}
              imageLeft={404}
              isOddRow={true}
            />

            {/* Row 2: Image First */}
            <FeatureCard
              title="Optimized Pricing Automatically"
              description="Automatically adjust your rates in real time based on demand, events, and market trends—all from one platform."
              imageUrl="/gif/third.gif"
              imageAlt="Animation2"
              imageWidth={355}
              imageHeight={196}
              imageTop={33}
              imageLeft={50}
              isOddRow={false}
            />
            <FeatureCard
              title="Channel Manager"
              description="Manage all your booking platforms from one place with Puma Pro. Our Channel Manager keeps your listings, rates, and availability perfectly synced automatically."
              imageUrl="/gif/fourth.gif"
              imageAlt="Animation7"
              imageWidth={293.67022705078125}
              imageHeight={140}
              imageTop={56}
              imageLeft={45}
              isOddRow={false}
            />

            {/* Row 3: Text First */}
            <FeatureCard
              title="Reporting & Analytics"
              description="Puma Pro instantly generates all the reports you need—bookings,
payments, performance, and more—automatically. Stay on top of your business with accurate, up-to-date insights."
              imageUrl="/gif/fifth.gif"
              imageAlt="Animation8"
              imageWidth={300}
              imageHeight={161}
              imageTop={51}
              imageLeft={358}
              isOddRow={true}
            />
            <FeatureCard
              title="Unified Guest Messaging System"
              description="Easily communicate with guests from one place. Puma Pro automates confirmations, updates, and even sends marketing promotions no manual emails or extra effort needed."
              imageUrl="/gif/sixth.gif"
              imageAlt="Animation5"
              imageWidth={196}
              imageHeight={222}
              imageTop={27}
              imageLeft={385.5}
              isOddRow={true}
            />

            {/* Row 4: Image First */}
            <FeatureCard
              title="Automated Bookings System"
              description="Let Puma Pro handle your reservations for you. Our automated booking system instantly processes new bookings, no manual entry or double bookings."
              imageUrl="/gif/seventh.gif"
              imageAlt="Group 1000004942 (5) 1"
              imageWidth={376}
              imageHeight={184}
              imageTop={38}
              imageLeft={59}
              isOddRow={false}
            />
            <FeatureCard
              title="Marketing"
              description="Need a hand with your marketing? Whether it's building a new website or sending out promotional emails, we're here to help you get noticed and grow your business hassle-free."
              imageUrl="/gif/eight.gif"
              imageAlt=""
              imageWidth={282.7349548339844}
              imageHeight={114.82846069335938}
              imageTop={74}
              imageLeft={59}
              isOddRow={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;