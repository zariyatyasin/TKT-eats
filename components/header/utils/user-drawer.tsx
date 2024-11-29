"use client";

import * as React from "react";
import Link from "next/link";
import { User, LogOut, X } from "lucide-react";
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
import { useUserDrawer } from "./userDrawerLogin";

export function UserDrawer() {
  const { data: session, status } = useSession();
  const [open, setOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const { isOpen, openDrawer, closeDrawer } = useUserDrawer();

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log("result:", result);

      if (result?.ok) {
        setOpen(false);
        setShowLogin(false);
      } else {
        setError(result?.error || "Login failed");
      }
    } catch (error) {
      setError("Login error");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (
    name: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        await handleLogin(email, password);
      } else if (response.status === 409) {
        setError("Email already exists");
      } else {
        setError("Signup failed");
      }
    } catch (error) {
      setError("Signup error");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      openDrawer();
    } else {
      closeDrawer();
    }
    if (!newOpen) {
      setShowLogin(false);
      setShowSignup(false);
      setError(null);
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
      <div className="p-4 pb-8 overflow-y-auto max-h-[calc(100vh-200px)]">
        <div className="flex flex-col gap-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {!showLogin && !showSignup && (
            <>
              <Button
                onClick={() => signIn("google")}
                variant="outline"
                className="flex items-center gap-2 h-12"
                disabled={loading}
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
                  disabled={loading}
                >
                  Log in
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={() => setShowSignup(true)}
                  disabled={loading}
                >
                  Sign up
                </Button>
              </div>
            </>
          )}

          {showLogin && (
            <LoginForm
              onSubmit={handleLogin}
              loading={loading}
              onSwitchToSignup={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            />
          )}

          {showSignup && (
            <SignupForm
              loading={loading}
              onSubmit={handleSignup}
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />
          )}

          <p className="text-center text-sm text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="/policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );

  if (session?.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-12 w-12  border-2">
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
            <Link href="/customer" className="flex items-center">
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
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full  h-11 w-11"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Open user menu</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">{content}</DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full p-2">
          <User className="h-5 w-5" />
          <span className="sr-only">Open user menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[88vh]">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={closeDrawer}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="h-[88ßvh]">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
