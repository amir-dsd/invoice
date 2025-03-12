"use client";
import { useState } from "react";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter(); // Initialize useRouter
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const users:any = {
    sales: {
      fullName:'Mark Cuban',
      username: "sales123",
      role: "Sales",
      password: "secureSalesPass123!",
      email: "sales@company.com",
      active: true,
      canApprove:['BPO','PKS','BAST','INVOICE']
  },
  customer: {
    fullName:'Jeff Bezoz',
      username: "customer123",
      role: "Customer",
      password: "customerSecure!456",
      email: "support@company.com",
      active: true,
      canApprove:['BPO','PKS','BAST','INVOICE']
  },
  finance: {
    fullName:'Bill Gates',
      username: "finance123",
      role: "Finance",
      password: "finance$$$789",
      email: "finance@company.com",
      active: true,
      canApprove:['BPO','PKS','BAST','INVOICE']
  },
  legal: {
      fullName:'Jack Dorsey',
      username: "legal123",
      role: "Legal",
      password: "legalMatters321!",
      email: "legal@company.com",
      active: true, // Example: Maybe on leave
      canApprove:['BPO','PKS','BAST','INVOICE']
  },
  director: {
    fullName:'Steve Jobs',
    username: "director123",
    role: "Director",
    password: "directorMatters321!",
    email: "director@company.com",
    active: true, // Example: Maybe on leave
    canApprove:['BPO','PKS','BAST','INVOICE']
}
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const username = email.split("@")[0]; // Extract username from email

    if (users[username].password && users[username].password === password) {
      const userData = {
        username,
        role: users[username].role,
        email: email,
      };
  
      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem('isLogin','true')
      router.push("/") 
      setError("");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        {/* <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link> */}
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
            Sign In
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in!
          </p>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <Label>
                Email <span className="text-error-500">*</span>
              </Label>
              <Input
                placeholder="info@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label>
                Password <span className="text-error-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                >
                  {showPassword ? (
                    <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                  ) : (
                    <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                  )}
                </span>
              </div>
            </div>
            {error && <p className="text-error-500 text-sm">{error}</p>}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox checked={isChecked} onChange={setIsChecked} />
                <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                  Keep me logged in
                </span>
              </div>
              <Link
                href="/reset-password"
                className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Forgot password?
              </Link>
            </div>
            <div>
              <Button className="w-full" size="sm" type="submit">
                Sign in
              </Button>
            </div>
          </form>
          <div className="mt-5 text-center">
            <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
