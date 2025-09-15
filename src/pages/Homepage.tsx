import { MATERIALS } from "@/__mocks__/materials";
import Footer from "@/components/common/Footer";
import MaterialCard from "@/components/common/MaterialCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BlockchainTracebilityImg from '@/assets/images/blockchain-tracebility.png';
import CertifiedQualityImg from '@/assets/images/certified-quality.png';
import ComplianceandEsgImg from '@/assets/images/compliance-and-esg.png';
import RecycleImg from '@/assets/images/recycle.png';
import RecycleArrowImg from '@/assets/images/recycle-arrow.png';
import { AuthProtectedButton } from "@/components/common/AuthProtectedButton";

const HomePage: React.FC = () => {

    const onClickHandler = () => {
        console.log("clicked");
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section
                className="relative text-white px-4 sm:px-6 lg:px-10 flex justify-center items-center 
                        min-h-[300px] md:min-h-[400px] lg:h-[425px] 
                        bg-[url('/src/assets/images/hero-bg.png')] bg-no-repeat bg-cover bg-[position:center_right] border-t-2 border-t-[#164B88]"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(269.67deg,rgba(0,52,179,0)_0.28%,#002C98_55.58%,#00164D_95.59%)]" />

                {/* Your existing content wrapper stays unchanged */}
                <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[120px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2 text-center lg:text-left"
                    >
                        <h1 className="text-3xl sm:text-5xl lg:text-[5rem] font-medium leading-tight">
                            MVP Materials:
                        </h1>
                        <div className="flex flex-col gap-1">
                            <p className="text-base sm:text-xl lg:text-[2.2rem] font-medium">
                                Blockchain-powered platform for
                            </p>
                            <p className="text-base sm:text-xl lg:text-[2.2rem] font-mcedium">
                                traceable, compliant battery materials
                            </p>
                        </div>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3 text-left text-sm sm:text-base lg:text-lg"
                    >
                        <li className="flex items-center gap-2 sm:gap-4">
                            <img src={BlockchainTracebilityImg} alt="Blockchain Traceability" className="w-6 sm:w-8 lg:w-10" />
                            <span className="text-lg sm:text-xl lg:text-[2.2rem] font-semibold">Blockchain Traceability</span>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-4">
                            <img src={CertifiedQualityImg} alt="Certified Quality" className="w-6 sm:w-8 lg:w-10" />
                            <span className="text-lg sm:text-xl lg:text-[2.2rem] font-semibold">Certified Quality</span>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-4">
                            <img src={ComplianceandEsgImg} alt="Compliance & ESG" className="w-6 sm:w-8 lg:w-10" />
                            <span className="text-lg sm:text-xl lg:text-[2.2rem] font-semibold">Compliance & ESG</span>
                        </li>
                    </motion.ul>
                </div>
            </section>



            {/* Explore Materials */}
            <section className="py-8 px-4 sm:px-6 lg:px-10">
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#164B88] my-5 mb-10 text-center">
                    Explore Our Battery Materials
                </h2>
                <div className="w-full max-w-[650px] lg:max-w-[1350px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-[70px]">
                        {MATERIALS.map((m) => (
                            <MaterialCard key={m.id} material={m} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <AuthProtectedButton onClick={onClickHandler}>
                        <Button className="bg-[#164B88] border-1 border-[#DEDEDE] lg:-[46px] text-white px-8 sm:px-16 lg:px-[150px] py-3 hover:bg-[#164B88] text-base sm:text-lg font-semibold rounded-md">
                            View All Listing
                        </Button>
                    </AuthProtectedButton>
                </div>
            </section>

            {/* Enterprise Traceability Section */}
            <section className="relative text-white bg-[url('/src/assets/images/cta-bg.png')] bg-cover bg-center py-16 px-4 sm:px-6 lg:px-10">
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#164B88A6]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 w-full flex flex-col items-center text-center gap-8 max-w-5xl mx-auto"
                >
                    {/* Icon / Image */}
                    <div className="relative flex items-center justify-center">
                        <img
                            src={RecycleArrowImg}
                            alt="Reduce Reuse Recycle"
                            className="absolute w-10 sm:w-12 lg:w-[55px] left-0 top-[-2px]"
                        />
                        <img
                            src={RecycleImg}
                            alt="Eco Trace Prime"
                            className="w-24 sm:w-32 lg:w-40"
                        />
                    </div>

                    {/* Text */}
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold">
                            Explore Our Enterprise Traceability Solutions
                        </h2>
                        <div>
                            <p className="text-base sm:text-lg lg:text-2xl font-medium">
                                Leverage our blockchain platform to manage traceability and compliance
                            </p>
                            <p className="text-base sm:text-lg lg:text-2xl font-medium">
                                of your supply chain
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <AuthProtectedButton onClick={onClickHandler}>
                        <Button className="bg-[#60B244] border-1 border-white lg:h-[56px] text-white text-sm sm:text-lg lg:text-xl font-semibold px-8 sm:px-12 lg:px-[60px] py-3 lg:py-4 rounded-md hover:bg-[#4fa137]">
                            Request Callback
                        </Button>
                    </AuthProtectedButton>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
