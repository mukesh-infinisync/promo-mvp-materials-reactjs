export const MATERIALS = [
  {
    id: 1,
    title: 'NMC Black Mass',
    subtitle: 'Battery Recycling Powder',
    country: 'Japan',
    metrics: ["500 kg big bags", "NiSO4"],
    tags: ['Compliant', 'Certified', 'Traceable'],
    image: '/assets/images/nmc-black-mass.png'
  },
  {
    id: 2,
    title: 'Lithium Carbonate',
    subtitle: 'Lithium Carbonate (Li2CO3)',
    country: 'Japan',
    metrics: ['500 kg big bags', '17.2% Ni', '12.9% Co'],
    tags: ['Compliant', 'Certified', 'Traceable'],
    image: '/assets/images/lithium-carbonate.png'
  },
  {
    id: 3,
    title: 'Nickel Sulphate',
    subtitle: 'Battery-Grade Nickel Sulphate powder (NiSO4)',
    country: 'Japan',
    metrics: ["500 kg big bags", "NiSO4"],
    tags: ['Compliant', 'Certified', 'Traceable'],
    image: '/assets/images/nickel-sulphate.png'
  },
  {
    id: 4,
    title: 'Cobalt Sulphate',
    subtitle: 'Industrial Grade Cobalt powder Crystal',
    country: 'Japan',
    metrics: ['500 kg big bags', '17.2% Ni', '12.9% Co'],
    tags: ['Compliant', 'Certified', 'Traceable'],
    image: '/assets/images/cobalt-sulphate.png'
  }
];

export const ALL_MATERIALS = [
  {
    id: 1,
    title: "NMC Black Mass",
    subtitle: "Lithium Carbonate",
    country: "Japan",
    metrics: ["50 kg big bags", "17.2% Ni, 18.5% Co"],
    tags: ["Compliant", "Certified", "Traceable"],
    image: "/materials/nmc-black.png",
  },
  {
    id: 2,
    title: "NMC Black Mass",
    subtitle: "Lithium Carbonate",
    country: "Germany",
    metrics: ["100 kg drums", "22% Ni, 15% Co"],
    tags: ["Compliant", "Certified", "Traceable"],
    image: "/materials/nmc-black.png",
  },
  {
    id: 3,
    title: "Lithium Carbonate",
    subtitle: "Battery Grade",
    country: "China",
    metrics: ["25 kg bags", "99.5% purity"],
    tags: ["Compliant", "Certified"],
    image: "/materials/lithium.png",
  },
  {
    id: 4,
    title: "Cobalt Sulphate",
    subtitle: "Refined Grade",
    country: "USA",
    metrics: ["50 kg drums", "20.3% Co"],
    tags: ["Certified", "Traceable"],
    image: "/materials/cobalt.png",
  },
  {
    id: 5,
    title: "Nickel Sulphate",
    subtitle: "Battery Grade",
    country: "India",
    metrics: ["200 kg barrels", "21% Ni"],
    tags: ["Compliant", "Traceable"],
    image: "/materials/nickel.png",
  },
  {
    id: 6,
    title: "Black Mass",
    subtitle: "Mixed Scrap",
    country: "UK",
    metrics: ["500 kg big bags", "Mixed metals"],
    tags: ["Compliant"],
    image: "/materials/blackmass.png",
  },
  // 🔥 Duplicate with variations for giant list
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: 7 + i,
    title: "NMC Black Mass",
    subtitle: "Lithium Carbonate",
    country: i % 2 === 0 ? "Japan" : "Germany",
    metrics: ["50 kg big bags", `${16 + i % 3}% Ni, ${18 + i % 2}% Co`],
    tags: ["Compliant", "Certified", "Traceable"],
    image: "/materials/nmc-black.png",
  })),
];

export const PRODUCT_DETAIL = {
  id: "123456789",
  title: "NMC Black Mass",
  supplier: "Certified Supplier",
  code: "Black Mass ID: 123456789",
  origin: "Japan",
  weight: "1T - 25T",
  metrics: "Ni: 17.2%, Co: 18.5%, Li: 4.1%",
  critical: "Cu: 1.2%, Fe: 12.3%, Cd/Pb/Hg < 0.002%",
  rating: 5,
  tags: ["EU-Ready", "Low Carbon", "Blockchain Verified"],
  blockchainRecords: {
    scrapCollector: "Japan, China",
    recycler: "XYZ Company",
    batteryUse: "XYZ Company",
  },
}

export const SUPPLIER_PRODUCTS = [
  {
    id: "#232451",
    updatedOn: "15/05/2025",
    name: "NMC Black Mass",
    image: "/assets/products/nmc.png",
  },
  {
    id: "#232452",
    updatedOn: "15/05/2025",
    name: "Lithium",
    image: "/assets/products/lithium.png",
  },
  {
    id: "#232453",
    updatedOn: "15/05/2025",
    name: "Cobalt",
    image: "/assets/products/cobalt.png",
  },
  {
    id: "#232454",
    updatedOn: "15/05/2025",
    name: "Nickel",
    image: "/assets/products/nickel.png",
  },
];