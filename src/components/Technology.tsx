import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Technology() {
    const techs = [
        {
            title: "Core Technology",
            features: [
                "Advanced LLM processing for deep context",
                "Real-time sentiment analysis",
                "Pattern recognition for spiral detection",
                "Adaptive questioning algorithms",
                "Secure, encrypted data handling"
            ]
        },
        {
            title: "Intelligent Context Management",
            features: [
                "Remembers your previous spirals",
                "Connects dots between different worries",
                "Identifies recurring triggers",
                "Adapts tone to your stress level"
            ]
        },
        {
            title: "Built-in Safety Systems",
            features: [
                "Crisis detection and resource routing",
                "Grounding techniques integration",
                "Bias awareness and mitigation",
                "Privacy-first architecture"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        The Technology
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        (The nerd stuff that makes it work)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techs.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                {tech.title}
                            </h3>
                            <ul className="space-y-4">
                                {tech.features.map((feature, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
