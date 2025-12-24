"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "@components/Svgs/Sign-In/Logo";
import {
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  OutlookIcon,
  EmailIcon,
  PhoneIcon,
  EyeIcon,
  ShareBazaarLogo,
} from "@components/Svgs/Sign-In/IconSvgs";
import OTPInput from "@components/Sign-In/OTPInput";

// Social Login Button
const SocialButton = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
    {icon}
    <span className="text-gray-700 font-medium">{text}</span>
  </button>
);

export default function SignIn() {
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F8F9FA] p-4 md:p-6 gap-4 md:gap-6">
      {/* Left Side - Your Logo SVG */}
      <div className="hidden lg:block lg:w-[60%] relative overflow-hidden rounded-2xl">
        <LogoIcon className="w-full h-full absolute inset-0" />
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-6 md:py-8 md:px-8 bg-white rounded-2xl">
        <div className="w-full max-w-full">
          <div className="flex justify-start mb-6">
            <ShareBazaarLogo />
          </div>

          <h1 className="text-3xl font-semibold text-gray-900 text-left mb-8">
            Welcome Back!
          </h1>

          <div className="space-y-3 mb-6">
            <SocialButton icon={<FacebookIcon />} text="Continue with Facebook" />
            <SocialButton icon={<GoogleIcon />} text="Continue with Google" />
            <SocialButton icon={<AppleIcon />} text="Continue with Apple" />
            <SocialButton icon={<OutlookIcon />} text="Continue with Outlook" />
          </div>

          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setAuthMethod("email")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors ${
                authMethod === "email" ? "border-primary text-gray-900" : "border-transparent text-gray-400"
              }`}
            >
              <EmailIcon active={authMethod === "email"} />
              <span className="font-medium">Via Email</span>
            </button>
            <button
              onClick={() => setAuthMethod("phone")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors ${
                authMethod === "phone" ? "border-primary text-gray-900" : "border-transparent text-gray-400"
              }`}
            >
              <PhoneIcon active={authMethod === "phone"} />
              <span className="font-medium">Via Phone Number</span>
            </button>
          </div>

          {authMethod === "email" ? (
          <div className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%]"
              />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-5 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%] pr-14"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2"
              >
                <EyeIcon visible={showPassword} />
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-5 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%] pr-14"
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
          ) : (
            <div className="mb-6">
              {/* Phone Number Input */}
              <div className="mb-6">
                <label className="block text-[#9AA0A6] text-xs font-medium leading-[18px] tracking-normal mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+92 300 5689123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%]"
                />
              </div>

              {/* OTP Input */}
              <div className="mb-4">
                <label className="block text-[#9AA0A6] text-xs font-medium leading-[18px] tracking-normal mb-3">OTP</label>
                <OTPInput 
                  length={4} 
                  onComplete={(otp) => console.log("OTP entered:", otp)} 
                />
              </div>

              {/* Forgot OTP Link */}
              <div className="flex justify-end">
                <button className="text-primary font-medium text-sm hover:underline">
                  Forgot OTP?
                </button>
              </div>
            </div>
          )}

          <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors mb-6">
            Sign Up
          </button>

          <p className="text-center text-gray-600">
            Already had an account?{" "}
            <Link href="/sign-in" className="text-primary font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
