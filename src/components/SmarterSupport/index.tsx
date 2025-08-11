"use client";

import Image from "next/image";
import React from "react";

interface SectionHeadingProps {
  title: string | JSX.Element;
  highlight: string | null;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlight,
}) => {
  return (
    <header className="flex relative flex-col items-center w-full max-w-screen-xl">
      <h1 className="relative w-full text-4xl font-bold leading-10 text-center text-gray-800 capitalize bg-clip-text">
        <div className="text-4xl font-bold text-gray-800">{title}</div>
        {highlight && <div className="text-4xl font-bold">{highlight}</div>}
      </h1>
    </header>
  );
};

export const BrowserMockup: React.FC = () => {
  return (
    <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center w-full rounded-2xl shadow-xl bg-white bg-opacity-0 h-[434px] max-md:h-full">
      <div>
        <svg
          width="812"
          height="434"
          viewBox="0 0 812 434"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6_3243)">
            <path d="M0 0H812V434H0V0Z" fill="white"></path>
            <path
              d="M24.1397 28.9674C26.8061 28.9674 28.9676 26.8059 28.9676 24.1395C28.9676 21.4731 26.8061 19.3115 24.1397 19.3115C21.4733 19.3115 19.3118 21.4731 19.3118 24.1395C19.3118 26.8059 21.4733 28.9674 24.1397 28.9674Z"
              fill="#FB8C8C"
            ></path>
            <path
              d="M24.1396 28.4847C26.5393 28.4847 28.4847 26.5393 28.4847 24.1396C28.4847 21.7398 26.5393 19.7944 24.1396 19.7944C21.7398 19.7944 19.7944 21.7398 19.7944 24.1396C19.7944 26.5393 21.7398 28.4847 24.1396 28.4847Z"
              stroke="#18181B"
              strokeOpacity="0.08"
              strokeWidth="0.965587"
            ></path>
            <path
              d="M39.5892 28.9674C42.2556 28.9674 44.4171 26.8059 44.4171 24.1395C44.4171 21.4731 42.2556 19.3115 39.5892 19.3115C36.9228 19.3115 34.7612 21.4731 34.7612 24.1395C34.7612 26.8059 36.9228 28.9674 39.5892 28.9674Z"
              fill="#FFCD82"
            ></path>
            <path
              d="M39.589 28.4847C41.9888 28.4847 43.9342 26.5393 43.9342 24.1396C43.9342 21.7398 41.9888 19.7944 39.589 19.7944C37.1893 19.7944 35.2439 21.7398 35.2439 24.1396C35.2439 26.5393 37.1893 28.4847 39.589 28.4847Z"
              stroke="#18181B"
              strokeOpacity="0.08"
              strokeWidth="0.965587"
            ></path>
            <path
              d="M55.0384 28.9674C57.7048 28.9674 59.8663 26.8059 59.8663 24.1395C59.8663 21.4731 57.7048 19.3115 55.0384 19.3115C52.372 19.3115 50.2104 21.4731 50.2104 24.1395C50.2104 26.8059 52.372 28.9674 55.0384 28.9674Z"
              fill="#A7ED7D"
            ></path>
            <path
              d="M55.0385 28.4847C57.4383 28.4847 59.3836 26.5393 59.3836 24.1396C59.3836 21.7398 57.4383 19.7944 55.0385 19.7944C52.6387 19.7944 50.6934 21.7398 50.6934 24.1396C50.6934 26.5393 52.6387 28.4847 55.0385 28.4847Z"
              stroke="#18181B"
              strokeOpacity="0.08"
              strokeWidth="0.965587"
            ></path>
            <path
              d="M155 23.1462C155 19.4383 155 17.5844 155.721 16.1679C156.356 14.9221 157.369 13.9091 158.615 13.274C160.032 12.5527 161.886 12.5527 165.593 12.5527H646.512C650.22 12.5527 652.074 12.5527 653.49 13.274C654.736 13.9091 655.749 14.9221 656.384 16.1679C657.105 17.5844 657.105 19.4383 657.105 23.1462V25.1334C657.105 28.8412 657.105 30.6952 656.384 32.1117C655.749 33.3575 654.736 34.3704 653.49 35.0055C652.074 35.7268 650.22 35.7268 646.512 35.7268H165.593C161.886 35.7268 160.032 35.7268 158.615 35.0055C157.369 34.3704 156.356 33.3575 155.721 32.1117C155 30.6952 155 28.8412 155 25.1334V23.1452V23.1462Z"
              fill="#F7F7F8"
            ></path>
            <path
              d="M639 24.9992C639 27.2007 640.748 28.9677 642.92 28.9677C645.094 28.9677 646.837 27.2007 646.837 24.9992C646.839 24.95 646.831 24.9008 646.814 24.8548C646.796 24.8088 646.769 24.767 646.735 24.7319C646.7 24.6969 646.659 24.6694 646.613 24.6513C646.567 24.6331 646.518 24.6246 646.469 24.6264C646.26 24.6264 646.122 24.7829 646.122 24.9982C646.122 26.8019 644.699 28.2455 642.92 28.2455C641.142 28.2455 639.714 26.8019 639.714 24.9982C639.714 23.2003 641.142 21.7606 642.92 21.7606C643.257 21.7606 643.572 21.7876 643.834 21.8504L642.508 23.1781C642.443 23.247 642.406 23.3381 642.406 23.433C642.406 23.6396 642.557 23.7922 642.756 23.7922C642.804 23.7945 642.852 23.7864 642.896 23.7686C642.941 23.7508 642.981 23.7236 643.014 23.6889L644.841 21.832C644.877 21.7978 644.906 21.7562 644.925 21.7099C644.945 21.6636 644.954 21.6137 644.952 21.5636C644.951 21.4628 644.911 21.3662 644.841 21.2942L643.014 19.419C642.981 19.3833 642.942 19.3552 642.897 19.3367C642.852 19.3182 642.804 19.3097 642.756 19.3119C642.557 19.3119 642.406 19.4731 642.406 19.6788C642.406 19.7733 642.441 19.8644 642.503 19.9356L643.683 21.1146C643.432 21.065 643.176 21.0395 642.92 21.0383C640.748 21.0383 639 22.8025 639 24.9992Z"
              fill="#B3B3BC"
            ></path>
            <path
              d="M369.095 28.9674H373.548C374.264 28.9674 374.643 28.5734 374.643 27.7961V24.405C374.643 23.6277 374.264 23.2386 373.548 23.2386H369.095C368.379 23.2386 368 23.6277 368 24.405V27.7961C368 28.5734 368.379 28.9674 369.095 28.9674ZM368.852 23.618H369.626V21.9543C369.626 20.7145 370.409 20.055 371.32 20.055C372.229 20.055 373.023 20.7145 373.023 21.9543V23.618H373.792V22.0634C373.792 20.2124 372.594 19.3115 371.32 19.3115C370.049 19.3115 368.852 20.2124 368.852 22.0634V23.618Z"
              fill="#B3B3BC"
            ></path>
            <text
              fill="#18181B"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Roboto"
              fontSize="10"
              letterSpacing="0px"
            >
              <tspan x="381.643" y="27.5576">
                pumapro.com
              </tspan>
            </text>
          </g>
          <defs>
            <clipPath id="clip0_6_3243">
              <rect
                width="812"
                height="433.765"
                rx="15.4494"
                fill="white"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export const VideoContent: React.FC = () => {
  return (
    <div>
      <svg
        width="788"
        height="375"
        viewBox="0 0 788 375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_6_3256"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="788"
          height="375"
        >
          <rect width="788" height="375" rx="8" fill="#D9D9D9"></rect>
        </mask>
        <g mask="url(#mask0_6_3256)">
          <rect
            y="-13"
            width="788"
            height="388"
            fill="url(#pattern0_6_3256)"
          ></rect>
          <foreignObject x="339" y="131.5" width="111" height="111">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(13px)",
                clipPath: "url(#bgblur_0_6_3256_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <circle
            cx="394.5"
            cy="187"
            r="29.5"
            fill="white"
            fillOpacity="0.18"
          ></circle>
          <foreignObject x="347.5" y="140" width="94" height="94">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(13px)",
                clipPath: "url(#bgblur_1_6_3256_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <circle
            cx="394.5"
            cy="187"
            r="21"
            fill="white"
            fillOpacity="0.5"
          ></circle>
          <path
            d="M401.481 187L390.964 193.033L390.997 180.909L401.481 187Z"
            fill="#FFFCFC"
          ></path>
        </g>
        <defs>
          <pattern
            id="pattern0_6_3256"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_6_3256"
              transform="scale(0.000521043 0.0010582)"
            ></use>
          </pattern>
          <clipPath
            id="bgblur_0_6_3256_clip_path"
            transform="translate(-339 -131.5)"
          >
            <circle cx="394.5" cy="187" r="29.5"></circle>
          </clipPath>
          <clipPath
            id="bgblur_1_6_3256_clip_path"
            transform="translate(-347.5 -140)"
          >
            <circle cx="394.5" cy="187" r="21"></circle>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full h-[434px] max-w-[812px] max-md:h-auto max-md:aspect-[812/434] max-md:max-w-[600px] max-sm:mx-4 max-sm:my-0 max-sm:max-w-full">
      {/* <BrowserMockup />
      <VideoContent /> */}
      <video
        src={"/steve-video.mp4"}
        width="100%"
        controls
        style={{
          display: "block",
          backgroundColor: "#000",
        }}
      />
    </div>
  );
};

interface GetStartedButtonProps {
  text?: string;
  onClick?: () => void;
}


export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text = "Get Started",
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center h-14 w-[249px] max-sm:w-full">
      <button
        onClick={onClick}
        className="group relative flex justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[100px] w-[210px] max-sm:w-full max-sm:max-w-[300px] transition-all duration-300 ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        {/* Text */}
        <span className="text-xl font-semibold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6 transition-all duration-300 ease-[ease] group-hover:-translate-x-[20px]">
          {text}
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


interface SteveAISectionProps {
  onGetStartedClick?: () => void;
}

export const SteveAISection: React.FC<SteveAISectionProps> = ({
  onGetStartedClick,
}) => {
  return (
    <section className="flex flex-col gap-12 items-center px-5 py-20 w-full min-h-screen bg-white">
      <SectionHeading
        title={
          <span>
            Smarter Support with{" "}
            <span
              style={{
                background:
                  "linear-gradient(138.38deg, #00D8B2 0%, #018EEB 85.77%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Steve AI
            </span>
          </span>
        }
        highlight={null}
      />

      <VideoPlayer />

      <GetStartedButton text="Get Started" onClick={onGetStartedClick} />
    </section>
  );
};

export default SteveAISection;
