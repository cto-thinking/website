import React from 'react';
import { motion } from 'framer-motion';
import stampImg from '../assets/stamp.png';

const LetterSection: React.FC = () => {
    return (
        <div className="w-full max-w-[90rem] mx-auto p-2 md:p-4 my-2 md:my-4 flex items-center justify-center min-h-[70vh]">
            {/* Airmail Border Container */}
            <div
                className="relative bg-white p-6 md:p-8 shadow-2xl w-full"
                style={{
                    backgroundImage: `repeating-linear-gradient(
    135deg,
            #72FCCB 0px,
            #72FCCB 65px,
            #FFFFFF 65px,
            #FFFFFF 120px,
            #9CA3AF 120px,
            #9CA3AF 175px,
            #FFFFFF 175px,
            #FFFFFF 230px
)`
                }}
            >
                {/* Inner Content */}
                <div className="bg-white p-6 md:p-10 relative mx-auto h-full flex flex-col justify-between">

                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-2 md:mb-2">
                        <div className="font-handwritten text-xl md:text-2xl space-y-2 tracking-wide w-1/3">
                            <div className="border-b-2 border-gray-200 pb-1 pr-8">
                                <span className="text-gray-400 text-lg">TO:</span> THE OVERTHINKER
                            </div>
                            <div className="border-b-2 border-gray-200 pb-1 pr-8">
                                <span className="text-gray-400 text-lg">FROM:</span> THE HEART
                            </div>
                        </div>

                        {/* Stamp */}
                        <div className="absolute top-0 right-0 transform rotate-6 -mt-2 -mr-2 md:mt-0 md:mr-0 pointer-events-none">
                            <img
                                src={stampImg}
                                alt="Stamp"
                                className="w-48 md:w-80 object-contain opacity-90 drop-shadow-md"
                            />
                        </div>
                    </div>

                    {/* Body Text */}
                    <div className="font-handwritten mt-8 text-lg md:text-2xl leading-snug space-y-1.5 text-gray-800 max-w-6xl uppercase tracking-wide text-left">
                        <p>LISTEN, WE GET IT.</p>
                        <p>THE 3AM SPIRALS. THE DECISIONS YOU CAN'T MAKE. THE DAYS YOUR BRAIN WON'T STOP.</p>
                        <p>WE TRIED EVERYTHING—NOTHING GAVE US CLARITY. SO WE BUILT IT.</p>
                        <p>NOT TO FIX YOU. BUT TO GIVE YOUR THOUGHTS STRUCTURE.</p>
                        <p>YOU'RE NOT BROKEN. THE CHAOS JUST NEEDS ORGANIZATION.</p>
                        <p>IMOVERTHINKING.COM EXISTS BECAUSE WE GOT TIRED OF BEING STUCK.</p>
                        <p>TIRED OF TOOLS THAT DIDN'T GET IT.</p>
                        <p>SO WE BUILT WHAT WAS MISSING. FOR US. FOR YOU. FOR EVERYONE WHOSE BRAIN RUNS LIKE OURS.</p>
                        <p className="pt-2 font-bold">YOUR SPIRAL HAS STRUCTURE NOW. LET'S FIND IT.</p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 md:mt-10 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent hover:bg-accent-hover text-black font-bold py-3 px-10 rounded-full shadow-lg text-xl"
                        >
                            Dive in!
                        </motion.button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LetterSection;
