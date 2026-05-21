import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Clock, Users } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const Home = () => {
  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "45+", label: "Expert Engineers" },
    { number: "100%", label: "Happy Clients" }
  ];

  const strengths = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-600" />,
      title: "Flawless Safety Record",
      desc: "Safety is our priority. We enforce strict safety guidelines on every construction site."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-600" />,
      title: "Certified Quality",
      desc: "We use only premium materials and hire fully licensed trade masters."
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "On-Time Completion",
      desc: "Through dedicated project management, we complete projects on or ahead of schedule."
    },
    {
      icon: <Users className="h-6 w-6 text-amber-600" />,
      title: "Transparent Process",
      desc: "No hidden charges. We offer comprehensive cost transparency and open communication."
    }
  ];

  const services = [
    {
      title: "Residential Construction",
      desc: "Building luxury custom estates, duplexes, and residential apartments customized to your style.",
      link: "/services"
    },
    {
      title: "Commercial Development",
      desc: "Engineering high-performance corporate offices, warehouses, and retail shopping complexes.",
      link: "/services"
    },
    {
      title: "Structural Renovations",
      desc: "Updating load-bearing frames, upgrading masonry, and remodeling spatial layouts.",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sekhar",
      role: "CEO, NexaCorp Properties",
      quote: "Working with Jothis Construction was a seamless experience. They finished ahead of schedule and delivered exceptional quality."
    },
    {
      name: "Ananya Krishnan",
      role: "Homeowner",
      quote: "Their attention to residential details is remarkable. From foundation to smart home fit-outs, the craftsmanship is perfect."
    },
    {
      name: "Dr. Vikram Seth",
      role: "Managing Director, ACM",
      quote: "Jothis Construction handled our clinical suite expansion with precision, strictly adhering to medical zoning codes."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-700">
      {/* 1. SIMPLE HERO BANNER */}
      <section className="bg-gray-50 border-b border-gray-150 py-20 pt-28">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
              Welcome to Jothis Construction
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Building Your Dreams With <span className="text-amber-600">Precision & Quality</span>
            </h1>
            <p className="text-sm md:text-base text-gray-505 leading-relaxed mb-6">
              We specialize in custom residential homes, corporate offices, civil engineering projects, and luxury renovations. Delivering reliable tradecraft with complete cost transparency.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects">
                <Button size="md" icon={<ArrowRight className="h-4 w-4" />}>
                  Explore Our Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="md">
                  Contact Estimator
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="p-3 border-r border-gray-100 last:border-0">
                <span className="text-2xl md:text-3.5xl font-bold text-gray-900 block mb-1">
                  {stat.number}
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CORE STRENGTHS / WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="OUR VALUES"
            title="Why Choose Jothis Construction"
            description="Our civil engineering crew and licensed trade experts ensure that your build is managed safely, transparently, and on budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((str, i) => (
              <div key={i} className="card-simple flex flex-col gap-3">
                <div className="p-2 bg-amber-50 rounded w-fit text-amber-600">
                  {str.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900">{str.title}</h3>
                <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal">{str.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SERVICES QUICK PREVIEW */}
      <section className="py-16 bg-gray-50 border-y border-gray-150">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                OUR DIVISIONS
              </span>
              <h2 className="text-2xl md:text-3.5xl font-bold text-gray-900">
                Our Core Construction Specialties
              </h2>
            </div>
            <Link to="/services">
              <Button variant="secondary" size="sm">
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((ser, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{ser.title}</h3>
                  <p className="text-xs text-gray-550 leading-relaxed font-normal mb-4">{ser.desc}</p>
                </div>
                <Link to={ser.link} className="flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider">
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. STATIC TESTIMONIALS */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="CLIENT VIEWS"
            title="What Our Partners Say"
            description="We build long-term relationships based on open communication, safety compliance, and professional reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white relative">
                <span className="text-4xl text-gray-200 font-serif absolute top-3 left-4 select-none pointer-events-none">“</span>
                <p className="text-xs md:text-sm text-gray-550 italic leading-relaxed mb-4 relative z-10">
                  "{test.quote}"
                </p>
                <div className="border-t border-gray-100 pt-3">
                  <h4 className="text-xs md:text-sm font-bold text-gray-900">{test.name}</h4>
                  <p className="text-[10px] text-gray-500 font-medium">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-gray-50 border-t border-gray-150 py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <h2 className="text-2xl md:text-3.5xl font-bold text-gray-900 leading-tight">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal max-w-lg mx-auto">
              Get in touch with Jothis Construction today to request a preliminary cost blueprint estimate or site audit consultation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <Link to="/contact">
                <Button size="md">Request Free Estimate</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="md">
                  Read Our History
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;