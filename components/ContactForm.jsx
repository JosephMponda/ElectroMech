"use client";
import { useEffect, useRef, useState } from "react";
import { services, whatsappLink } from "@/lib/site-data";

// Set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree or Web3Forms URL) at build time to
// deliver submissions by email. Without it, the form hands the enquiry to WhatsApp.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "";

export function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [service, setService] = useState("");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    const match = services.find((item) => item.slug === slug);
    if (match) setService(match.title);
  }, []);

  function collect(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    return data;
  }

  function whatsappText(data) {
    return [
      "Hello ElectroMech, I would like to request a quote.",
      `Name: ${data.name || ""}`,
      `Service: ${data.service || ""}`,
      `Phone: ${data.phone || ""}`,
      `Email: ${data.email || ""}`,
      `Requirement: ${data.message || ""}`,
    ].join("\n");
  }

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();
    const data = collect(form);
    if (data.website) return; // honeypot
    if (!endpoint) {
      window.open(whatsappLink(whatsappText(data)), "_blank", "noopener");
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...(accessKey ? { access_key: accessKey } : {}),
          subject: `Quote request: ${data.service}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setService("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-panel" onSubmit={submit} ref={formRef} noValidate={false}>
      <h2>Request a quote</h2>
      <p className="lead">Tell us what you need. We reply on the next working day, usually sooner.</p>
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
          Phone or WhatsApp
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="field">
          Service
          <select
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <label className="field field--wide">
          What do you need help with?
          <textarea name="message" required />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : endpoint ? "Send request" : "Send on WhatsApp"}
      </button>
      <p className="form-note">
        We use your details only to respond to this enquiry. See our{" "}
        <a href="/privacy/">privacy notice</a>.
      </p>
      {status === "sent" && (
        <p className="form-status" role="status">
          {endpoint
            ? "Thank you. We have your request and will reply on the next working day."
            : "WhatsApp has opened with your request. Press send there to reach us."}
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status--error" role="alert">
          Your request did not send. Please try again, call +265 999 858 218, or email
          sales@electromechmw.com.
        </p>
      )}
    </form>
  );
}
