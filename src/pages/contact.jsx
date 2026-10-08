import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <>
      <Header/>
        <ContactUs/>
      <Footer/>
    </>
  );
};
 const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's Start a
            <span className="text-yellow-500"> Conversation</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Have a question, idea, or project in mind? Get in touch with
            the Bintibora team. We'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl bg-black p-8 text-white sm:p-10">
            <h3 className="text-2xl font-bold">
              Get in Touch
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Our team is ready to answer your questions and help you
              find the right solution for your needs.
            </p>

            <div className="mt-10 space-y-7">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <Link
                    to="/mailto:info@bintibora.com"
                    className="mt-1 block font-medium transition hover:text-yellow-400"
                  >
                    info@bintibora.com
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <Link
                    to="tel:+254700000000"
                    className="mt-1 block font-medium transition hover:text-yellow-400"
                  >
                    +254 700 000 000
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="mt-1 font-medium">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-12 border-t border-gray-800 pt-8">
              <p className="text-sm text-gray-400">
                Follow us
              </p>

              <div className="mt-4 flex gap-3">
                {/* <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-500"
                  aria-label="Facebook"
                >
                  f
                </a> */}

                {/* <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-500"
                  aria-label="Instagram"
                >
                  ◎
                </a> */}

                {/* <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-500"
                  aria-label="LinkedIn"
                >
                  in
                </a> */}

                {/* <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-500"
                  aria-label="X"
                >
                  𝕏
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <form className="mt-8 space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
              >
                Send Message
                <span className="ml-2">→</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
export default ContactPage;