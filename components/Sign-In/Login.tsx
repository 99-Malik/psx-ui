"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function Login() {
    const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        password: "",
    });
    const router = useRouter();

    const handleLogin = () => {
        router.push("/ai-chat");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#F8F9FA] p-4 md:p-6 gap-4 md:gap-6">
            {/* Left Side - Logo SVG */}
            <div className="hidden lg:block lg:w-[60%] relative overflow-hidden rounded-2xl">
                <LogoIcon className="w-full h-full absolute inset-0" />
            </div>

            {/* Right Side - Login Form */}
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

                    {/* Or login with Email */}
                    <div className="text-center text-gray-400 text-sm mb-6">
                        Or login with Email
                    </div>

                    {/* Auth Method Tabs */}
                    <div className="flex border-b border-gray-200 mb-6">
                        <button
                            onClick={() => setAuthMethod("email")}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors ${authMethod === "email" ? "border-primary text-gray-900" : "border-transparent text-gray-400"
                                }`}
                        >
                            <EmailIcon active={authMethod === "email"} />
                            <span className="font-medium">Via Email</span>
                        </button>
                        <button
                            onClick={() => setAuthMethod("phone")}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors ${authMethod === "phone" ? "border-primary text-gray-900" : "border-transparent text-gray-400"
                                }`}
                        >
                            <PhoneIcon active={authMethod === "phone"} />
                            <span className="font-medium">Via Phone Number</span>
                        </button>
                    </div>

                    {/* Form Fields */}
                    {authMethod === "email" ? (
                        <>
                            <div className="space-y-4 mb-4">
                                {/* Email Input with Icon */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z" fill="#80868B" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-11 md:pl-14 pr-5 py-3 bg-[#F8F9FA] rounded-full outline-none transition-colors text-gray-700 placeholder:text-gray-400 placeholder:font-normal placeholder:text-base placeholder:leading-[140%]"
                                    />
                                </div>

                                {/* Password Input with Lock Icon */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55229 15 9 15.4477 9 16Z" fill="#80868B" />
                                            <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#80868B" />
                                            <path d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z" fill="#80868B" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8V9.30277C5.02317 9.31872 4.80938 9.33948 4.60825 9.36652C3.70814 9.48754 2.95027 9.74643 2.34835 10.3483C1.74643 10.9503 1.48754 11.7081 1.36652 12.6082C1.24996 13.4752 1.24998 14.5775 1.25 15.9451V16.0549C1.24998 17.4225 1.24996 18.5248 1.36652 19.3918C1.48754 20.2919 1.74643 21.0497 2.34835 21.6516C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6516C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V15.9451C22.75 14.5775 22.75 13.4752 22.6335 12.6082C22.5125 11.7081 22.2536 10.9503 21.6517 10.3483C21.0497 9.74643 20.2919 9.48754 19.3918 9.36652C19.1906 9.33948 18.9768 9.31872 18.75 9.30277V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8ZM12 2.75C9.10051 2.75 6.75 5.10051 6.75 8V9.25344C7.12349 9.24999 7.52152 9.24999 7.94499 9.25H16.0549C16.4783 9.24999 16.8765 9.24999 17.25 9.25344V8C17.25 5.10051 14.8995 2.75 12 2.75ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z" fill="#80868B" />
                                        </svg>
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                            </div>

                            {/* Forgot Password Link */}
                            <div className="flex justify-end mb-6">
                                <Link
                                    href="/sign-in/forgot-password"
                                    className="text-primary font-medium text-sm hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
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
                            <div className="flex justify-end mb-6">
                                <button className="text-primary font-medium text-sm hover:underline">
                                    Forgot OTP?
                                </button>
                            </div>
                        </>
                    )}

                    {/* Login Button */}
                    <button 
                        onClick={handleLogin}
                        className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors mb-6"
                    >
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-600">
                        Doesn't have an account?{" "}
                        <Link href="/sign-in/sign-up" className="text-primary font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

