"use client";
import Link from "next/link";
import { useState } from "react";
const links = [
  ["About", "/about/"],
  ["Services", "/services/"],
  ["Projects", "/projects/"],
  ["Insights", "/insights/"],
  ["Contact", "/contact/"],
];
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="ElectroMech Solutions home">
      <img
        className="brand-logo"
        src="/electromech-logo.jpg"
        width="286"
        height="199"
        alt="ElectroMech Solutions Limited"
      />
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span />
          <i className="sr-only">Menu</i>
        </button>
        <nav
          id="primary-navigation"
          className={"primary-nav " + (open ? "is-open" : "")}
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <Link onClick={() => setOpen(false)} key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link className="button button--small mobile-quote" href="/contact/">
            Request a quote
          </Link>
        </nav>
        <Link className="button button--small desktop-quote" href="/contact/">
          Request a quote
        </Link>
      </div>
    </header>
  );
}
