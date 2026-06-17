"use client";

import { useState, type FormEvent } from "react";

const settings = ["In-clinic", "In-home", "Telehealth", "Not sure yet"];

const inputCls =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // NOTE: This is a front-end demo only. Wire up to an email service, form
  // backend (e.g. Formspree/Resend), or a Next.js route handler before launch.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-teal/20 bg-teal-soft/30 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl text-ink">Thank you!</h3>
        <p className="mt-3 text-muted">
          We&apos;ve received your message and will reach out within one business
          day. We look forward to connecting with your family.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-teal underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/5 bg-cream p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            Your name
          </span>
          <input required name="name" className={inputCls} placeholder="Jane Doe" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            Child&apos;s age
          </span>
          <input name="childAge" className={inputCls} placeholder="e.g. 4 years" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            className={inputCls}
            placeholder="you@email.com"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Phone</span>
          <input
            type="tel"
            name="phone"
            className={inputCls}
            placeholder="(555) 123-4567"
          />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-medium text-ink">
          Preferred setting
        </legend>
        <div className="flex flex-wrap gap-2">
          {settings.map((s) => (
            <label
              key={s}
              className="cursor-pointer rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-muted transition-colors has-[:checked]:border-teal has-[:checked]:bg-teal has-[:checked]:text-white"
            >
              <input type="radio" name="setting" value={s} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-ink">
          How can we help?
        </span>
        <textarea
          name="message"
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="Tell us a little about your child and what you're looking for…"
        />
      </label>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-warm px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d97c4a] sm:w-auto"
      >
        Send message
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </button>

      <p className="mt-4 text-xs text-muted">
        By submitting, you agree to be contacted by ACHO. We respect your privacy
        and never share your information.
      </p>
    </form>
  );
}
