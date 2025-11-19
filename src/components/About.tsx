import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-tight">
                        HEY. WE'VE BEEN WHERE YOU ARE.
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        <p>
                            We built this because we know what it's like to be paralyzed by your own thoughts.
                        </p>
                        <p>
                            We know the 3 AM panic, the decision fatigue, and the exhaustion of trying to solve everything at once.
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white pt-4">
                            To fix a chaotic mind, you need structured thoughts. Not more noise.
                        </p>
                    </div>

                    <div className="mt-12 space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <p>Not to fix you. You aren't broken.</p>
                        <p>Not to make you positive. That's toxic and you smell it.</p>
                        <p>But to empower the action. To move you.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
