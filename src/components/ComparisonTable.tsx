import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparisonTable() {
    const features = [
        {
            name: "Structures chaotic thoughts",
            us: true,
            others: [false, false, true] // Therapy, Journaling, Friends
        },
        {
            name: "Available 24/7 instantly",
            us: true,
            others: [false, true, false]
        },
        {
            name: "Action-oriented output",
            us: true,
            others: [true, false, false]
        },
        {
            name: "Zero judgment",
            us: true,
            others: [true, true, false]
        },
        {
            name: "Cost effective",
            us: true,
            others: [false, true, true]
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Your thoughts aren't the problem. The chaos is...
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        and you have probably tried everything to control it...
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-700">
                                    <th className="py-6 px-6 text-left w-1/3">
                                        <span className="text-xl font-serif italic text-gray-400">How we compare</span>
                                    </th>
                                    <th className="py-6 px-4 text-center w-1/6">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-gray-900 dark:text-white">IMOVERTHINKN</span>
                                            <span className="text-xs text-accent mt-1 font-medium">AI Powered</span>
                                        </div>
                                    </th>
                                    <th className="py-6 px-4 text-center w-1/6 text-gray-500 dark:text-gray-400 font-medium">Therapy</th>
                                    <th className="py-6 px-4 text-center w-1/6 text-gray-500 dark:text-gray-400 font-medium">Journaling</th>
                                    <th className="py-6 px-4 text-center w-1/6 text-gray-500 dark:text-gray-400 font-medium">Friends</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, idx) => (
                                    <tr key={idx} className={idx !== features.length - 1 ? "border-b border-gray-50 dark:border-gray-700/50" : ""}>
                                        <td className="py-6 px-6 text-left">
                                            <span className="font-medium text-gray-900 dark:text-gray-200">{feature.name}</span>
                                        </td>
                                        <td className="py-6 px-4 text-center bg-accent/5 dark:bg-accent/10">
                                            <div className="flex justify-center">
                                                {feature.us ? (
                                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-sm">
                                                        <Check className="w-5 h-5 text-gray-900" strokeWidth={3} />
                                                    </div>
                                                ) : (
                                                    <X className="w-6 h-6 text-gray-300" />
                                                )}
                                            </div>
                                        </td>
                                        {feature.others.map((val, i) => (
                                            <td key={i} className="py-6 px-4 text-center">
                                                <div className="flex justify-center">
                                                    {val ? (
                                                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                                                        </div>
                                                    ) : (
                                                        <div className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                                            <X className="w-3 h-3 text-gray-300 dark:text-gray-600" />
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <div className="mt-12 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-accent text-gray-900 font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
                    >
                        I need this yesterday
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
