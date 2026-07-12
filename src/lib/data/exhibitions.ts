export type Exhibition = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  statistics: {
    label: string;
    value: string;
  }[];
  theme: {
    accent: string;
    background: string;
  };
};

export const exhibitions: Exhibition[] = [
  {
    id: "aerolink-transit",
    number: "01",
    title: "AEROLINK TRANSIT",
    subtitle: "Public transport without roads.",
    description: "By 2050, autonomous electric air vehicles connect cities through intelligent aerial corridors, reducing road congestion and shortening long-distance urban travel.",
    features: [
      "Autonomous flight navigation",
      "Electric propulsion",
      "Shared aerial routes",
      "Vertical landing stations",
      "AI traffic coordination",
      "Emergency landing systems"
    ],
    statistics: [
      { label: "Average speed", value: "320 km/h" },
      { label: "Passenger capacity", value: "18" },
      { label: "Emissions", value: "Near zero" },
      { label: "Avg city journey", value: "11 min" }
    ],
    theme: {
      accent: "#39E7FF",
      background: "#07111F"
    }
  },
  {
    id: "sentient-care",
    number: "02",
    title: "SENTIENT CARE NETWORK",
    subtitle: "Healthcare that detects problems before symptoms appear.",
    description: "AI hospitals combine predictive diagnostics, robotic assistance, digital patient twins, and personalized treatment systems to deliver faster and more precise healthcare.",
    features: [
      "Predictive health monitoring",
      "AI-assisted diagnosis",
      "Robotic surgery support",
      "Digital patient twins",
      "Automated emergency prioritization",
      "Personalized medicine planning"
    ],
    statistics: [
      { label: "Diagnostic analysis", value: "< 30s" },
      { label: "Detection improvement", value: "74%" },
      { label: "Automated routines", value: "61%" },
      { label: "Network availability", value: "24/7" }
    ],
    theme: {
      accent: "#9A6BFF",
      background: "#0A0614"
    }
  },
  {
    id: "neural-city",
    number: "03",
    title: "NEURAL CITY OS",
    subtitle: "A city that listens, learns, and responds.",
    description: "Cities in 2050 use connected intelligence to manage transport, energy, water, emergency services, waste, public spaces, and environmental conditions in real time.",
    features: [
      "Adaptive traffic systems",
      "Self-balancing energy grids",
      "Intelligent public infrastructure",
      "Automated waste collection",
      "Environmental monitoring",
      "Predictive maintenance",
      "Responsive public spaces"
    ],
    statistics: [
      { label: "Energy efficiency", value: "+43%" },
      { label: "Traffic delay reduction", value: "68%" },
      { label: "Water recycling rate", value: "82%" },
      { label: "Monitoring points", value: "9.4M" }
    ],
    theme: {
      accent: "#65F5B5",
      background: "#05110B"
    }
  },
  {
    id: "orbital-haven",
    number: "04",
    title: "ORBITAL HAVEN",
    subtitle: "The first hotel above the Earth.",
    description: "Commercial orbital hotels allow visitors to experience low gravity, panoramic views of Earth, orbital research, and luxury hospitality beyond the atmosphere.",
    features: [
      "Artificial gravity zones",
      "Earth observation lounges",
      "Zero-gravity recreation",
      "Orbital laboratories",
      "Radiation-protected accommodation",
      "Autonomous docking systems"
    ],
    statistics: [
      { label: "Orbit altitude", value: "420 km" },
      { label: "Guest capacity", value: "260" },
      { label: "Earth orbits/day", value: "15" },
      { label: "Average stay", value: "5 nights" }
    ],
    theme: {
      accent: "#FFB86B",
      background: "#140A03"
    }
  },
  {
    id: "abyssal-harvest",
    number: "05",
    title: "ABYSSAL HARVEST",
    subtitle: "Farming systems built beneath the waves.",
    description: "Autonomous ocean farms produce food using underwater agriculture, algae cultivation, marine monitoring, renewable energy, and closed-loop resource systems.",
    features: [
      "Underwater crop environments",
      "Autonomous harvesting robots",
      "Algae-based food production",
      "Ocean condition monitoring",
      "Renewable tidal power",
      "Closed-loop water systems"
    ],
    statistics: [
      { label: "Food production/area", value: "6x" },
      { label: "Freshwater demand", value: "-91%" },
      { label: "Autonomous operation", value: "87%" },
      { label: "Renewable energy", value: "76%" }
    ],
    theme: {
      accent: "#5271FF",
      background: "#04091A"
    }
  }
];
