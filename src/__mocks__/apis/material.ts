interface MaterialCardProps {
    id: number;
    title: string;
    subtitle: string;
    metrics: string[];
    tags: string[];
    image: string;
    country: string;
}

export const fetchMaterials = (): Promise<MaterialCardProps[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "NMC Black Mass",
          subtitle: "Lithium Carbonate",
          country: "Japan",
          metrics: ["50 kg big bags", "17.2% Ni, 18.5% Co"],
          tags: ["Compliant", "Certified", "Traceable"],
          image: '@/assets/images/battery-material.png',
        },
        {
          id: 2,
          title: "Lithium Carbonate",
          subtitle: "Battery Grade",
          country: "India",
          metrics: ["25 kg bags", "99.5% purity"],
          tags: ["Compliant", "Certified"],
          image: '@/assets/images/battery-material.png',
        },
        {
          id: 3,
          title: "Cobalt Sulphate",
          subtitle: "Refined Grade",
          country: "USA",
          metrics: ["50 kg drums", "20.3% Co"],
          tags: ["Certified", "Traceable"],
          image: "/materials/cobalt.png",
        },
        // 🔥 extend mock data
        ...Array.from({ length: 15 }).map((_, i) => ({
          id: 4 + i,
          title: "NMC Black Mass",
          subtitle: "Lithium Carbonate",
          country: i % 2 === 0 ? "Germany" : "Japan",
          metrics: ["50 kg big bags", `${17 + i % 3}% Ni, ${18 + i % 2}% Co`],
          tags: ["Compliant", "Certified", "Traceable"],
          image: '@/assets/images/',
        })),
      ]);
    }, 1500) // simulate API delay
  );
