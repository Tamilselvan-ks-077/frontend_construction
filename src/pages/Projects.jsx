import React, { useState } from 'react';
import { MapPin, Eye, X, Building, DollarSign, Clock, Calendar } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'renovation', name: 'Renovation' }
  ];

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: "Lotus Residency Villas",
      location: "East Coast Road, Chennai",
      client: "Lotus Estates Ltd.",
      budget: "$4.5 Million",
      duration: "14 Months",
      architect: "Priya Jothi, JC Designs",
      desc: "A cluster of 12 luxury seaside custom estates integrating smart lighting, private pools, and high-performance glass insulation to withstand corrosive ocean breeze. Completed on a strict timeline, utilizing premium granite foundations and load-bearing concrete framing.",
      specs: ["12 Bespoke Estates", "Passive Solar Framing", "Integrated Automation", "Double-Glazed Facades"]
    },
    {
      id: 2,
      category: 'commercial',
      title: "Technopark Corporate HQ",
      location: "OMR IT Corridor, Chennai",
      client: "Technopark Software Parks",
      budget: "$12.8 Million",
      duration: "24 Months",
      architect: "K. R. Murthy Associates",
      desc: "An 8-story commercial hub engineered for high structural rigidity and energy efficiency. Designed with suspended slab structures, custom glass facades, central geothermal heat pumps, and dual-layer rain gardens.",
      specs: ["8-Story High Rise", "LEED Platinum Compliant", "Pre-Cast Concrete Panels", "Central Geothermal System"]
    },
    {
      id: 3,
      category: 'commercial',
      title: "Grand Plaza Retail Mall",
      location: "Velachery, Chennai",
      client: "Plaza Developers Group",
      budget: "$8.2 Million",
      duration: "18 Months",
      architect: "JC Commercial Architects",
      desc: "A state-of-the-art multi-brand retail mall featuring a massive clear-span atrium ceiling made of custom steel trusses and structural glazing. The site includes double-tiered commercial loading zones and advanced automated thermal management.",
      specs: ["Clear-Span Steel Trusses", "Structural Glass Dome", "40+ Commercial Suites", "Multi-Tiered Loading Dock"]
    },
    {
      id: 4,
      category: 'renovation',
      title: "Heritage Fort Remodeling",
      location: "Mylapore, Chennai",
      client: "Venkateswara Heritage Trust",
      budget: "$2.1 Million",
      duration: "10 Months",
      architect: "Archetype Restoration Studio",
      desc: "Careful load-bearing rehabilitation of a 120-year-old heritage site. Our engineers successfully injected deep micro-concrete foundations, repaired deteriorating load columns with carbon-fiber wrapping, and restored authentic historic masonry layouts.",
      specs: ["120-Year-Old Masonry", "Carbon-Fiber Wrap Columns", "Micro-Concrete Underpinning", "Authentic Face Restoration"]
    },
    {
      id: 5,
      category: 'residential',
      title: "Lakeside Luxury Duplexes",
      location: "Redhills, Chennai",
      client: "Private Developer Group",
      budget: "$3.8 Million",
      duration: "12 Months",
      architect: "JC Residential Division",
      desc: "A stunning lakeside community of 8 duplex apartments configured to maximize water vistas. Features include floating structural decks, custom timber facade screens, and a central smart rainwater containment grid that supplies lawn water.",
      specs: ["8 Lakeside Duplexes", "Floating Timber Decks", "Smart Rainwater Harvesting", "Zero-VOC Finish Coatings"]
    },
    {
      id: 6,
      category: 'renovation',
      title: "Steel Warehouse Retrofitting",
      location: "Sriperumbudur Industrial Area",
      client: "Sriram Logistics & Supply",
      budget: "$1.9 Million",
      duration: "7 Months",
      architect: "JC Engineering Consultants",
      desc: "Structural conversion of a vintage warehouse into a modern automated sorting facility. Features deep reinforcement of overhead heavy crane rails, installation of fire-suppressant wall partitions, and structural reinforcement of warehouse concrete floor slabs.",
      specs: ["Industrial Retrofit", "Heavy Crane Rail Reinforcement", "Concrete Floor Levelling", "Firewall Partition Grids"]
    }
  ];

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen text-gray-700 pt-20">
      {/* 1. SIMPLE HERO BANNER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
              OUR PORTFOLIO
            </span>
            <h1 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 leading-tight">
              Featured building <span className="text-amber-600">Projects Portfolio</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-505 font-normal">
              Explore our completed residential luxury estates, commercial complexes, and historic retrofits.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. FILTER TABS & PROJECTS GRID */}
      <section className="py-16 bg-white">
        <Container>
          {/* Tab Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto bg-gray-50 p-1.5 rounded border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`py-1.5 px-4 text-xs md:text-sm font-semibold rounded uppercase transition-colors duration-150 ${
                  filter === cat.id
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-150 min-h-[300px] cursor-pointer"
              >
                <div>
                  <span className="inline-block bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase mb-3">
                    {p.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-4">
                    <MapPin className="h-3.5 w-3.5 text-amber-600" />
                    {p.location}
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-550 line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-6">
                  <span className="text-xs text-gray-400 font-mono">Budget: {p.budget}</span>
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-0.5 hover:underline">
                    <span>View Specs</span>
                    <Eye className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. SIMPLIFIED MODAL SPECIFICATIONS */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-2xl bg-white border border-gray-255 rounded-lg p-6 md:p-8 z-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1 rounded border border-gray-200 text-gray-400 hover:text-gray-900 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-5">
              <div>
                <span className="inline-block bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase mb-2">
                  {selectedProject.category} Details
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
              </div>

              <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-normal">
                {selectedProject.desc}
              </p>

              <div className="h-px bg-gray-100" />

              {/* Data Table block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Project Specifications</h4>
                  <ul className="flex flex-col gap-2 text-xs text-gray-505 font-normal">
                    {selectedProject.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-amber-600 rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-4 rounded flex flex-col gap-2 text-xs font-medium">
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center gap-1"><Building className="h-3.5 w-3.5 text-amber-600" /> Client:</span>
                    <span className="text-gray-800">{selectedProject.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-amber-600" /> Location:</span>
                    <span className="text-gray-800">{selectedProject.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-amber-600" /> Cost Scale:</span>
                    <span className="text-amber-700 font-bold">{selectedProject.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-amber-600" /> Duration:</span>
                    <span className="text-gray-800">{selectedProject.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-amber-600" /> Architect:</span>
                    <span className="text-gray-800">{selectedProject.architect}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button size="sm" onClick={() => setSelectedProject(null)}>
                  Close Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;