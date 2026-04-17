"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/emailjs";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      await sendEmail({
        from_name: name,
        from_email: email,
        message,
        to_email: "bookings@felixrides.com"
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="luxury-card space-y-4 p-6">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" className="w-full rounded-sm border border-border px-3 py-2 text-sm" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="w-full rounded-sm border border-border px-3 py-2 text-sm" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Message" className="min-h-36 w-full rounded-sm border border-border px-3 py-2 text-sm" />
      <button type="submit" className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p className="text-sm text-green-700">Message sent successfully.</p>}
      {status === "error" && <p className="text-sm text-red-600">Unable to send message. Please try again.</p>}
    </form>
  );
}
