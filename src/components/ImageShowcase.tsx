import { motion } from 'framer-motion';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import appleIcon from '../assets/apple.svg';
import playIcon from '../assets/play.svg';

const ImageShowcase = () => {
    const images = [p2, p1, p3];

    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience the App
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Beautifully designed to help you untangle your thoughts.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                        {/* App Store Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group px-6 py-3 bg-black text-white rounded-xl flex items-center gap-3 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white opacity-10 rotate-45 transform group-hover:translate-y-2 transition-transform duration-500" />

                            <img src={appleIcon} alt="Apple Logo" className="w-8 h-8 relative z-10" />
                            <div className="text-left relative z-10">
                                <div className="text-[10px] uppercase tracking-wider opacity-80">Coming Soon on</div>
                                <div className="text-lg font-bold leading-none">App Store</div>
                            </div>
                        </motion.button>

                        {/* Play Store Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group px-6 py-3 bg-black text-white rounded-xl flex items-center gap-3 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white opacity-10 rotate-45 transform group-hover:translate-y-2 transition-transform duration-500" />

                            <img src={playIcon} alt="Google Play Logo" className="w-7 h-7 relative z-10" />
                            <div className="text-left relative z-10">
                                <div className="text-[10px] uppercase tracking-wider opacity-80">Coming Soon on</div>
                                <div className="text-lg font-bold leading-none">Google Play</div>
                            </div>
                        </motion.button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-3 md:gap-12 items-center" style={{ perspective: '2000px' }}>
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100, rotateX: 10, rotateY: index === 0 ? 15 : index === 2 ? -15 : 0, rotateZ: 0 }}
                            whileInView={{
                                opacity: 1,
                                y: index === 1 ? -40 : 40, // Middle image moves up, sides move down
                                rotateX: 5,
                                rotateY: index === 0 ? 5 : index === 2 ? -5 : 0,
                                rotateZ: 0
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            whileHover={{
                                y: -20,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1.05,
                                transition: { duration: 0.4 }
                            }}
                            className="relative group transform-gpu"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Colored shadow behind the image */}
                            <div
                                className="absolute inset-4 rounded-[2.5rem] blur-2xl -z-10 transition-opacity duration-500"
                                style={{
                                    background: index === 0 ? '#FF6B6B' : index === 1 ? '#4ECDC4' : '#FFD93D',
                                    opacity: 0.4,
                                    transform: 'translateZ(-20px) translateY(20px)'
                                }}
                            />

                            <img
                                src={img}
                                alt={`App screenshot ${index + 1}`}
                                className="relative w-full h-auto"
                                style={{ backfaceVisibility: 'hidden' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageShowcase;
