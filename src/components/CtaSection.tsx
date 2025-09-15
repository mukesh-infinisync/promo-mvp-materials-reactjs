import { motion } from "framer-motion";
import { Button } from "./ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-[#0F2C5C] text-white py-20 px-8 lg:px-40 text-center font-poppins">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-3xl mx-auto">
        <img src="/assets/images/eco-trace-prime.png" alt="Eco Trace Prime" className="mx-auto w-48" />
        <h2 className="text-3xl font-bold">Explore Our Enterprise Traceability Solutions</h2>
        <p className="text-lg">
          Leverage our blockchain Platform to manage the traceability and compliance of your own supply chain
        </p>
        <Button className="bg-[#4CAF50] text-white px-10 py-3 hover:bg-[#43a047]">
          Request Callback
        </Button>
      </motion.div>
    </section>
  );
};

export default CtaSection;
