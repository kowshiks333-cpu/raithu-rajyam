import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Play, Pause, Maximize2, Minimize2, 
  FileText, Download, CheckCircle2, Sprout, BarChart3, MapPin, 
  TrendingUp, Layers, CloudSun, ShieldAlert, Award, Globe, Database
} from 'lucide-react';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(true);

  const slides = [
    {
      id: 1,
      tag: "Title & Overview",
      title: "Raithu Rajyam — Agricultural Crop Production Analysis System",
      subtitle: "Comprehensive Digital Platform for State-wise Crop Yield, Production & Agronomic Intelligence in India",
      icon: Sprout,
      color: "from-emerald-800 to-green-950",
      content: {
        summary: "Raithu Rajyam is a state-of-the-art agricultural analytics applet built to aggregate, analyze, and visualize multi-year crop production data across all 28 Indian States and 8 Union Territories.",
        keyPoints: [
          "Covers 20+ primary food grains, cash crops, oilseeds, spices, and plantation crops",
          "Grounded in official Ministry of Agriculture & Farmers Welfare (MoA&FW) & DES data",
          "Provides interactive geographical heatmaps, comparative state analytics, and weather advisories",
          "Includes real-time CSV data export & farmer dataset management tools"
        ],
        stats: [
          { label: "States & UTs Covered", value: "36" },
          { label: "Crop Database", value: "20+ Primary Crops" },
          { label: "Data History", value: "6-Year Multi-Year" },
          { label: "Target Audience", value: "Farmers & Analysts" }
        ],
        speakerNotes: "Welcome everyone. Today we present Raithu Rajyam, an end-to-end crop production analysis system engineered to bridge the gap between complex government agricultural statistics and actionable decision-making for Indian farming."
      }
    },
    {
      id: 2,
      tag: "Problem Statement",
      title: "Agricultural Data Fragmentation & Challenges",
      subtitle: "Addressing the Core Obstacles in India's Agricultural Intelligence",
      icon: ShieldAlert,
      color: "from-amber-900 to-stone-900",
      content: {
        summary: "Indian agriculture represents over 18% of national GDP and employs ~50% of the workforce, yet crop production data remains scattered across tabular government releases and district handbooks.",
        keyPoints: [
          "Fragmented Datasets: Sowing, yield, and production figures isolated across different state portals",
          "Lack of Interactive Comparison: Difficult to compare 2-3 major producing states head-to-head",
          "Agrometeorological Gap: Farmers lack integrated weather advisory paired directly with crop-specific stages",
          "Delayed Actionable Insights: Raw PDF reports prevent quick multi-year trend analysis for agronomists"
        ],
        stats: [
          { label: "Agri GDP Share", value: "18.3%" },
          { label: "Workforce", value: "~50% Population" },
          { label: "Districts Tracked", value: "700+" },
          { label: "Solution", value: "Unified Dashboard" }
        ],
        speakerNotes: "Slide 2 outlines why Raithu Rajyam was created. Raw agricultural data is plentiful but unusable without unified visualization and immediate comparative tools."
      }
    },
    {
      id: 3,
      tag: "System Architecture",
      title: "Data Pipeline & System Architecture",
      subtitle: "Robust Tech Stack & Standardized Agronomic Engine",
      icon: Database,
      color: "from-sky-900 to-slate-950",
      content: {
        summary: "Built with a modern full-stack web architecture prioritizing zero-latency client rendering, verified ICAR/SAU data models, and clean CSV/Excel integrations.",
        keyPoints: [
          "Frontend Stack: React 19, TypeScript, Tailwind CSS, Vite for high-performance responsive UI",
          "Agronomic Engine: Verified ICAR (Indian Council of Agricultural Research) & SAU crop parameters",
          "Data Storage: Optimized structured JSON datasets & client-side reactive state management",
          "Python Analytical Modal: Exportable Pandas/NumPy Python code blocks for data scientists"
        ],
        stats: [
          { label: "Framework", value: "React 19 + Vite" },
          { label: "Styling", value: "Tailwind CSS v4" },
          { label: "Icons & Assets", value: "Lucide + Grounded PNGs" },
          { label: "Data Format", value: "JSON & CSV Export" }
        ],
        speakerNotes: "Slide 3 highlights our technical design: React 19 component hierarchy, grounded TypeScript schemas, and clean client-side rendering with exportable Python analysis."
      }
    },
    {
      id: 4,
      tag: "Core Modules",
      title: "Key Functional Modules of Raithu Rajyam",
      subtitle: "Five Interconnected Modules Delivering 360° Crop Coverage",
      icon: Layers,
      color: "from-emerald-900 to-teal-950",
      content: {
        summary: "The platform is organized into five specialized modules tailored for intuitive discovery and rapid cross-module navigation.",
        keyPoints: [
          "Interactive State Map: Color-coded map of India for exploring total production, top crops, and district clusters",
          "Crop Database Encyclopedia: Deep-dive specs with soil pH, rainfall mm, NPK fertilizer ratios, and pest protocols",
          "Production Analysis Dashboard: Multi-year trend charts, top-10 cluster rankings, and category filters",
          "State Head-to-Head Comparison: Compare 2 or 3 states simultaneously across yield (kg/ha) and production (MT)",
          "Farmer Excel Database & Weather: Manage regional farmer records & view live agrometeorological advisories"
        ],
        stats: [
          { label: "Modules", value: "5 Core Sections" },
          { label: "State Cards", value: "36 Detailed Views" },
          { label: "Pest Protocols", value: "60+ Treatments" },
          { label: "Comparison Tool", value: "Up to 3 States" }
        ],
        speakerNotes: "Slide 4 showcases the core modules: Interactive India Map, Crop Encyclopedia, Production Analytics, State Comparison, and Farmer Database."
      }
    },
    {
      id: 5,
      tag: "Analytics & Export",
      title: "Data Analytics & Farmer Dataset Management",
      subtitle: "Empowering Agronomists with Exportable Code & Clean Excel Files",
      icon: BarChart3,
      color: "from-indigo-900 to-slate-950",
      content: {
        summary: "Beyond visual charts, Raithu Rajyam equips researchers with raw data access, Excel table management, and executable Python snippets.",
        keyPoints: [
          "Farmer Database Modal: Full table with pagination, district filters, land holding sizes (acres), and phone numbers",
          "Executable Python Snippets: Ready-to-use Pandas code for rank calculation, yield trend modeling, and plot generation",
          "CSV Dataset Export: Single-click download of state production statistics for offline analysis",
          "Calculated Metrics: Automatic yield estimation (tonnes/ha) and national category production share (%)"
        ],
        stats: [
          { label: "Farmer Records", value: "Interactive Table" },
          { label: "Python Scripts", value: "Pandas & Matplotlib" },
          { label: "CSV Export", value: "Instant Download" },
          { label: "Yield Formula", value: "Production / Area" }
        ],
        speakerNotes: "Slide 5 focuses on data export capabilities: researchers can inspect farmer records, export clean CSV datasets, or copy pre-built Python code."
      }
    },
    {
      id: 6,
      tag: "Weather & Advisory",
      title: "Integrated Agrometeorological Advisory",
      subtitle: "Linking Weather Patterns to Crop Stage Vulnerability",
      icon: CloudSun,
      color: "from-sky-900 to-blue-950",
      content: {
        summary: "Climatic conditions dictate agricultural success. The Weather & Advisory module correlates weather parameters directly with crop risk.",
        keyPoints: [
          "Real-time & Seasonal Forecasts: Temperature range, humidity %, and 7-day precipitation probability",
          "Crop Stage Warnings: Alerts for critical stages (e.g., CRI in wheat, Tasseling in maize, Boll opening in cotton)",
          "Pest & Disease Forecasting: Early warnings for Yellow Rust, Fall Armyworm, and Brown Plant Hopper based on humidity",
          "Water Management Advice: Alternate Wetting & Drying (AWD) and Drip Irrigation advisories"
        ],
        stats: [
          { label: "Forecast Days", value: "7-Day Range" },
          { label: "Stage Alerts", value: "Critical Milestones" },
          { label: "Pest Risk Levels", value: "Low / Med / High" },
          { label: "Water Savings", value: "Up to 45%" }
        ],
        speakerNotes: "Slide 6 highlights our Agrometeorological engine: translating weather metrics into actionable crop advice for field implementation."
      }
    },
    {
      id: 7,
      tag: "Stakeholder Impact",
      title: "Value Creation & Stakeholder Impact",
      subtitle: "Delivering Actionable Value Across the Agricultural Ecosystem",
      icon: Award,
      color: "from-emerald-950 to-stone-900",
      content: {
        summary: "Raithu Rajyam serves multiple user personas with customized insights and high-fidelity visual representations.",
        keyPoints: [
          "Farmers & Krishi Vigyan Kendras (KVKs): Crop variety selection, pest management, and localized weather advice",
          "Agri-Researchers & Students: Grounded historical data, botanical parameters, and downloadable Python code",
          "Policy Makers & Officers: Identification of low-yield districts for targeted scheme deployment (PM-KSY, PKVY)",
          "Agri-Businesses & Traders: Production volume forecasts and state-level surplus identification"
        ],
        stats: [
          { label: "Farmer Utility", value: "High Practical Value" },
          { label: "Research Support", value: "Grounded Specs" },
          { label: "Policy Relevance", value: "District Clusters" },
          { label: "Business Value", value: "Yield Forecasting" }
        ],
        speakerNotes: "Slide 7 summarizes our impact: from individual farmers selecting seed varieties to policy makers planning irrigation interventions."
      }
    },
    {
      id: 8,
      tag: "Conclusion & Future",
      title: "Future Roadmap & Summary",
      subtitle: "Scaling Raithu Rajyam into Next-Generation Precision Agriculture",
      icon: Globe,
      color: "from-emerald-900 to-stone-950",
      content: {
        summary: "Raithu Rajyam establishes a strong foundation for digital agriculture in India, with clear pathways for expansion into AI-driven remote sensing and market pricing.",
        keyPoints: [
          "Satellite Remote Sensing: Integrating NDVI vegetation index maps for real-time crop health monitoring",
          "Mandi MSP Price Integration: Live e-NAM mandi prices paired with state production volumes",
          "Multilingual Voice Assistant: Audio advisories in Hindi, Telugu, Tamil, Bengali, and Marathi",
          "Conclusion: Raithu Rajyam empowers Indian agriculture with data-driven clarity, efficiency, and sustainability"
        ],
        stats: [
          { label: "Next Step 1", value: "NDVI Satellite Integration" },
          { label: "Next Step 2", value: "e-NAM Live Prices" },
          { label: "Languages Planned", value: "10+ Vernacular" },
          { label: "Status", value: "Production Ready" }
        ],
        speakerNotes: "Thank you! Slide 8 concludes our presentation with our vision for satellite NDVI integration, mandi price feeds, and vernacular voice guidance."
      }
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const current = slides[currentSlide];
  const IconComp = current.icon;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-stone-900 text-white rounded-2xl shadow-2xl border border-stone-800 overflow-hidden my-auto min-h-[640px] flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950 border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 text-xs font-bold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Slide {currentSlide + 1} of {slides.length}
            </div>
            <span className="text-xs text-stone-400 font-medium hidden sm:inline">
              Project Presentation Deck · Raithu Rajyam
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                isPlaying 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
              }`}
              title={isPlaying ? "Pause Auto-play" : "Start Auto-play (7s per slide)"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Auto Play'}</span>
            </button>

            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                showNotes ? 'bg-emerald-800 text-white' : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
              }`}
            >
              <span className="hidden sm:inline">Speaker Notes</span>
              <span className="sm:hidden">Notes</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas Area */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 relative bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950">
          {/* Header Banner */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white shadow-md">
                <IconComp className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/50">
                {current.tag}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {current.title}
            </h1>
            <p className="mt-1.5 text-sm sm:text-base text-emerald-200 font-medium">
              {current.subtitle}
            </p>
          </div>

          {/* Slide Content Grid */}
          <div className="my-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Main Content (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl text-stone-200 text-xs sm:text-sm leading-relaxed">
                {current.content.summary}
              </div>

              <div className="bg-stone-950/40 border border-stone-800/80 rounded-xl p-4 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Key Takeaways & Details
                </div>
                <ul className="space-y-2">
                  {current.content.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stat Callouts Grid (1 col) */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {current.content.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-stone-950/80 border border-emerald-900/40 p-3.5 rounded-xl flex flex-col justify-center"
                >
                  <div className="text-[11px] font-semibold text-stone-400">{stat.label}</div>
                  <div className="text-sm sm:text-lg font-extrabold text-emerald-300 mt-0.5 truncate">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker Notes Drawer (Optional) */}
          {showNotes && (
            <div className="mb-4 p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs text-amber-200/90 font-mono">
              <strong className="text-amber-400 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                🎙️ Speaker Notes:
              </strong>
              {current.content.speakerNotes}
            </div>
          )}

          {/* Progress Bar & Slide Thumbnails Navigation */}
          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Slide Dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-7 bg-emerald-400' 
                      : 'w-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                  title={`Go to Slide ${s.id}: ${s.tag}`}
                />
              ))}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
                disabled={currentSlide === 0}
                className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors cursor-pointer shadow-sm"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
