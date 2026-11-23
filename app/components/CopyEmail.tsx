"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="cursor-pointer rounded-full border border-mist/50 px-6 py-3 font-medium hover:border-white"
    >
      {status === "copied" ? "Email copied" : status === "failed" ? "Select the address to copy it" : "Copy email"}
    </button>
  );
}
