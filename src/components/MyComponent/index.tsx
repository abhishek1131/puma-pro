import * as React from "react";

function MyComponent() {
  return (
    <div className="flex absolute flex-col gap-4 justify-end items-center px-0 pt-3 pb-5 rounded-xl border-2 border-solid backdrop-blur-[20px] bg-white bg-opacity-80 border-sky-600 border-opacity-30 h-[148px] top-[37px] w-[353px] max-md:w-80 max-sm:w-full">
      <div className="flex flex-col gap-1 items-center w-full">
        <div
          layer-name="No direct fees"
          className="text-lg font-bold leading-6 text-center text-neutral-700"
        >
          No direct fees
        </div>
        <div
          layer-name="You decide pass our fee to guests, keep more of your earnings, and pay nothing out of pocket. Yes, it's really that simple."
          className="text-base leading-5 text-center max-w-[343px] text-neutral-700"
        >
          You decide pass our fee to guests, keep more of your earnings, and pay
          nothing out of pocket. Yes, it's really that simple.
        </div>
      </div>
    </div>
  );
}

function MyHeading() {
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div
        data-component-name="Frame 113"
        data-variant-name="Property 1=Default"
        className="flex gap-3 justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[50px] w-[225px] max-md:px-7 max-md:py-2 max-md:h-[50px] max-md:w-[200px] max-sm:px-6 max-sm:py-1.5 max-sm:h-[45px] max-sm:w-[180px]"
      >
        <div className="flex flex-col items-start w-[103px]">
          <div
            layer-name="Why Choose"
            className="text-base font-bold leading-5 text-white max-md:text-sm max-sm:text-sm"
          >
            Why Choose
          </div>
          <div
            layer-name="PumaPro?"
            className="text-xl font-bold leading-6 text-white max-md:text-lg max-sm:text-base"
          >
            PumaPro?
          </div>
        </div>
      </div>
      <div
        layer-name="Container"
        className="flex flex-col gap-32 items-center w-full max-w-screen-xl"
      >
        <div className="flex flex-col gap-14 items-center w-full">
          <div
            layer-name="Container"
            className="w-full text-xl leading-6 text-center max-w-[1166px] text-neutral-700 max-md:text-lg max-md:leading-6 max-sm:px-2.5 max-sm:py-0 max-sm:text-base max-sm:leading-5"
          >
            Our platform is purpose-built to cut through the noise, automate
            what matters, and give you the freedom and control to grow your
            business in the right direction all backed by a team that's as
            invested in your success as you are.
          </div>
        </div>
      </div>
    </div>
  );
}

function GetStartedBtn() {
  return (
    <div className="flex gap-3 justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 transition-all cursor-pointer duration-[0.3s] ease-[ease] rounded-[100px] w-[210px] max-sm:px-7 max-sm:py-2 max-sm:h-[50px] max-sm:w-[180px]">
      <div
        layer-name="Container"
        className="text-xl font-bold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6"
      >
        Get Started
      </div>
    </div>
  );
}

const WhyChosePumaProSection = () => {
  return (
    <div>
      <MyHeading />
      <MyComponent />
      <GetStartedBtn />
    </div>
  );
};

export default WhyChosePumaProSection;
