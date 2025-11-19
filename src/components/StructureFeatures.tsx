import { motion } from 'framer-motion';
import { Brain, Layout, Clock, Zap } from 'lucide-react';

export default function StructureFeatures() {
    const features = [
        {
            icon: Brain,
            title: "Not just 'How's that feel?'",
            description: "We don't just listen. We actively structure your chaos into clear, manageable pieces."
        },
        {
            icon: Layout,
            title: "Structure, Not Fluff",
            description: "Get frameworks, not just validation. We turn spirals into straight lines."
        },
        {
            icon: Clock,
            title: "Your 24/7 Clarity",
            description: "When the panic hits at 3 AM, we're here. No appointments, no waiting rooms."
        },
        {
            icon: Zap,
            title: "No Blank Page",
            description: "We guide you through. You don't have to know where to start, just start."
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Structure, not conversation.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        We respect the Overthink. We just don't let you stay in it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
