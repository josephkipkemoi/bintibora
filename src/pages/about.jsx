import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";

const AboutPage = () => {
  return (
    <>
       <Header/>
        <AboutUs/>
      <Footer/>
    </>
  );
};

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/hero-community.jpeg"
                alt="About Bintibora"
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-black px-7 py-5 text-white shadow-xl sm:right-6">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-gray-300">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              About Bintibora
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Building Solutions That
              <span className="text-yellow-500"> Make a Difference</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bintibora is a forward-thinking organization committed to
              delivering innovative, reliable, and impactful solutions.
              We believe in combining creativity, technology, and
              customer-focused thinking to create meaningful value.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our approach is built around understanding the unique needs
              of our customers and developing solutions that are practical,
              sustainable, and designed for long-term impact.
            </p>

            {/* Values */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
                  ✓
                </div>
                <h3 className="font-semibold text-gray-900">
                  Quality
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We are committed to delivering high-quality solutions
                  that our customers can trust.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                  ✦
                </div>
                <h3 className="font-semibold text-gray-900">
                  Innovation
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We continuously explore better ideas, technologies,
                  and ways of solving problems.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-yellow-500"
              >
                Learn More
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;