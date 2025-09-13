import React from 'react';
// Fix: Added `Variants` to the import to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

const educationData = [
    {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "SJM Institute of Technology",
        period: "Nov '21 — May '25",
        location: "Chitradurga, India",
        score: "CGPA: 8.4"
    },
    {
        degree: "PUC in PCMB",
        institution: "SRS PUC College",
        period: "May '19 — Jul '21",
        location: "Challakere, India",
        score: "Percentage: 83.16"
    },
    {
        degree: "SSLC",
        institution: "Aadharsha Vidyalaya",
        period: "Jun '18 — Apr '19",
        location: "Challakere, India",
        score: "Percentage: 89.12"
    }
];

// A cleaner, more modern timeline node icon
const TimelineNodeIcon: React.FC = () => (
    <div className="z-10 flex items-center order-1 bg-light dark:bg-dark w-8 h-8 rounded-full border-4 border-primary shadow-lg">
        <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
    </div>
);

// Card component with details and styling
const EducationCard: React.FC<{ item: typeof educationData[0] }> = ({ item }) => (
    <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 border-l-4 border-primary/50">
        <p className="text-md text-primary font-semibold">{item.score}</p>
        <h3 className="mb-1 font-bold text-dark dark:text-white text-xl leading-tight">{item.degree}</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-light-secondary">{item.institution}, {item.location}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.period}</p>
    </div>
);


const Education: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <section id="education" className="py-20 bg-light-secondary dark:bg-dark-secondary scroll-mt-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-primary">Education</h2>
                <div className="relative wrap overflow-hidden p-10 h-full max-w-4xl mx-auto">
                    {/* Vertical Timeline Bar */}
                    <div className="absolute border-2-2 border-opacity-20 border-gray-300 dark:border-gray-700 h-full border hidden md:block" style={{ left: '50%' }}></div>
                    
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-8"
                    >
                        {educationData.map((item, index) => {
                            const isRight = index % 2 === 0;
                            // Fix: Explicitly typed `itemVariants` with `Variants` to resolve the type error with the `ease` property.
                            const itemVariants: Variants = {
                                hidden: { opacity: 0, x: isRight ? 100 : -100 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                            };

                            const timelineItemContent = (
                                <motion.div 
                                    variants={itemVariants} 
                                    className="order-1 w-full md:w-5/12"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <EducationCard item={item} />
                                </motion.div>
                            );

                            return (
                                <div key={index} className="flex md:justify-between flex-row-reverse md:flex-row items-center w-full">
                                    {isRight ? (
                                        <>
                                            <div className="order-1 md:w-5/12 hidden md:block" /> {/* Spacer */}
                                            <TimelineNodeIcon />
                                            {timelineItemContent}
                                        </>
                                    ) : (
                                        <>
                                            {timelineItemContent}
                                            <TimelineNodeIcon />
                                            <div className="order-1 md:w-5/12 hidden md:block" /> {/* Spacer */}
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;