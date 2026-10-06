import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";

const JoinPage = () => {
  return (
    <>
      <Header/>
        <JoinPartner/>
        <Footer/>   
    </>
  );
};
const JoinPartner = () => {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            Join & Partner With Us
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Be Part of the
            <span className="text-yellow-500"> Change</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Bintibora believes meaningful change happens when people,
            organizations, businesses, and communities work together.
            Join us and help create opportunities that make a lasting impact.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* Individual */}
          <div className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-2xl text-black">
              👥
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Join Us
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Become part of the Bintibora community and participate in
              programs, activities, training, and initiatives that create
              positive impact.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Become a Member
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Partner */}
          <div className="group rounded-3xl border border-yellow-500/30 bg-yellow-500 p-8 text-black transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
              🤝
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Partner With Us
            </h3>

            <p className="mt-4 leading-7 text-black/70">
              Organizations, businesses, institutions, and development
              partners can collaborate with Bintibora to design and support
              impactful programs.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center font-semibold text-black"
            >
              Become a Partner
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Volunteer */}
          <div className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-2xl text-black">
              ❤️
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Volunteer
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Share your skills, time, experience, and passion by
              volunteering in our programs and community initiatives.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Become a Volunteer
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 text-center text-black sm:p-12">

          <h3 className="text-3xl font-bold sm:text-4xl">
            Together, We Can Do More
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-black/70">
            Whether you want to join, volunteer, fund a program, or build
            a strategic partnership, there is a place for you at Bintibora.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get Started
            <span className="ml-2">→</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default JoinPage;