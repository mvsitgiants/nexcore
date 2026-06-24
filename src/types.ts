export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProductType {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  warranty: string;
}

export interface BrandType {
  name: string;
  logoText: string;
  description: string;
}

export interface IndustryType {
  id: string;
  title: string;
  desc: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'solar' | 'pump' | 'industrial' | 'all';
  desc: string;
}

export const PRODUCTS_DATA: ProductType[] = [
  {
    id: 'solar-panels',
    category: 'Solar Panels',
    title: 'High-Efficiency Monocrystalline Solar Panels',
    shortDesc: 'Next-generation solar modules designed for maximum sunlight conversion, durability, and standard weather resistance.',
    description: 'Our solar modules feature state-of-the-art PERC half-cell technology. Engineered to maximize power generation even in low-light and high-temperature conditions, they are perfect for residential rooftops, heavy industries, and solar-powered agricultural pump stations.',
    features: [
      'High conversion efficiency of up to 22.5%',
      'Anti-reflective, hydrophobic tempered glass with high light absorption',
      'Robust silver-anodized aluminum frame designed to withstand extreme wind and snow loads',
      'Excellent performance under low-light environments (cloudy days, dawn, and dusk)'
    ],
    specs: [
      { label: 'Cell Type', value: 'Monocrystalline PERC (Half-Cut)' },
      { label: 'Peak Power Range', value: '390W - 550W' },
      { label: 'Module Efficiency', value: 'Up to 22.5%' },
      { label: 'Temperature Coefficient', value: '-0.34% / °C' },
      { label: 'Max System Voltage', value: '1500V DC' }
    ],
    applications: [
      'Industrial and Commercial Rooftops',
      'On-grid & Off-grid Residential Solar Power Systems',
      'Solar Water Pumping and Irrigation Stations',
      'Utility-scale Solar Parks'
    ],
    warranty: '12-Year Product Warranty & 25-Year Linear Power Output Warranty'
  },
  {
    id: 'submersible-pumps',
    category: 'Submersible Pumps',
    title: 'Premium Heavy-Duty Submersible Motor Pumps',
    shortDesc: 'Corrosion-free stainless steel multistage borewell pumps engineered for flawless deep-well water delivery and longevity.',
    description: 'Designed to deliver high-volume water flow from deep borewells, our submersible motor pumps feature premium-grade stainless steel construction and energy-efficient water-filled motor windings. Suitable for agriculture, industrial processing, and high-rise drinking water supplies.',
    features: [
      'Corrosion and wear-resistant 100% premium stainless steel construction',
      'Sand-resistant floating impellers for reliable operation in sandy wells',
      'Heavy-duty copper-wound motors with integrated thermal overload protection',
      'Durable thrust bearings capable of handling extreme axial thrust loads'
    ],
    specs: [
      { label: 'Discharge Range', value: '10 - 1500 Liters per Minute (LPM)' },
      { label: 'Head Range', value: '15 - 450 Meters' },
      { label: 'Power Rating', value: '0.5 HP - 50 HP (0.37 kW - 37 kW)' },
      { label: 'Motor Voltage', value: 'Single Phase (160V-240V), Three Phase (350V-440V)' },
      { label: 'Outlet Connection', value: '25mm - 100mm (1" to 4")' }
    ],
    applications: [
      'Agricultural Irrigation & Sprinkler Systems',
      'Deep Borewell Water Extraction & Rural Distribution',
      'Industrial Process Water Supply and Booster Systems',
      'Civil/Domestic High-Rise Building Water Management'
    ],
    warranty: '2-Year Standard Manufacturer Warranty with Service Support'
  },
  {
    id: 'industrial-motors',
    category: 'Industrial Motors',
    title: 'High-Efficiency Three-Phase AC Induction Motors',
    shortDesc: 'Heavy-duty electric motors built to strict IE3 and IE4 efficiency standards for extreme industrial uptime.',
    description: 'Our industrial motors deliver continuous, heavy-duty performance across machinery, manufacturing units, and cooling plants. Engineered with premium cast-iron enclosures, F-class insulation, and precision dynamic balancing, they guarantee low noise, minimal vibration, and extreme energy savings.',
    features: [
      'IE3 Premium and IE4 Super-Premium energy efficiency standards',
      'Rugged cast iron body with high-grade rust protection finish',
      'Class F insulation with Class B temperature rise for thermal headroom',
      'IP55 ingress protection rating (dust-tight and water-jet proof)'
    ],
    specs: [
      { label: 'Output Power Range', value: '0.75 kW - 375 kW (1 HP to 500 HP)' },
      { label: 'Synchronous Speeds', value: '750 / 1000 / 1500 / 3000 RPM' },
      { label: 'Voltage Options', value: '415V ±10%, 50Hz (Custom wind available)' },
      { label: 'Frame Size range', value: '80 to 355 (Standard IEC mountings)' },
      { label: 'Mounting Types', value: 'Foot (B3), Flange (B5), Face (B14)' }
    ],
    applications: [
      'Industrial Pumps, Fans, and Exhaust Blowers',
      'Compressors, Crushers, and Heavy Mixing Machines',
      'Material Handling, Conveyors, and Crane Systems',
      'Chemical, Cement, and Steel Processing Units'
    ],
    warranty: '18-Month Comprehensive Performance Warranty'
  },
  {
    id: 'agricultural-pumps',
    category: 'Agricultural Pump Solutions',
    title: 'Smart Agricultural & Solar Water Pump Solutions',
    shortDesc: 'High-efficiency monoblock, openwell, and solar VFD-driven pumps optimized for persistent farming irrigation.',
    description: 'Specially engineered for the Indian agriculture sector, these pump solutions deliver powerful water volume even in low-voltage conditions. Compatible with Solar Variable Frequency Drives (VFD) for complete independence from traditional power grids and generator fuels.',
    features: [
      'Specifically optimized for wide voltage operation (160V to 440V)',
      'Compatible with Solar VFDs for direct solar panel powering',
      'Double-shielded ball bearings pre-lubricated for life-long maintenance-free use',
      'Cathodic electro-deposition (CED) coated cast iron parts to prevent rusting'
    ],
    specs: [
      { label: 'Types Available', value: 'Openwell Submersible, Centrifugal Monoblock, Solar DC/AC Pumps' },
      { label: 'Flow Rate Range', value: '5 - 120 Cubic Meters per Hour' },
      { label: 'Suction Lift', value: 'Up to 8 Meters (Centrifugal models)' },
      { label: 'VFD Compatibility', value: 'Fully compatible with 3HP - 30HP Solar VFD Inverters' },
      { label: 'Impeller Material', value: 'High-grade Bronze, Cast Iron, or Noryl' }
    ],
    applications: [
      'Flood Irrigation and Canal Water Lifting',
      'Drip and Micro-Sprinkler Irrigation Projects',
      'Dairy Farm Water Management & Animal Husbandry',
      'Community Drinking Water Tanks in Rural Sectors'
    ],
    warranty: '2-Year Trouble-Free Operation Warranty'
  }
];

export const BRANDS_DATA: BrandType[] = [
  { name: 'CRI', logoText: 'C.R.I. PUMPS', description: 'Global leaders in fluid management solutions.' },
  { name: 'Texmo', logoText: 'TEXMO Taro', description: 'Legendary brand for agricultural and domestic motors.' },
  { name: 'Kirloskar', logoText: 'Kirloskar Brothers', description: 'Enriching lives with top-tier industrial engineering.' },
  { name: 'Crompton', logoText: 'Crompton Greaves', description: 'Pioneers in high-efficiency consumer and heavy pumps.' },
  { name: 'V-Guard', logoText: 'V-GUARD', description: 'State-of-the-art solar and water pumping drives.' },
  { name: 'Shakti Pumps', logoText: 'SHAKTI PUMPS', description: 'Pioneers in advanced high-tech solar pumps.' },
  { name: 'Lubi', logoText: 'Lubi Pumps', description: 'Diverse range of engineering pumps and motors.' },
  { name: 'Havells', logoText: 'HAVELLS', description: 'World-class industrial switchgears, cables, and motors.' },
  { name: 'Oswal', logoText: 'OSWAL PUMPS', description: 'High efficiency solar panels and submersible units.' },
  { name: 'KSB', logoText: 'KSB Pumps', description: 'German technology customized for premium performance.' }
];

export const CHOOSE_US_DATA = [
  {
    title: '100% Genuine Products',
    desc: 'We source directly from leading global manufacturers, guaranteeing certified authentic equipment with serial tracking and official warranties.'
  },
  {
    title: 'Reliable Supply Chain',
    desc: 'With our strategic warehouses in Saket (Delhi) and Gonda (UP), we maintain a massive inventory to ensure rapid shipment and zero project delay.'
  },
  {
    title: 'Technical Expertise',
    desc: 'Our team comprises certified electrical and solar energy engineers ready to provide custom sizing, load analysis, and site design.'
  },
  {
    title: 'Customer Satisfaction',
    desc: 'Dedicated support system offering end-to-end help, prompt after-sales services, and replacement coverage for high-value machinery.'
  }
];

export const INDUSTRIES_DATA: IndustryType[] = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    desc: 'Powering micro-irrigation, deep well extraction, and organic farms with highly reliable and economical water pumping motors and grid-free solar solutions.',
    features: ['High-volume drip systems', 'Solar-powered pumps', 'Low-voltage tolerance']
  },
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Providing automatic domestic water booster pumps, smart pressure kits, and rooftop solar arrays that slash residential power bills by up to 90%.',
    features: ['Silent operation', 'Automated pressure control', 'Rooftop green energy']
  },
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'Delivering large-scale commercial solar solutions, office climate-control motors, and water supply grids for tech parks, hotels, and hospitals.',
    features: ['High energy yields', 'Commercial-grade durability', 'Optimal operational savings']
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    desc: 'Supplying heavy-duty IE3/IE4 standard induction motors, chemical-rated pumps, and high-voltage electrical distribution units for high-uptime factories.',
    features: ['Superb thermodynamic build', 'Continuous S1 duty rating', 'IP55/IP56 environmental sealing']
  },
  {
    id: 'water-management',
    title: 'Water Management',
    desc: 'Supplying municipalities, sewage treatment units, and water purification facilities with advanced flow-optimizing submersible and dry-mount pump systems.',
    features: ['Waste and sludge handling', 'Corrosion-proof materials', 'Constant discharge rates']
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    desc: 'Consulting, supplying, and commissioning off-grid and on-grid solar photovoltaic power systems to accelerate carbon neutrality for modern organizations.',
    features: ['Turnkey EPC services', 'Advanced solar tracking grid', 'Integrated storage ready']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Understand Requirements',
    description: 'We analyze your site data, required flow rates, well depth, and load requirements to establish a flawless technical base.'
  },
  {
    step: 2,
    title: 'Recommend Best Product',
    description: 'Our engineering specialists propose optimal brands and models tailored specifically for maximum efficiency, lifetime, and budget.'
  },
  {
    step: 3,
    title: 'Quick & Secure Delivery',
    description: 'Dispatched immediately from our Saket or Gonda warehouses in industry-approved protective crating with transit insurance.'
  },
  {
    step: 4,
    title: 'Professional Installation Support',
    description: 'We connect you with certified local engineers or guide your on-site technicians with detailed schematic plans for correct startup.'
  },
  {
    step: 5,
    title: 'After-Sales Service Network',
    description: 'Get continuous tech assistance, emergency troubleshooting, spare parts, and warranty handling through our rapid-reply team.'
  }
];

export const TESTIMONIALS_DATA: TestimonialType[] = [
  {
    id: 't1',
    name: 'Rajendra Prasad Verma',
    role: 'Director of Operations',
    company: 'Saryu Sugar Mills',
    rating: 5,
    text: 'We replaced five of our boiler feed pump motors with Nexcores high-efficiency industrial motors. The power savings have been clear and significant. Incredible professional support and rapid delivery.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    tag: 'Industrial Motor'
  },
  {
    id: 't2',
    name: 'Anjali Sharma',
    role: 'Chief Infrastructure Architect',
    company: 'Aravalli Greens Township',
    rating: 5,
    text: 'Establishing a solar water system for 300 residential villas was a breeze with Nexcores team. Their solar panels and Kirloskar booster pumps work in perfect synergy. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    tag: 'Solar Pumping'
  },
  {
    id: 't3',
    name: 'Harpal Singh',
    role: 'Managing Partner',
    company: 'Punjab Agro-Farms Private Limited',
    rating: 5,
    text: 'Our deep well submersibles are running beautifully on Nexcore Shakti solar pump setups. Running completely off-grid means zero electricity or diesel costs. Their expertise saved us lakhs.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
    tag: 'Agriculture'
  },
  {
    id: 't4',
    name: 'Vijay Kumar Mishra',
    role: 'Chief Electrical Contractor',
    company: 'VK Engineering Solutions',
    rating: 5,
    text: 'Nexcore is our primary engineering distributor. Their strict standard of sourcing only 100% genuine Texmo and CRI pumps is why our clients trust us. Their team provides unmatched cooperative assistance.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120&h=120',
    tag: 'Distribution'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'g1', title: '50kW Industrial Rooftop Solar', category: 'solar', desc: 'Installed at heavy textile machinery manufacturing facility, Gonda, UP.' },
  { id: 'g2', title: 'Deep Well Submersible Setup', category: 'pump', desc: '15 HP stainless steel submersible motor coupling, Saket warehouse.' },
  { id: 'g3', title: 'IE3 High Efficiency Motor Range', category: 'industrial', desc: 'Our active showroom displaying premium three-phase cast iron motors.' },
  { id: 'g4', title: 'Agricultural Solar Irrigation Station', category: 'solar', desc: '7.5 HP solar water pump with tracking grid commissioned in Haryana fields.' },
  { id: 'g5', title: 'Industrial Water Pressure Booster Grid', category: 'pump', desc: 'Multistage horizontal booster pump layout for a commercial software park.' },
  { id: 'g6', title: 'Heavy Duty Crane Drive Induction Motor', category: 'industrial', desc: 'Premium 110 kW slip-ring motor packaged for steel plant deployment.' }
];
