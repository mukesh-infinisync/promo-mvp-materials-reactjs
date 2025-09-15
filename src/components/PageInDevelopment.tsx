import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface PageInDevelopmentProps {
  path: string;
}

export const PageInDevelopment: React.FC<PageInDevelopmentProps> = ({ path }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-8 max-w-lg mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated Icon */}
      <motion.div
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Wrench size={100} className="text-blue-600 drop-shadow-lg" />
      </motion.div>

      <h1 className="text-3xl font-bold text-blue-800 mt-6">
        {path} Page In Development
      </h1>
      <p className="text-blue-600 mt-2 text-lg">
        We’re working hard to bring this page to life 🚀
      </p>

      {/* Go Home Button */}
      <Link to="/" className="mt-6">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:cursor-pointer">
          Go to Homepage
        </Button>
      </Link>
    </motion.div>
  );
};
