"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignupFormProps {
  loading: boolean;
  onSubmit: (name: string, email: string, password: string) => Promise<void>;
  onSwitchToLogin: () => void;
}

export function SignupForm({
  loading,
  onSubmit,
  onSwitchToLogin,
}: SignupFormProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(name, email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 animate-fadeIn min-h-screen md:min-h-fit p-4 text-base"
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
          className="text-base"
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
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full h-12 bg-primary text-base"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up"}
        </Button>
      </div>
      <div className="pt-2">
        <Button
          variant="link"
          className="w-full text-base"
          onClick={onSwitchToLogin}
        >
          Already have an account? Log in
        </Button>
      </div>
    </form>
  );
}
