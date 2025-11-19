import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UseCases() {
    const cases = [
        "Your thoughts feel like a browser with 100 tabs open",
        "You're stuck in a loop of 'what if' scenarios",
        "You need clarity instantly, not in 3 days",
        "You want to structure your thoughts without judgment",
        "You've tried journaling but it feels like homework",
        "You need actionable steps, not just venting"
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        you can't replace us when...
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        (We've checked everywhere)
                    </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                    <div className="grid gap-6">
                        {cases.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start space-x-4"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-accent-hover" strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
