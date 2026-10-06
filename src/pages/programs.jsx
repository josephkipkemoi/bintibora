import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";

const ProgramPage = () => {
  return (
    <>
      <Header/>
        <Programs/>
      <Footer/>
    </>
  );
};
 const programs = [
  {
    title: "Youth Empowerment",
    category: "Community Development",
    description:
      "Empowering young people with skills, mentorship, leadership opportunities, and resources to build brighter futures.",
    image: "/images/programs/youth.jpg",
    link: "#",
  },
  {
    title: "Education & Skills",
    category: "Education",
    description:
      "Providing access to learning opportunities, practical skills, and training that help individuals unlock their potential.",
    image: "/images/programs/education.jpg",
    link: "#",
  },
  {
    title: "Entrepreneurship",
    category: "Economic Empowerment",
    description:
      "Supporting aspiring entrepreneurs through business training, mentorship, innovation, and opportunities for growth.",
    image: "/images/programs/entrepreneurship.jpg",
    link: "#",
  },
  {
    title: "Community Outreach",
    category: "Social Impact",
    description:
      "Working with communities to identify challenges, create solutions, and promote inclusive social and economic development.",
    image: "/images/programs/community.jpg",
    link: "#",
  },
  {
    title: "Women Empowerment",
    category: "Gender & Inclusion",
    description:
      "Creating opportunities for women through skills development, entrepreneurship, leadership, and community initiatives.",
    image: "/images/programs/women.jpg",
    link: "#",
  },
  {
    title: "Digital Skills",
    category: "Technology",
    description:
      "Equipping young people and communities with relevant digital skills for education, employment, entrepreneurship, and innovation.",
    image: "/images/programs/digital.jpg",
    link: "#",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Our Programs
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Creating Opportunities.
            <span className="text-yellow-500"> Changing Lives.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            At Bintibora, our programs are designed to create meaningful
            opportunities, empower communities, and equip people with the
            knowledge and skills they need to thrive.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-semibold text-black">
                  {program.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-yellow-600">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {program.description}
                </p>

                {/* Link */}
                <a
                  href={program.link}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-gray-900 transition group-hover:text-yellow-600"
                >
                  Learn More
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
          >
            Get Involved
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProgramPage;