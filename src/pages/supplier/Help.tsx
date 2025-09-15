import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HelpPage: React.FC = () => {
    return (
        <div className="w-full justify-between flex flex-col items-center">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mb-16"
            >
                <div className="flex justify-center mb-6">
                    <HelpCircle className="w-16 h-16 text-[#164B88]" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Need Help with Your Supplier Account?
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We’re here to support you at every step of your buying journey.
                    Whether you’re looking to understand product details, track your
                    orders, or request a quote — our help center has you covered.
                </p>
            </motion.div>

            {/* Help Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {[
                    {
                        icon: <MessageSquare className="w-12 h-12 text-[#164B88]" />,
                        title: "Live Chat",
                        desc: "Talk to our support team instantly for order assistance.",
                        action: "Start Chat",
                    },
                    {
                        icon: <Mail className="w-12 h-12 text-[#164B88]" />,
                        title: "Email Support",
                        desc: "Send us your queries and we’ll respond within 24 hours.",
                        action: "Send Email",
                    },
                    {
                        icon: <HelpCircle className="w-12 h-12 text-[#164B88]" />,
                        title: "FAQs",
                        desc: "Find quick answers to the most common buyer questions.",
                        action: "View FAQs",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-4">{item.desc}</p>
                        <Button className="bg-[#164B88] hover:bg-[#0e3970] text-white rounded-lg">
                            {item.action}
                        </Button>
                    </motion.div>
                ))}
            </div>

            {/* FAQ Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-20 max-w-4xl w-full"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {[
                        {
                            q: "How can I track my orders?",
                            a: "Go to your account dashboard and click on ‘Order History’. You’ll find live updates about your shipments.",
                        },
                        {
                            q: "What if I want to request a custom quote?",
                            a: "On the product details page, click ‘Request Quote’ and provide your required quantity and shipping details.",
                        },
                        {
                            q: "How do I change my delivery address?",
                            a: "Navigate to your profile settings, select ‘Delivery Address’, and update your shipping details.",
                        },
                    ].map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow p-5"
                        >
                            <p className="font-semibold text-gray-800 mb-2">{faq.q}</p>
                            <p className="text-gray-600">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default HelpPage;
