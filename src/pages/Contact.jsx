import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, HelpCircle } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const faqs = [
    {
      q: "Do you service regions outside of Chennai?",
      a: "Yes, Jothis Construction handles major commercial contracts and luxury residential developments across Tamil Nadu and neighboring states depending on the project scale."
    },
    {
      q: "How long does a typical residential design phase take?",
      a: "A typical custom home goes from soil analysis to fully approved 3D BIM models within 3 to 5 weeks, depending on zoning approvals and requirements."
    },
    {
      q: "Is Jothis Construction fully licensed and insured?",
      a: "Absolutely. We are fully ISO 9001 certified, carry comprehensive third-party liability insurance, and hold full structural civil engineering licenses."
    },
    {
      q: "Do you assist in securing building and zoning permits?",
      a: "Yes. Our engineering division compiles and submits all structural blueprints, environmental impact papers, and zoning approvals directly to municipal councils."
    },
    {
      q: "What is your standard warranty on new residential construction?",
      a: "We offer an industry-standard 10-Year Structural Warranty on all foundations and load-bearing framing, along with a 2-Year Craftsmanship Warranty on trim work."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-gray-700 pt-20">
      {/* 1. SIMPLE HERO BANNER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
              CONTACT ESTIMATOR
            </span>
            <h1 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 leading-tight">
              Request a Preliminary <span className="text-amber-600">Cost Estimate</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-505 font-normal">
              Send your structural specifications to our estimating office or review our common client FAQs.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. DOUBLE PANE LAYOUT */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Office Specifications</h2>
                <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal">
                  Our estimating directors review submissions daily. You can also visit our corporate suites directly during standard operating hours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: <MapPin className="h-5 w-5 text-amber-600" />, title: "Corporate Headquarters", desc: "128 Engineering Way, Suite 400, Chennai, IN" },
                  { icon: <Phone className="h-5 w-5 text-amber-600" />, title: "Estimating Hotline", desc: "+91 (44) 2836-7299 / +91 98450 12345" },
                  { icon: <Mail className="h-5 w-5 text-amber-600" />, title: "Inquiry Email", desc: "bids@jothisconstruction.com / info@jothis.com" },
                  { icon: <Clock className="h-5 w-5 text-amber-600" />, title: "Business Hours", desc: "Monday - Saturday: 8:00 AM - 6:00 PM (IST)" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex gap-3.5 items-start">
                    <div className="p-2 bg-white border border-gray-200 rounded text-amber-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-550">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solid simple form */}
            <div className="lg:col-span-7 bg-white border border-gray-200 p-6 md:p-8 rounded-lg shadow-sm">
              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Cost Proposal Inquiry</h3>
                    <p className="text-xs text-gray-500 font-normal">
                      Provide contact credentials and spatial details below to compile an estimate.
                    </p>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`border rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600 ${
                          errors.name ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-rose-500 mt-0.5">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`border rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600 ${
                          errors.email ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-rose-500 mt-0.5">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98450 12345"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`border rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600 ${
                          errors.phone ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <span className="text-[10px] text-rose-500 mt-0.5">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Project Specialty</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded p-2 text-xs text-gray-900 bg-white focus:outline-none focus:border-amber-600"
                      >
                        <option value="residential">Residential Villa</option>
                        <option value="commercial">Commercial Hub</option>
                        <option value="renovation">Renovation Retrofit</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Message / Dimension specs</label>
                    <textarea
                      name="message"
                      placeholder="Enter sq-footage specifications..."
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`border rounded p-2 text-xs text-gray-900 focus:outline-none focus:border-amber-600 resize-none ${
                        errors.message ? 'border-rose-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && <span className="text-[10px] text-rose-500 mt-0.5">{errors.message}</span>}
                  </div>

                  <div className="flex justify-end mt-2">
                    <Button type="submit" icon={<Send className="h-3.5 w-3.5" />}>
                      Submit Spec sheet
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 flex flex-col items-center gap-3">
                  <div className="h-10 w-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Specifications Submitted!</h3>
                  <p className="text-xs text-gray-555 leading-relaxed max-w-sm">
                    Thank you, <span className="font-bold text-amber-600">{formData.name}</span>. An estimator has compiled your details for <span className="font-bold text-gray-800">{formData.projectType}</span> and will reach out to you shortly.
                  </p>
                  <Button className="mt-2" size="sm" onClick={() => setSubmitted(false)}>
                    Submit Another Estimate Form
                  </Button>
                </div>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* 3. SIMPLE FAQ ACCORDIONS */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <Container>
          <SectionTitle
            subtitle="CLIENT FAQS"
            title="Common Pricing & Licensing Questions"
            description="Have questions about construction timeline scheduling, budget estimates, or zoning permits? Check our FAQs."
          />

          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-sm md:text-base flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4.5 w-4.5 text-gray-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-100 text-xs md:text-sm font-normal text-gray-550 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;