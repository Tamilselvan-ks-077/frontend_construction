import React, { useState } from 'react';
import { Home, Building2, Hammer, Compass, Paintbrush, Briefcase, CheckCircle, X, Clock } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', notes: '' });

  const services = [
    {
      id: "residential",
      icon: <Home className="h-5 w-5 text-amber-600" />,
      title: "Residential Development",
      desc: "We construct bespoke luxury villas, duplexes, and multi-tenant residential buildings. Our teams work side-by-side with local designers, prioritizing sustainable airflow, natural illumination, and premium structural insulation.",
      specialties: ["Custom Single-Family Estates", "Multi-Family Condominiums", "Eco-Friendly Smart Homes", "Concrete Foundation Pouring"]
    },
    {
      id: "commercial",
      icon: <Building2 className="h-5 w-5 text-amber-600" />,
      title: "Commercial Development",
      desc: "Our commercial division builds top-tier corporate offices, medical suites, and retail centers. We focus on heavy mechanical integration, sustainable plumbing, and high-efficiency HVAC layouts.",
      specialties: ["Corporate Office Parks", "Medical & Clinical Centers", "Retail Plazas & Showrooms", "Heavy Concrete & Steel Framing"]
    },
    {
      id: "renovation",
      icon: <Hammer className="h-5 w-5 text-amber-600" />,
      title: "Structural Renovations",
      desc: "Breathe new life into aging masonry and structural steel. We reinforce load-bearing configurations, expand spatial layouts, and apply premium modern facades that immediately elevate property valuation.",
      specialties: ["Facade & Exterior Modernization", "Load-Bearing Wall Removals", "Heritage Building Preservations", "Full Interior Strip-outs"]
    },
    {
      id: "architecture",
      icon: <Compass className="h-5 w-5 text-amber-600" />,
      title: "Architectural & BIM Planning",
      desc: "Avoid mistakes before they happen. Our draftspeople create highly detailed 3D Building Information Models (BIM), allowing you to walk through your building virtually.",
      specialties: ["3D Virtual walkthroughs", "LEED Certification Drafting", "Structural Load Simulations", "Municipal Permit Approvals"]
    },
    {
      id: "interiors",
      icon: <Paintbrush className="h-5 w-5 text-amber-600" />,
      title: "Custom Interior Finishes",
      desc: "Our fine carpentry division executes master-class interior fit-outs. From customized modular kitchens and coffered ceilings to floating staircases and bespoke marble paneling.",
      specialties: ["Custom Fine Cabinetry", "Spatial Partition Walls", "Suspended Ceiling Systems", "Premium Wall Panelings"]
    },
    {
      id: "management",
      icon: <Briefcase className="h-5 w-5 text-amber-600" />,
      title: "Construction Management",
      desc: "We take the complexity out of site supervision. Our licensed managers coordinate scheduling, run strict safety audits daily, manage cost tracking in real-time, and act as your single channel of contact.",
      specialties: ["Subcontractor Vetting & Scheduling", "Cost Ledger Tracking", "Materials Testing & Logs", "Daily Drone Site Mapping"]
    }
  ];

  const roadmap = [
    { phase: "01", title: "Consultation & Audit", desc: "We analyze site soils, review your budget, and draft initial conceptual sketches to evaluate spatial feasibility." },
    { phase: "02", title: "BIM & Structural Design", desc: "Our architects model your project in full 3D, calibrating structural beams, plumbing, and material schedules." },
    { phase: "03", title: "Excavation & Build", desc: "We clear the site, lay reinforced concrete foundations, and build standard steel/concrete framing." },
    { phase: "04", title: "Audits & Handover", desc: "We run deep pressure tests on plumbing, check electrical circuits, complete trim finishes, and hand over certifications." }
  ];

  const handleOpenForm = (title) => {
    setSelectedService(title);
    setSubmitted(false);
    setFormData({ name: '', phone: '', notes: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-gray-700 pt-20">
      {/* 1. SIMPLE HERO BANNER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
              WHAT WE DO
            </span>
            <h1 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 leading-tight">
              Our Professional <span className="text-amber-600">Construction Services</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-505 font-normal">
              Explore our core building divisions and see our clean, step-by-step project execution roadmap.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-sm min-h-[300px]">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-50 rounded text-amber-600">
                      {s.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed text-gray-550 mb-4">
                    {s.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {s.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-gray-505">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="flex items-center gap-1 text-[10px] text-gray-400 font-mono">
                    <Clock className="h-3.5 w-3.5" /> Est: 2-3 Weeks
                  </span>
                  <Button size="sm" onClick={() => handleOpenForm(s.title)}>
                    Book Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. ROADMAP METHODOLOGY */}
      <section className="py-16 bg-gray-50 border-y border-gray-150">
        <Container>
          <SectionTitle
            subtitle="OUR TIMELINE"
            title="Our 4-Phase Build Process"
            description="We follow a clean, reliable, step-by-step workflow to deliver your commercial or residential build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-3 relative shadow-sm">
                <span className="text-3xl font-extrabold text-gray-100 absolute top-2 right-4 select-none pointer-events-none">
                  {r.phase}
                </span>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  PHASE {r.phase}
                </span>
                <h3 className="text-base font-bold text-gray-900">{r.title}</h3>
                <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal">{r.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SIMPLE CONSULTATION POPUP FORM */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal box */}
          <div className="relative w-full max-w-md bg-white border border-gray-250 rounded-lg p-6 z-10 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1 rounded border border-gray-200 text-gray-400 hover:text-gray-900 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                    INQUIRY FORM
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    Consultation: <span className="text-amber-600">{selectedService}</span>
                  </h3>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border border-gray-300 rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98450 12345"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border border-gray-300 rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Additional Specifications</label>
                    <textarea
                      placeholder="Plot dimensions, estimated timeline..."
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="border border-gray-300 rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="secondary" size="sm" onClick={() => setSelectedService(null)}>
                    Cancel
                  </Button>
                  <Button type="submit" size="sm">
                    Submit Request
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 flex flex-col items-center gap-3">
                <div className="h-10 w-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-gray-900">Request Registered!</h3>
                <p className="text-xs text-gray-550 leading-relaxed max-w-xs">
                  Thank you, <span className="font-semibold text-amber-600">{formData.name}</span>. An estimator has registered your inquiry for <span className="font-semibold text-gray-900">{selectedService}</span> and will call you shortly.
                </p>
                <Button className="mt-2" size="sm" onClick={() => setSelectedService(null)}>
                  Done
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;