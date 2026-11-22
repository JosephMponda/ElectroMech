"use client";
import { useState } from "react";
import { services } from "@/lib/site-data";
export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity())
      return event.currentTarget.reportValidity();
    if (event.currentTarget.elements.website.value) return;
    event.currentTarget.reset();
    setSent(true);
  }
  return (
    <form className="form-panel" onSubmit={submit}>
      <p className="eyebrow">Start a conversation</p>
      <h2>Request a quote</h2>
      <div className="form-grid">
        <label className="field">
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label className="field">
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field">
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="field">
          Service
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="field field--wide">
          Tell us about the requirement
          <textarea name="message" required />
        </label>
        <label className="honeypot">
          Website
          <input name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>
      <button className="button" type="submit">
        Send request
      </button>
      <p className="form-note">
        Please do not include sensitive personal information in this form.
      </p>
      {sent && (
        <p className="form-status" role="status" tabIndex="-1">
          Thank you. Your request has been captured. Connect this form to your
          preferred email or form service before launch to receive submissions.
        </p>
      )}
    </form>
  );
}
