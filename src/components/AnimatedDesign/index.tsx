"use client";
import * as React from "react";

function InputDesign() {
  return (
    <main>
      <section className="flex relative flex-col justify-center items-center px-20 w-full min-h-[1527px] py-[532px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8666d45ba0d484f0d32cb51a17c79330f2fab226?placeholderIfAbsent=true&apiKey=3eb29736127741c69e2c57ecae91eaa3"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mb-0 ml-9 max-w-full w-[1120px] max-md:mb-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bb4fbece8dca0e518975c5bd9bf5f78f56d275c9?placeholderIfAbsent=true&apiKey=3eb29736127741c69e2c57ecae91eaa3"
            alt="Small decorative element"
            className="object-contain ml-52 aspect-[0.79] shadow-[0px_2px_5px_rgba(0,0,0,0.4)] w-[15px] max-md:ml-2.5"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/de7d96bf245a48dc26e3ef974fcf9970fee0617f?placeholderIfAbsent=true&apiKey=3eb29736127741c69e2c57ecae91eaa3"
            alt="Main content image"
            className="object-contain mt-3.5 w-full rounded-none aspect-[2.6] max-md:max-w-full"
          />
        </div>
      </section>
    </main>
  );
}

export default InputDesign;
