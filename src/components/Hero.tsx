import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import ot1 from '../assets/ot1.png';
import ot2 from '../assets/ot2.png';
import ot3 from '../assets/ot3.png';
import ot4 from '../assets/ot4.png';

interface HeroProps {
    onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Untangle your thought spirals. For real this time.
                    </h1>

                    <div className="my-12 flex justify-center items-center gap-4 md:gap-8 overflow-x-auto px-4">
                        <img src={ot1} alt="Overthinking illustration 1" className="h-32 md:h-40 w-auto object-contain" />
                        <img src={ot2} alt="Overthinking illustration 2" className="h-32 md:h-40 w-auto object-contain" />
                        <img src={ot3} alt="Overthinking illustration 3" className="h-32 md:h-40 w-auto object-contain" />
                        <img src={ot4} alt="Overthinking illustration 4" className="h-32 md:h-40 w-auto object-contain" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        We get it.
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                        For when your brain feels like a browser with 100 tabs open. Structure your spiralling thoughts into clarity.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onGetStarted}
                        className="inline-flex items-center px-8 py-4 text-lg font-bold text-gray-900 bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
                    >
                        Start Unspiraling
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Background decorative elements - Removed as per user request for pure white background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                {/* Blobs removed */}
            </div>
        </section>
    );
}
