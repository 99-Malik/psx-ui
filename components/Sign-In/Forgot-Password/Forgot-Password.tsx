"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoIcon } from "@components/Svgs/Sign-In/Logo";
import { ShareBazaarLogo } from "@components/Svgs/Sign-In/IconSvgs";

// Back Arrow Icon
const BackArrowIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" rx="15" fill="#F8F9FA"/>
  <path d="M13.482 19.2625C13.6008 19.2625 13.7195 19.2187 13.8133 19.125C13.9945 18.9437 13.9945 18.6437 13.8133 18.4625L10.3508 15L13.8133 11.5375C13.9945 11.3562 13.9945 11.0562 13.8133 10.875C13.632 10.6937 13.332 10.6937 13.1508 10.875L9.35703 14.6687C9.17578 14.85 9.17578 15.15 9.35703 15.3312L13.1508 19.125C13.2445 19.2187 13.3633 19.2625 13.482 19.2625Z" fill="#80868B"/>
  <path d="M9.79375 15.4688H20.3125C20.5687 15.4688 20.7812 15.2563 20.7812 15C20.7812 14.7438 20.5687 14.5312 20.3125 14.5312H9.79375C9.5375 14.5312 9.325 14.7438 9.325 15C9.325 15.2563 9.5375 15.4688 9.79375 15.4688Z" fill="#010409"/>
  </svg>
  
);

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="h-full flex flex-col lg:flex-row bg-[#F8F9FA] p-4 md:p-6 gap-4 md:gap-6">
      {/* Left Side - Logo SVG */}
      <div className="hidden lg:flex lg:w-[60%] relative rounded-2xl overflow-hidden">
        <LogoIcon className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-[40%] flex items-start p-6 md:py-8 md:px-8 bg-white rounded-2xl overflow-auto">
        <div className="w-full max-w-full">
          {/* Logo */}
          <div className="flex justify-start mb-6">
            <ShareBazaarLogo />
          </div>

          {/* Back Link */}
          <Link 
            href="/sign-in" 
            className="inline-flex items-center gap-2 text-gray-900 font-medium mb-8 hover:opacity-70 transition-opacity"
          >
            <BackArrowIcon />
            <span>Back</span>
          </Link>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 text-left mb-3">
            Forget Password ?
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Enter your registered email address to receive a secure link for password reset
          </p>

          {/* Email Input with Icon */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z" fill="#80868B" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 md:pl-14 pr-5 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%]"
            />
          </div>

          {/* Get Link Button */}
          <button 
            onClick={() => router.push("/sign-in/reset-link")}
            className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors"
          >
            Get Link
          </button>
        </div>
      </div>
    </div>
  );
}

