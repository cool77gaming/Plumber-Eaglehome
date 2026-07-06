"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please tell us a bit more about your project."),
});

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real users never fill this hidden field in.
    if (formData.get("company")) {
      setStatus("success");
      return;
    }

    const parsed = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errors[String(issue.path[0])] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-teal bg-brand-teal/10 p-6 text-brand-black">
        <p className="font-semibold">Thanks for reaching out!</p>
        <p className="mt-1 text-sm">
          We got your message and will get back to you shortly. For anything urgent, call us at{" "}
          {siteConfig.phonePrimary.display}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot field, hidden from real users via CSS, catches simple bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-brand-black">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 focus:border-brand-gold focus:outline-none"
        />
        {fieldErrors.name && <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-black">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 focus:border-brand-gold focus:outline-none"
        />
        {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-brand-black">
          Phone <span className="font-normal text-brand-black/50">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 focus:border-brand-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-black">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 focus:border-brand-gold focus:outline-none"
        />
        {fieldErrors.message && <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please call us at{" "}
          {siteConfig.phonePrimary.display} instead.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
