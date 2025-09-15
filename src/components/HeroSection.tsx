import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#0F2C5C] text-white pt-24 pb-16 px-8 lg:px-40 font-poppins">
      <div className="max-w-[1728px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">MVP Materials:</h1>
          <p className="text-xl max-w-xl">
            Blockchain-powered platform for traceable, compliant battery materials
          </p>
        </motion.div>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-lg font-medium">
          <li>🔗 Blockchain Traceability</li>
          <li>✅ Certified Quality</li>
          <li>⚖️ Compliance & ESG</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default HeroSection;
