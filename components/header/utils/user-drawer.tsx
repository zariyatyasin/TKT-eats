"use client";

import * as React from "react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSession, signIn, signOut } from "next-auth/react";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserDrawer() {
  const { data: session, status } = useSession();
  const [open, setOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(result);

      if (result?.ok) {
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

  const handleSignup = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        console.log("Signup successful");
        await handleLogin(email, password);
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

  const handleLogout = async () => {
    await signOut();
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
            <>
              <Button
                onClick={() => signIn("google")}
                variant="outline"
                className="flex items-center gap-2 h-12"
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/google.webp" alt="Google logo" />
                  <AvatarFallback>G</AvatarFallback>
                </Avatar>
                Continue with Google
              </Button>
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
            </>
          )}

          {showLogin && (
            <LoginForm
              onSubmit={handleLogin}
              onSwitchToSignup={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            />
          )}

          {showSignup && (
            <SignupForm
              onSubmit={handleSignup}
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />
          )}

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

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={session.user.image || undefined}
                alt={session.user.name || "User profile"}
              />
              <AvatarFallback>
                {session.user.name ? session.user.name[0].toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{session.user.name || "Profile"}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

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
        <Button variant="outline" size="icon" className="rounded-full p-2">
          <User className="h-5 w-5" />
          <span className="sr-only">Open user menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>{content}</DrawerContent>
    </Drawer>
  );
}
