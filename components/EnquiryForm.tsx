"use client";

import { useState } from "react";
import { courses } from "@/lib/courses";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-ink-700">Thanks, we received your enquiry and will be in touch soon.</p>;
  }

  return (
    <form
      name="enquiry"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="enquiry" />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink-900">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="course" className="mb-1 block text-sm font-medium text-ink-900">
          Course interested in
        </label>
        <select
          id="course"
          name="course"
          required
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        >
          {courses.map((course) => (
            <option key={course.slug} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-900">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong, please try again or call us directly.</p>
      )}
    </form>
  );
}
