import React from 'react';
import frameImg from '../assets/frame.png';
import { motion } from 'framer-motion';
import { redirectToApp } from '../helpers/helpers';

const FrameSection: React.FC = () => {
    return (
        <section className="relative w-full flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-2xl">
                {/* Frame Image */}
                <img
                    src={frameImg}
                    alt="Frame"
                    className="w-full h-auto select-none pointer-events-none"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-[15%] sm:p-[12%]">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                        You need this when
                    </h2>

                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-tight">
                        <p>therapy? is lowkey slow...</p>
                        <p>White noise? is just bad house music</p>
                        <p>Meditation? there's no time</p>
                        <p>Journaling? is just chaotic</p>
                        <p>GPT? Hella annoying</p>
                        <p>your friends? just cant anymore</p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}                        
                        onClick={redirectToApp}
                        className="mt-6 sm:mt-8 px-6 py-2 bg-[#72FCCB] text-black font-bold rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base shadow-sm"
                    >
                        Lets do it
                    </motion.button>

                </div>
            </div>
        </section>
    );
};

export default FrameSection;
