import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3D1445] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">

          {/* Brand */}
          <div className="max-w-md">
            <a href="/" className="inline-block">
              <img
                src="/logo-white.svg"
                alt="Logo"
                className="h-11 w-auto"
              />
            </a>

            <p className="mt-6 font-montserrat text-sm leading-7 text-white/70">
              Building stronger communities, creating meaningful
              opportunities, and working together towards a better future.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">
              {[
                {
                  name: "Facebook",
                  href: "#",
                  icon: "f",
                },
                {
                  name: "X",
                  href: "#",
                  icon: "𝕏",
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: "◎",
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: "in",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 font-montserrat text-sm font-medium text-white transition-all hover:border-[#F5C6D6] hover:bg-[#F5C6D6] hover:text-[#3D1445]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#F5C6D6]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#about"
                  className="font-montserrat text-sm text-white/75 transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  className="font-montserrat text-sm text-white/75 transition-colors hover:text-white"
                >
                  Our Programs
                </a>
              </li>

              <li>
                <a
                  href="#impact"
                  className="font-montserrat text-sm text-white/75 transition-colors hover:text-white"
                >
                  Our Impact
                </a>
              </li>

              <li>
                <a
                  href="#partners"
                  className="font-montserrat text-sm text-white/75 transition-colors hover:text-white"
                >
                  Partners
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="font-montserrat text-sm text-white/75 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-[#F5C6D6]">
              Stay Connected
            </h3>

            <p className="mt-6 max-w-sm font-montserrat text-sm leading-6 text-white/70">
              Subscribe to our newsletter for updates, stories and
              opportunities to get involved.
            </p>

            <form className="mt-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 font-montserrat text-sm text-white outline-none placeholder:text-white/45 focus:border-[#F5C6D6] focus:ring-1 focus:ring-[#F5C6D6]"
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#F5C6D6] px-6 py-3.5 font-montserrat text-sm font-semibold text-[#3D1445] transition-all hover:bg-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/15" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-montserrat text-xs text-white/55">
            © {new Date().getFullYear()} Your Organization. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="font-montserrat text-xs text-white/55 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="font-montserrat text-xs text-white/55 transition-colors hover:text-white"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;