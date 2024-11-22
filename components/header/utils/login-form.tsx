"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  loading: boolean;
  onSubmit: (email: string, password: string) => Promise<void>;
  onSwitchToSignup: () => void;
}

export function LoginForm({
  loading,
  onSubmit,
  onSwitchToSignup,
}: LoginFormProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 animate-fadeIn min-h-screen md:min-h-fit p-4 text-base"
    >
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-base"
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
          className="text-base"
        />
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-primary text-base"
        disabled={loading}
      >
        {loading ? "Log in..." : "Log in"}
      </Button>
      <Button
        variant="link"
        className="w-full text-base"
        onClick={onSwitchToSignup}
      >
        Don&apos;t have an account? Sign up
      </Button>
    </form>
  );
}
