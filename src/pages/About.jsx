import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  const highlights = [
    "ISO 9001 Quality Assured",
    "100% Licensed & Fully Insured",
    "Detailed 3D Spatial Planning",
    "Onsite Engineering Supervisors",
    "Completely Transparent Cost Ledger",
    "Comprehensive Work Warranty"
  ];

  const corePillars = [
    {
      title: "Our Mission",
      desc: "To deliver superior quality engineering and construction services, meeting design standards, adhering to exact client timelines, and ensuring the absolute safety of our crew and communities."
    },
    {
      title: "Our Vision",
      desc: "To become the benchmark for architectural precision and construction reliability across the region, integrating modern structural techniques with classic engineering integrity."
    },
    {
      title: "Core Values",
      desc: "Our foundation is built on integrity, craftsmanship, and absolute accountability. We treat every client contract as a trust pledge, dedicating our finest minds to actualize your design."
    }
  ];

  const milestones = [
    { year: "2011", title: "Founding Jothis Construction", desc: "Started as a residential renovation and repair contractor with a team of three master craftsmen in Chennai." },
    { year: "2015", title: "Expanding to Luxury Residences", desc: "Completed our 50th custom villa project. Expanded our workforce and added architectural design consulting." },
    { year: "2019", title: "Breaking into Commercial Builds", desc: "Secured our first multi-story corporate headquarters contract. Added structural steel capabilities to our operations." },
    { year: "2023", title: "LEED Compliance & Green Builds", desc: "Named 'Green Builder of the Year' at the Regional Civil Expo for sustainable insulation and solar integration." },
    { year: "2026", title: "Modern Industrial Parks", desc: "Leveraging 3D BIM modeling to construct high-efficiency smart industrial warehousing and eco-resorts." }
  ];

  const team = [
    { name: "Jothi Sundaram", role: "Founder & Chief Executive Officer", bio: "Over 20 years of hands-on civil engineering and site management experience. Jothi oversees major commercial negotiations." },
    { name: "Priya Jothi", role: "Chief Architect & Design Director", bio: "Leads our architectural drafting team, specializing in passive solar layouts, luxury spatial designs, and 3D modeling." },
    { name: "Manoj Kumar", role: "Senior Project Director", bio: "A site scheduling mastermind with 12+ years directing high-rise concrete pours and commercial project logistics." }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-700 pt-20">
      {/* 1. SIMPLE HERO BANNER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
              ABOUT OUR COMPANY
            </span>
            <h1 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 leading-tight">
              Building on a Legacy of <span className="text-amber-600">Trust & Quality</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-505 font-normal">
              Learn about Jothis Construction's history, core pillars, milestones, and the team driving our company.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. DESCRIPTION SPLIT */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text description */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Designing Communities, Constructing Legacies
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-550 font-normal">
                Founded with a strong commitment to quality tradecraft, Jothis Construction has evolved from a small residential builder into a full-scale architectural and civil engineering developer.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-550 font-normal">
                We believe that every structure must tell a story of longevity and craftsmanship. That is why we employ strict multi-stage inspections, select premium materials, and work exclusively with elite accredited trade masters to transform technical drawings into living space.
              </p>
              
              {/* Highlight points list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-655 font-medium">
                    <CheckCircle className="h-4.5 w-4.5 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple static outline box */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl flex flex-col justify-center items-center text-center min-h-[280px]">
              <div className="h-16 w-16 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center text-amber-600 mb-4 font-bold text-xl">
                15+
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Years of Excellence</h3>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-3">Precision-First Engineering</p>
              <p className="text-xs md:text-sm text-gray-505 max-w-sm leading-relaxed">
                "Every structural line we sketch is calibrated to bear loads, buffer environmental impacts, and inspire the eyes."
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE MISSION & VISION PILLARS */}
      <section className="py-16 bg-gray-50 border-y border-gray-150">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 text-amber-600">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. VERTICAL MILESTONES LIST */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="OUR TIMELINE"
            title="Our Construction Milestones"
            description="Trace Jothis Construction's growth from a small family craft group to a leader in luxury housing and commercial structures."
          />

          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="bg-amber-50 border border-amber-250 text-amber-600 font-bold text-xs md:text-sm px-3 py-1.5 rounded flex-shrink-0">
                  {m.year}
                </div>
                <div className="border-b border-gray-100 pb-4 w-full">
                  <h4 className="text-base font-bold text-gray-900 mb-1">{m.title}</h4>
                  <p className="text-xs md:text-sm text-gray-505 leading-relaxed font-normal">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. TEAM GRIDS */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <Container>
          <SectionTitle
            subtitle="OUR TEAM"
            title="Meet the Master Builders"
            description="Our civil engineering crew brings together master craftsmen, licensed heavy civil engineers, and leading spatial designers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((t, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-3 shadow-sm hover:shadow transition-shadow">
                <div className="h-12 w-12 rounded bg-amber-50 border border-amber-200 text-amber-600 font-bold flex items-center justify-center text-lg mb-2">
                  {t.name.split(" ")[0][0]}{t.name.split(" ")[1] ? t.name.split(" ")[1][0] : ''}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
                </div>
                <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal min-h-[60px]">
                  {t.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;