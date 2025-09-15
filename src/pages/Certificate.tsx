import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import LogoBg from "@/assets/icons/logo-bg.svg";
import LogoTitle from "@/assets/icons/logo-title.svg";
import LogoText from "@/assets/icons/logo-name.svg";
import QrCodeSvg from '@/assets/icons/qr-code.svg';
import EcoPrimeImg from '@/assets/images/eco-prime.png';
import { CollectionSvg, RecycleSvg, } from "@/assets";
import Breadcrumb from "@/components/common/Breadcrumb";

const breadcrumbItems = [
    { name: 'Order History', href: "/buyer/order-history" },
    { name: "Product Certificate", href: '/buyer/certificate' }
]

export default function CertificatePage() {
    const propertiesLeft = [
        { label: "NICKEL", value: "21.6%" },
        { label: "COBALT", value: "16.3%" },
        { label: "MANGANESE", value: "5.9%" },
        { label: "LITHIUM", value: "4.1%" },
        { label: "CADMIUM", value: "<0.002%" },
        { label: "LEAD", value: "<0.002%" },
        { label: "MOISTURE", value: "<1.05%" },
    ];

    const propertiesRight = [
        { label: "SUPPLIER", value: "RECYCLE 21, OSAKA JAPAN" },
        { label: "BATTERY TYPE", value: "PHONE, LAPTOP" },
        { label: "COLLECTION DATE", value: "10 Aug 2025" },
        { label: "RECYCLE METHOD", value: "SHREDDING, AIR & MAG. SEP" },
        { label: "POWER USAGE/CO2", value: "1.2 KW, CO2 23 GMS" },
        { label: "SHIPMENT", value: "OSAKA – HK, BL-ECOT25JP-HK" },
        { label: "REFINING", value: "ACHELOUS PURE METAL HK" },
    ];

    const getImgPath = (item: string) => {
        if(item === 'Collection') return CollectionSvg;
        else if (item === 'Recycle') return RecycleSvg;
        else if (item === 'Shipping') return CollectionSvg;
        else return RecycleSvg;
    }

    return (
        <>
        <Breadcrumb items={breadcrumbItems} />
        <div className="min-h-screen font-[Poppins] mt-5">
            <div className="relative max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

                {/* Header */}
                <header className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6">
                    <div className="flex items-center gap-4">
                        <div className="relative inline-block w-[220px] md:w-[307px] h-[70px]">
                            <img
                                src={LogoBg}
                                alt="Logo Background"
                                className="hidden xl:inline-block absolute top-0 left-0"
                            />

                            <img
                                src={LogoTitle}
                                alt="Logo Title"
                                className="left-[40px] top-[15px] absolute md:top-[10px] md:left-[10px]"
                            />

                            <img
                                src={LogoText}
                                alt="Logo Name"
                                className="hidden xl:inline-block md:absolute md:top-[14px] md:right-[30px]"
                            />

                        </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <img src={EcoPrimeImg} alt="Eco" className="h-10 mt-2 ml-auto" />
                        <p className="text-sm font-semibold text-[#0F2C5C]">13 Aug 2025</p>
                    </div>
                </header>

                {/* Title */}
                <div className="text-center px-6 md:px-10 mb-8 relative z-10">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                        Ecotrace Blockchain Certified Material
                    </p>
                    <h1 className="mt-2 text-xl md:text-2xl font-bold text-gray-800">
                        Certificate ID:{" "}
                        <span className="text-[#164B88]">ET-JP-NMC-25T-2301</span>
                    </h1>
                </div>

                {/* Core Product Data */}
                <section className="px-6 md:px-10 mb-8 relative z-10">
                    <div className="rounded-lg overflow-hidden shadow-inner">
                        <div className="flex justify-between items-center bg-[#0F2C5C] text-white text-sm font-semibold px-5 py-3">
                            <span>CORE PRODUCT DATA</span>
                            <span>BATCH: JP-BM-Ni85-0825</span>
                        </div>
                        <div className="bg-white px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-xs uppercase text-gray-500">Product</p>
                                <p className="font-semibold text-gray-800">
                                    NMC Black Mass (High Ni & Co)
                                </p>
                            </div>
                            <div>
                                <p className="text-xs uppercase text-gray-500">Quantity</p>
                                <p className="font-semibold text-gray-800">25 Metric Tons</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Properties & Source */}
                <section className="px-6 md:px-10 mb-8 relative z-10">
                    <div className="bg-[#164B88] text-white px-5 py-3 font-semibold text-sm rounded-t-lg">
                        PROPERTIES & SOURCE:
                    </div>
                    <div className="grid md:grid-cols-2 border border-gray-200 divide-y md:divide-y-0 md:divide-x">
                        {/* Left */}
                        <div>
                            {propertiesLeft.map((p, i) => (
                                <div
                                    key={p.label}
                                    className={`flex justify-between items-center px-6 py-3 text-sm ${i % 2 === 1 ? "bg-[#FBFCFE]" : "bg-white"
                                        }`}
                                >
                                    <span className="font-semibold text-gray-800">{p.label}</span>
                                    <span className="text-gray-700">{p.value}</span>
                                </div>
                            ))}
                        </div>
                        {/* Right */}
                        <div>
                            {propertiesRight.map((p, i) => (
                                <div
                                    key={p.label}
                                    className={`flex justify-between items-center px-6 py-3 text-sm ${i % 2 === 1 ? "bg-[#FBFCFE]" : "bg-white"
                                        }`}
                                >
                                    <span className="font-semibold text-gray-800">{p.label}</span>
                                    <span className="text-gray-700 text-right max-w-[60%]">
                                        {p.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Traceability */}
                <section className="px-6 md:px-10 mb-12 relative z-10">
                    <h3 className="text-lg font-bold text-center mb-6">
                        Blockchain Custody Traceability
                    </h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                        <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-dotted" />
                        {["Collection", "Recycle", "Shipping", "Manufacturing"].map(
                            (step, i) => (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex flex-col items-center text-center w-32"
                                >
                                    <div className="w-[60px] h-[60px] rounded-[20px] bg-[#3272C0] flex items-center justify-center shadow-md mb-2">
                                        <img
                                            src={getImgPath(step)}
                                            alt={step}
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-800">{step}</p>
                                    <p className="text-xs text-gray-500">Location: Osaka</p>
                                </motion.div>
                            )
                        )}
                    </div>
                </section>

                {/* Verified Block */}
                <section className="px-6 md:px-10 mb-12 relative z-10 flex flex-col md:flex-row gap-6">
                    <div className="bg-[#164B88] text-white rounded-lg p-6 flex-1">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Live blockchain custody trails</li>
                            <li>ESG & Compliance documents</li>
                            <li>Original invoices</li>
                            <li>Lab testing reports</li>
                            <li>Photos and videos</li>
                            <li>Sensor data</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center w-full md:w-80">
                        <img src={QrCodeSvg} alt="QR" className="w-40 h-40" />
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            Hash: c32a12b (Hyperledger Fabric)
                        </p>
                        <div className="w-full mt-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            disabled
                                            className="w-full bg-[#164B88] text-white cursor-not-allowed"
                                        >
                                            Download Document
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" align="center">
                                        Coming Soon
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </section>

                {/* Compliance */}
                <section className="px-6 md:px-10 mb-12 relative z-10 text-center">
                    <h4 className="text-lg font-bold mb-4">EU Compliance & Quality</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Blockchain Traceability", "Certified Quality", "Compliance & ESG"].map(
                            (item) => (
                                <div
                                    key={item}
                                    className="px-6 py-2 bg-white border border-gray-200 shadow-sm rounded-md text-sm font-medium"
                                >
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 md:px-10 mb-8 relative z-10 text-center">
                    <h5 className="text-base font-semibold mb-3">PRODUCT CYCLE</h5>
                    <Button className="bg-[#164B88] text-white px-8 py-2 hover:bg-[#0F2C5C]">
                        Track your product cycle
                    </Button>
                </section>

                {/* Footer */}
                <footer className="bg-[#F3F8FF] text-center text-xs text-gray-600 border-t border-gray-200 py-4">
                    <p>This digitally signed certificate is tamper-proof.</p>
                    <p>Verify at: verify.mvpmaterials.com • compliance@mvpmaterials.com</p>
                </footer>
            </div>
        </div>
        </>
    );
}
