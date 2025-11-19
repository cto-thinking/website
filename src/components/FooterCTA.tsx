import { motion } from 'framer-motion';

interface FooterCTAProps {
    onGetStarted: () => void;
}

export default function FooterCTA({ onGetStarted }: FooterCTAProps) {
    return (
        <section className="py-24 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        "Your thoughts aren't the problem, chaos is."
                    </h2>

                    <div className="h-px w-24 bg-gray-700 mx-auto my-12"></div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to get out of your head?
                    </h3>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        Stop analyzing. Start living. It takes 30 seconds to start.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onGetStarted}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
