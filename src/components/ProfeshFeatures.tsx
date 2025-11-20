import { motion } from 'framer-motion';

export default function ProfeshFeatures() {
    const features = [
        {
            title: "100 Hours of Research",
            description: "Built on deep psychological frameworks like CBT, ACT, and Decision Theory. We know our stuff."
        },
        {
            title: "Backed by Mental Health Professionals",
            description: "Vetted by psychologists and licensed therapists. It's not just code, it's care."
        },
        {
            title: "We've been in that spiral",
            description: "Created by overthinkers, for overthinkers. We know exactly how it feels to be stuck."
        },
        {
            title: "Not just venting, Solving",
            description: "Most tools let you vent. We help you solve. There's a big difference."
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        We're highkey profesh in the way we do things.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-t border-gray-200 dark:border-gray-700 pt-6"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 sm:mt-8 mx-auto block px-6 py-2 bg-[#72FCCB] text-black font-bold rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base shadow-sm"
                >
                    Finally!
                </motion.button>
            </div>
        </section>
    );
}
