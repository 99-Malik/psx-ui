"use client";
import { PlatformSvg } from "@components/Svgs/Platform/PlatformSvg";
export default function Banner() {
  return (
    <>
      {/* Purple Banner Section */}
      
      <div className="relative w-full overflow-hidden rounded-t-3xl">
        {/* Background SVG */}
        <div className="absolute inset-0 z-0">
          <PlatformSvg className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-16 px-4 md:py-20">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Share Bazaar — Jahan Trading Bhi,
            <br /> Learning Bhi, Winning Bhi!
          </h1>
          <p className="text-white text-base md:text-lg mb-8 max-w-2xl">
            Dive into podcasts, absorb market wisdom, and engage Bazaar AI for
            <br /> deeper analysis one click away from explore section
          </p>

          {/* Buttons */}
          <div className="flex h-12 flex-row sm:flex-row gap-4">
            {/* Start Trading Button - White background, purple text, purple arrow */}
            <button className="px-6 py-2 bg-white text-primary rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Start Trading
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z" fill="#8025EC" />
                <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="#8025EC" />
              </svg>
            </button>

            {/* See Video Button - Transparent background, white border, white text, video SVG icon */}
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              See Video
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="white" />
                <path d="M10.7598 16.3703C10.3398 16.3703 9.94984 16.2703 9.59984 16.0703C8.79984 15.6103 8.33984 14.6703 8.33984 13.4803V10.5203C8.33984 9.34029 8.79984 8.39029 9.59984 7.93029C10.3998 7.47029 11.4398 7.54029 12.4698 8.14029L15.0398 9.62029C16.0598 10.2103 16.6498 11.0803 16.6498 12.0003C16.6498 12.9203 16.0598 13.7903 15.0398 14.3803L12.4698 15.8603C11.8898 16.2003 11.2998 16.3703 10.7598 16.3703ZM10.7698 9.13029C10.6098 9.13029 10.4698 9.16029 10.3598 9.23029C10.0398 9.42029 9.84984 9.89029 9.84984 10.5203V13.4803C9.84984 14.1103 10.0298 14.5803 10.3598 14.7703C10.6798 14.9603 11.1798 14.8803 11.7298 14.5603L14.2998 13.0803C14.8498 12.7603 15.1598 12.3703 15.1598 12.0003C15.1598 11.6303 14.8498 11.2303 14.2998 10.9203L11.7298 9.44029C11.3698 9.23029 11.0398 9.13029 10.7698 9.13029Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}