"use client";

import { useState } from "react";
import { Button } from "@/components/shared/Button";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("sent"), 700);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" />
      <Field label="Message" name="message" as="textarea" rows={5} required />
      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg" variant="primary">
          {status === "sending"
            ? "Sending…"
            : status === "sent"
              ? "Sent ✓"
              : "Send message"}
        </Button>
        <p className="text-xs text-muted">
          We reply personally, usually within one business day.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
};

function Field({ label, name, type = "text", required, as = "input", rows }: FieldProps) {
  const shared =
    "peer w-full bg-transparent border-b border-stone px-0 py-3 text-ink placeholder-transparent focus:border-accent focus:outline-none transition-colors";
  return (
    <label className="relative block">
      <span className="absolute left-0 -top-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-muted peer-focus:-top-2 peer-focus:text-[0.65rem] peer-focus:tracking-[0.28em] peer-focus:uppercase peer-focus:text-accent">
        {label}
        {required ? " *" : ""}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          placeholder={label}
          className={shared + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={label}
          className={shared}
        />
      )}
    </label>
  );
}
