"use client";

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

export default function ResetLink() {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col lg:flex-row bg-[#F8F9FA] p-4 md:p-6 gap-4 md:gap-6">
      {/* Left Side - Logo SVG */}
      <div className="hidden lg:flex lg:w-[60%] relative rounded-2xl overflow-hidden">
        <LogoIcon className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Reset Link Confirmation */}
      <div className="w-full lg:w-[40%] flex items-start p-6 md:py-8 md:px-8 bg-white rounded-2xl overflow-auto">
        <div className="w-full max-w-full">
          {/* Logo */}
          <div className="flex justify-start mb-6">
            <ShareBazaarLogo />
          </div>

          {/* Back Link */}
          <Link 
            href="/sign-in/forgot-password" 
            className="inline-flex items-center gap-2 text-gray-900 font-medium mb-8 hover:opacity-70 transition-opacity"
          >
            <BackArrowIcon />
            <span>Back</span>
          </Link>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 text-left mb-3">
            Reset Link Has Sent
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            A reset password link has been sent to your email (abc@gmail.com). Please check your inbox
          </p>

          {/* Check Inbox Button */}
          <button 
            onClick={() => router.push("/sign-in/reset-password")}
            className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors"
          >
            Check Inbox
          </button>
        </div>
      </div>
    </div>
  );
}

