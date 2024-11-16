"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function UserDrawer() {
  const [open, setOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log("Login successful");
        setOpen(false);
        setShowLogin(false);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        console.log("Signup successful");
        setOpen(false);
        setShowSignup(false);
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setShowLogin(false);
      setShowSignup(false);
    }
  };

  const content = (
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader className="text-center">
        <DrawerTitle className="text-2xl font-bold">Welcome!</DrawerTitle>
        <p className="text-muted-foreground">Sign up or log in to continue</p>
      </DrawerHeader>
      <div className="p-4 pb-8">
        <div className="flex flex-col gap-4">
          {!showLogin && !showSignup && (
            <Button variant="outline" className="flex items-center gap-2 h-12">
              <Image
                src="/google.webp?height=24&width=24"
                height={24}
                width={24}
                alt="Google logo"
                className="h-6 w-6"
              />
              Continue with Google
            </Button>
          )}

          {!showLogin && !showSignup && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>
          )}

          <div className="space-y-4 transition-all duration-300 ease-in-out">
            {!showLogin && !showSignup && (
              <div className="space-y-4 animate-fadeIn">
                <Button
                  className="w-full h-12 bg-primary"
                  onClick={() => setShowLogin(true)}
                >
                  Log in
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={() => setShowSignup(true)}
                >
                  Sign up
                </Button>
              </div>
            )}

            {showLogin && (
              <form onSubmit={handleLogin} className="space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary">
                  Log in
                </Button>
                <Button
                  variant="link"
                  className="w-full"
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                >
                  Don&apos;t have an account? Sign up
                </Button>
              </form>
            )}

            {showSignup && (
              <form
                onSubmit={handleSignup}
                className="space-y-4 animate-fadeIn"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-primary">
                  Sign up
                </Button>
                <Button
                  variant="link"
                  className="w-full"
                  onClick={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                >
                  Already have an account? Log in
                </Button>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Open user menu</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="sr-only">User menu</DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full   p-2">
          <User className="h-5 w-5" />
          <span className="sr-only">Open user menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>{content}</DrawerContent>
    </Drawer>
  );
}
