"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoIcon } from "@components/Svgs/Sign-In/Logo";
import { ShareBazaarLogo, EyeIcon } from "@components/Svgs/Sign-In/IconSvgs";

// Back Arrow Icon
const BackArrowIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="15" fill="#F8F9FA"/>
    <path d="M13.482 19.2625C13.6008 19.2625 13.7195 19.2187 13.8133 19.125C13.9945 18.9437 13.9945 18.6437 13.8133 18.4625L10.3508 15L13.8133 11.5375C13.9945 11.3562 13.9945 11.0562 13.8133 10.875C13.632 10.6937 13.332 10.6937 13.1508 10.875L9.35703 14.6687C9.17578 14.85 9.17578 15.15 9.35703 15.3312L13.1508 19.125C13.2445 19.2187 13.3633 19.2625 13.482 19.2625Z" fill="#80868B"/>
    <path d="M9.79375 15.4688H20.3125C20.5687 15.4688 20.7812 15.2563 20.7812 15C20.7812 14.7438 20.5687 14.5312 20.3125 14.5312H9.79375C9.5375 14.5312 9.325 14.7438 9.325 15C9.325 15.2563 9.5375 15.4688 9.79375 15.4688Z" fill="#010409"/>
  </svg>
);

// Lock Icon
const LockIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55229 15 9 15.4477 9 16Z" fill="#80868B" />
    <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#80868B" />
    <path d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z" fill="#80868B" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8V9.30277C5.02317 9.31872 4.80938 9.33948 4.60825 9.36652C3.70814 9.48754 2.95027 9.74643 2.34835 10.3483C1.74643 10.9503 1.48754 11.7081 1.36652 12.6082C1.24996 13.4752 1.24998 14.5775 1.25 15.9451V16.0549C1.24998 17.4225 1.24996 18.5248 1.36652 19.3918C1.48754 20.2919 1.74643 21.0497 2.34835 21.6516C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6516C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V15.9451C22.75 14.5775 22.75 13.4752 22.6335 12.6082C22.5125 11.7081 22.2536 10.9503 21.6517 10.3483C21.0497 9.74643 20.2919 9.48754 19.3918 9.36652C19.1906 9.33948 18.9768 9.31872 18.75 9.30277V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8ZM12 2.75C9.10051 2.75 6.75 5.10051 6.75 8V9.25344C7.12349 9.24999 7.52152 9.24999 7.94499 9.25H16.0549C16.4783 9.24999 16.8765 9.24999 17.25 9.25344V8C17.25 5.10051 14.8995 2.75 12 2.75ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z" fill="#80868B" />
  </svg>
);

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSaveLogin = () => {
    // Here you would typically validate and submit the new password
    router.push("/sign-in");
  };

  return (
    <div className="h-full flex flex-col lg:flex-row bg-[#F8F9FA] p-4 md:p-6 gap-4 md:gap-6">
      {/* Left Side - Logo SVG */}
      <div className="hidden lg:flex lg:w-[60%] relative rounded-2xl overflow-hidden">
        <LogoIcon className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Reset Password Form */}
      <div className="w-full lg:w-[40%] flex items-start p-6 md:py-8 md:px-8 bg-white rounded-2xl overflow-auto">
        <div className="w-full max-w-full">
          {/* Logo */}
          <div className="flex justify-start mb-6">
            <ShareBazaarLogo />
          </div>

          {/* Back Link */}
          <Link 
            href="/sign-in/reset-link" 
            className="inline-flex items-center gap-2 text-gray-900 font-medium mb-8 hover:opacity-70 transition-opacity"
          >
            <BackArrowIcon />
            <span>Back</span>
          </Link>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 text-left mb-3">
            Reset your password
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Enter new password and login to your account
          </p>

          {/* Password Fields */}
          <div className="space-y-4 mb-8">
            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <LockIcon />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 md:pl-14 pr-14 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2"
              >
                <EyeIcon visible={showPassword} />
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <LockIcon />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-11 md:pl-14 pr-14 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2"
              >
                <EyeIcon visible={showConfirmPassword} />
              </button>
            </div>
          </div>

          {/* Save Login Button */}
          <button 
            onClick={handleSaveLogin}
            className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors"
          >
            Save Login
          </button>
        </div>
      </div>
    </div>
  );
}

