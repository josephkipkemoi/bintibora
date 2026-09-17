import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex items-center rounded-full border border-gray-200 px-4 py-2 font-montserrat text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
            Community • Impact • Action
          </span>

          <h1 className="font-montserrat text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl">
            Building a stronger future,
            <span className="block text-gray-500">
              together.
            </span>
          </h1>

          <p className="mt-7 max-w-xl font-montserrat text-base leading-7 text-gray-600 sm:text-lg">
            We bring people, ideas and resources together to create meaningful
            opportunities, strengthen communities and turn ambition into
            lasting impact.
          </p>

          {/* Dual CTAs */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 font-montserrat text-[15px] font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
            >
              Join / Partner
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l6.72-6.72v5.19a.75.75 0 001.5 0V6.25a.75.75 0 00-.75-.75H8.56a.75.75 0 000 1.5h5.19l-6.72 6.72a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-4 font-montserrat text-[15px] font-medium text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>

          {/* Small credibility line */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-9 w-9 rounded-full border-2 border-white bg-gray-300" />
              <div className="h-9 w-9 rounded-full border-2 border-white bg-gray-400" />
              <div className="h-9 w-9 rounded-full border-2 border-white bg-gray-500" />
            </div>

            <p className="font-montserrat text-sm text-gray-500">
              People working together for meaningful change.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gray-100" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gray-100" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/images/hero-community.jpeg"
              alt="Community members working together"
              className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[650px]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Floating impact card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md">
              <p className="font-montserrat text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                Our Mission
              </p>

              <p className="mt-2 font-montserrat text-lg font-semibold leading-snug text-gray-950">
                Creating opportunities that make a real difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;