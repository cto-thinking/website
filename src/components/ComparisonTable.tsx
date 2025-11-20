import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparisonTable() {
    const features = [
        {
            name: "Structures Thoughts",
            description: "Organizes chaos into clarity, not just captures or calms",
            us: "check",
            others: ["neutral", "cross", "cross"] // Therapy, Meditation, Journaling
        },
        {
            name: "Respects YOUR Thoughts",
            description: "No advice - Just frameworks for YOUR thinking",
            us: "check",
            others: ["check", "cross", "neutral"]
        },
        {
            name: "Psychology-Backed",
            description: "Uses real clinical frameworks (CBT/DBT/Chain Analysis)",
            us: "check",
            others: ["check", "neutral", "cross"]
        },
        {
            name: "Decision-Focused",
            description: "Helps you actually decide, not just process or relax",
            us: "check",
            others: ["neutral", "cross", "cross"]
        },
        {
            name: "Time",
            description: "Available right now when spiraling, not weeks away",
            us: "check",
            others: ["cross", "check", "check"]
        },
        {
            name: "Adapts to You",
            description: "Learns your patterns and personalizes frameworks",
            us: "check",
            others: ["check", "cross", "cross"]
        }
    ];

    const renderStatus = (status: string) => {
        if (status === "check") {
            return (
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent flex items-center justify-center shadow-sm mx-auto">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-900" strokeWidth={3} />
                </div>
            );
        } else if (status === "neutral") {
            return (
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 dark:bg-purple-900/50 flex items-center justify-center mx-auto">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-400 dark:bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
                </div>
            );
        } else {
            return (
                <X className="w-6 h-6 md:w-8 md:h-8 text-red-400/50 mx-auto" />
            );
        }
    };

    return (
        <section className="py-4 md:py-8 relative min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 w-full">
                <div className="text-center mb-4 md:mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Cause your thoughts aren't the problem. The chaos is...
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                        and you have probably tried everything to control it...
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px]">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-700">
                                    <th className="py-3 px-4 text-left w-[35%]">
                                    </th>
                                    <th className="py-3 px-2 text-center w-[16%]">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base">Imoverthinking</span>
                                            <span className="text-xs text-accent mt-1 font-medium">AI Powered</span>
                                        </div>
                                    </th>
                                    <th className="py-3 px-2 text-center w-[16%] text-gray-500 dark:text-gray-400 font-medium text-sm md:text-base">Therapy</th>
                                    <th className="py-3 px-2 text-center w-[17%] text-gray-500 dark:text-gray-400 font-medium text-sm md:text-base">Meditation/White Noise Apps</th>
                                    <th className="py-3 px-2 text-center w-[16%] text-gray-500 dark:text-gray-400 font-medium text-sm md:text-base">Journaling</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, idx) => (
                                    <tr key={idx} className={idx !== features.length - 1 ? "border-b border-gray-50 dark:border-gray-700/50" : ""}>
                                        <td className="py-2 md:py-3 px-4 text-left">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 dark:text-gray-200 text-sm md:text-base">{feature.name}</span>
                                                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 italic mt-0.5">{feature.description}</span>
                                            </div>
                                        </td>
                                        <td className="py-2 md:py-3 px-2 text-center bg-accent/5 dark:bg-accent/10">
                                            {renderStatus(feature.us)}
                                        </td>
                                        {feature.others.map((val, i) => (
                                            <td key={i} className="py-2 md:py-3 px-2 text-center">
                                                {renderStatus(val)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <div className="mt-6 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 rounded-full bg-accent text-gray-900 font-bold text-base md:text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
                    >
                        I need this yesterday
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
