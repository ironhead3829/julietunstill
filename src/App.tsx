
import { useState } from "react";
import {
  FaLinkedinIn,
  FaArrowRight,
  FaArrowDown,
  FaBars,
  FaTimes,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaRegHandshake,
  FaAward,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBolt,
  HiOutlineCubeTransparent,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

// --------------------------------------------------
// Configuration
// --------------------------------------------------

const profile = {
  name: "Julie Tunstill",
  title: "Technology & Solutions Sales Professional",
  linkedin: "https://www.linkedin.com/in/julietunstill",
  resume: `${import.meta.env.BASE_URL}Julie_Tunstill_Resume.pdf`,
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    company: "Dell Technologies",
    role: "Technology & Extended Technologies Sales",
    category: "Enterprise Technology",
    description:
      "Experience spanning Dell server sales and extended " +
      "technology solutions, including third-party infrastructure, " +
      "networking, security, and related products and services.",
    tags: [
      "Server Solutions",
      "Extended Technologies",
      "Infrastructure",
      "Third-Party Solutions",
    ],
  },
  {
    company: "Liberty Mutual",
    role: "Insurance Sales",
    category: "Insurance",
    description:
      "Experience selling home, auto, and life insurance " +
      "products, helping customers evaluate coverage " +
      "options for their individual needs.",
    tags: [
      "Home Insurance",
      "Auto Insurance",
      "Life Insurance",
    ],
  },
  {
    company: "Pharmaceutical Industry",
    role: "Pharmaceutical Assistant",
    category: "Healthcare",
    description:
      "Earlier professional experience in a pharmacy " +
      "environment, contributing to a broad background " +
      "across customer-facing and service-oriented roles.",
    tags: [
      "Healthcare",
      "Customer Service",
      "Industry Experience",
    ],
  },
];

const solutions = [
  {
    title: "Servers & Compute",
    description:
      "Dell server technologies and supporting solutions.",
    icon: FaServer,
  },
  {
    title: "Networking",
    description:
      "Third-party switches and networking infrastructure.",
    icon: FaNetworkWired,
  },
  {
    title: "Security",
    description:
      "Firewall products and supporting security solutions.",
    icon: FaShieldAlt,
  },
  {
    title: "Data Center Infrastructure",
    description:
      "Racks, enclosures, and supporting infrastructure.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Power Distribution",
    description:
      "Power distribution units and related equipment.",
    icon: HiOutlineBolt,
  },
  {
    title: "Extended Technologies",
    description:
      "Third-party products and services beyond Dell's " +
      "core hardware portfolio.",
    icon: HiOutlineCubeTransparent,
  },
];

const strengths = [
  {
    number: "01",
    title: "Customer Relationships",
    description:
      "Building connections through communication, " +
      "understanding, and a customer-focused approach.",
    icon: FaRegHandshake,
  },
  {
    number: "02",
    title: "Solutions-Oriented Thinking",
    description:
      "Understanding product options and connecting " +
      "customers with solutions suited to their needs.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    number: "03",
    title: "Industry Adaptability",
    description:
      "Bringing experience across technology, insurance, " +
      "healthcare, and other professional environments.",
    icon: FaAward,
  },
];

// --------------------------------------------------
// Shared Components
// --------------------------------------------------

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-4xl font-semibold tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-blue-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// --------------------------------------------------
// Navbar
// --------------------------------------------------

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-blue-950"
        >
          JULIE<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}

          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Resume
            <FaFileDownload size={13} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-blue-950 md:hidden"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href={profile.resume}
              download
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// --------------------------------------------------
// Hero
// --------------------------------------------------

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-blue-950 text-white"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-[370px] w-[370px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute right-8 top-8 h-[230px] w-[230px] rounded-full border border-white/10" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-300" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
              Technology • Sales • Solutions
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Connecting
            <br />
            people with
            <br />
            <span className="text-blue-300">
              the right solutions.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            I'm Julie Tunstill, a sales professional with
            experience across enterprise technology,
            infrastructure solutions, insurance, and
            customer-focused industries.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-blue-950 transition hover:bg-blue-100"
            >
              Explore My Experience
              <FaArrowRight size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Editorial identity panel */}
        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-16 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                Professional Profile
              </span>
              <span className="text-2xl text-blue-300">✦</span>
            </div>

            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-300 text-4xl font-bold text-blue-950">
              JT
            </div>

            <h2 className="text-3xl font-semibold">
              Julie
              <br />
              Tunstill
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-blue-200">
              Technology & Solutions
              <br />
              Sales Professional
            </p>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-xs uppercase tracking-widest text-blue-300">
                Experience Across
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white">
                Enterprise Technology
                <span className="mx-2 text-blue-400">/</span>
                Insurance
                <span className="mx-2 text-blue-400">/</span>
                Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-5 text-sm text-blue-200 lg:px-10">
          <FaArrowDown size={12} />
          <span>Discover my professional journey</span>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Career Highlights
// --------------------------------------------------

function CareerHighlights() {
  const highlights = [
    {
      label: "Enterprise Technology",
      value: "Dell Technologies",
    },
    {
      label: "Cross-Industry Experience",
      value: "Technology & Insurance",
    },
    {
      label: "Professional Focus",
      value: "Customer Solutions",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-10">
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={`${
              index !== 0
                ? "md:border-l md:border-slate-200 md:pl-8"
                : ""
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              {item.label}
            </p>

            <p className="mt-2 text-lg font-semibold text-blue-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --------------------------------------------------
// About
// --------------------------------------------------

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            01 / About Me
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl">
            A career built
            <br />
            around people
            <br />
            and possibilities.
          </h2>

          <div className="mt-8 h-1 w-20 rounded-full bg-blue-600" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            My professional background spans multiple
            industries, with a strong focus on sales,
            customer relationships, and understanding
            the products and services that help people
            accomplish their goals.
          </p>

          <p>
            At Dell Technologies, my experience began
            with server sales before expanding into
            Extended Technologies, where I worked with
            third-party infrastructure, networking,
            security, and other technology solutions.
          </p>

          <p>
            My career also includes insurance sales
            with Liberty Mutual and experience in the
            pharmaceutical industry, providing a broad
            perspective across different customer needs
            and business environments.
          </p>

          <a
            href="#experience"
            className="inline-flex items-center gap-3 pt-3 text-base font-semibold text-blue-700 transition hover:text-blue-900"
          >
            More About My Experience
            <FaArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Experience
// --------------------------------------------------

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="02 / Professional Journey"
          title="Experience that crosses industries."
          description="A background combining enterprise technology sales, consumer insurance, and customer-focused professional roles."
        />

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="group grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:border-blue-300 hover:shadow-lg md:grid-cols-[70px_1fr] md:p-9"
            >
              <div className="text-3xl font-light text-blue-300">
                0{index + 1}
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
                      {experience.category}
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-950">
                      {experience.company}
                    </h3>

                    <p className="mt-1 font-medium text-slate-700">
                      {experience.role}
                    </p>
                  </div>

                  <FaArrowRight className="text-blue-400 transition-transform group-hover:translate-x-1" />
                </div>

                <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Solutions
// --------------------------------------------------

function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-blue-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="03 / Technology Knowledge"
          title="Solutions I've worked with."
          description="Experience with a range of enterprise technology products, including Dell systems and third-party infrastructure solutions."
          light
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-7 transition hover:border-blue-300/50 hover:bg-white/10"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-800/60 text-blue-200">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Strengths
// --------------------------------------------------

function Strengths() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="04 / Professional Strengths"
          title="More than products. It's about people."
          description="The professional qualities that connect my experience across different industries."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <div
                key={strength.number}
                className="border-t-2 border-blue-200 pt-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {strength.number}
                  </span>

                  <Icon size={25} className="text-blue-700" />
                </div>

                <h3 className="text-xl font-semibold text-blue-950">
                  {strength.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Contact
// --------------------------------------------------

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-blue-900 px-8 py-16 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-5 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
              05 / Let's Connect
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's start a conversation.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
              Interested in connecting about professional
              opportunities, technology solutions, or
              my experience? I'd welcome the conversation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-blue-950 transition hover:bg-blue-100"
              >
                <FaLinkedinIn />
                Connect on LinkedIn
              </a>

              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                <FaFileDownload />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Footer
// --------------------------------------------------

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="text-lg font-bold text-blue-950">
            Julie Tunstill<span className="text-blue-600">.</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {profile.title}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition hover:text-blue-700"
          >
            <FaLinkedinIn size={19} />
          </a>

          <a
            href={profile.resume}
            download
            aria-label="Download Resume"
            className="text-slate-500 transition hover:text-blue-700"
          >
            <FaFileDownload size={19} />
          </a>

          <a
            href="#contact"
            aria-label="Contact section"
            className="text-slate-500 transition hover:text-blue-700"
          >
            <FaEnvelope size={19} />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © {currentYear} Julie Tunstill
        </p>
      </div>
    </footer>
  );
}

// --------------------------------------------------
// Application
// --------------------------------------------------

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <main>
        <Hero />
        <CareerHighlights />
        <About />
        <Experience />
        <Solutions />
        <Strengths />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
