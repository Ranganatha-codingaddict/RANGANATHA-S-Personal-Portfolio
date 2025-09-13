import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internships = [
    {
        role: "Java Full Stack Intern",
        company: "Codegnan Destination",
        duration: "Mar '25 – Present",
        location: "Bengaluru, India",
        points: [
            "Applied core Java principles and developed RESTful APIs using Spring Boot, contributing to a microservices-based architecture.",
            "Collaborated on building a responsive front-end with ReactJS, managing state and consuming APIs for a seamless user experience.",
            "Engaged in database design and management with MySQL, writing optimized queries and ensuring data integrity.",
            "Practiced Agile methodologies, participating in daily stand-ups and sprint planning to enhance team collaboration."
        ]
    },
    {
        role: "AI & ML Intern",
        company: "Rooman Technologies",
        duration: "Oct '24 — Feb '25",
        location: "Chitradurga, India",
        points: [
            "Engineered and deployed lightweight, scalable RESTful APIs using Flask to serve real-time Natural Language Processing (NLP) models.",
            "Executed comprehensive data pipelines, including preprocessing, cleaning, and feature engineering to prepare datasets for model training.",
            "Performed rigorous model evaluation and hyperparameter tuning to optimize performance and accuracy for NLP tasks."
        ]
    },
    {
        role: "AI & ML Intern",
        company: "Technologies Global Pvt Ltd.",
        duration: "Oct '23 — Nov '23",
        location: "Bengaluru, India",
        points: [
            "Developed and fine-tuned machine learning models for predictive analytics and business process automation.",
            "Implemented and deployed end-to-end AI solutions that integrated both NLP for text analysis and computer vision for image recognition.",
            "Achieved a 25% improvement in model accuracy through advanced feature engineering, data augmentation, and algorithm selection."
        ]
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const InternshipItem: React.FC<{ item: typeof internships[0], index: number, expandedIndex: number | null, setExpandedIndex: (index: number | null) => void }> = ({ item, index, expandedIndex, setExpandedIndex }) => {
    const isExpanded = index === expandedIndex;

    return (
        <motion.div
            variants={itemVariants}
            className="w-full"
        >
            <motion.div 
              layout
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.1)" }}
            >
                <motion.div layout="position" className="flex flex-col sm:flex-row justify-between sm:items-start mb-3">
                    <div className="mb-2 sm:mb-0">
                        <h3 className="font-bold text-dark dark:text-white text-xl">{item.role}</h3>
                        <p className="text-md font-medium leading-snug tracking-wide text-gray-600 dark:text-light-secondary">{item.company}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                        <p className="text-sm text-primary font-semibold">{item.duration}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {isExpanded && (
                         <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                         >
                            <ul className="list-disc list-inside text-gray-600 dark:text-light-secondary space-y-1 text-sm mt-4">
                                {item.points.map((point, index) => <li key={index}>{point}</li>)}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};


const Internship: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    
    return (
        <section id="internship" className="py-20 bg-light dark:bg-dark scroll-mt-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h2>
                <motion.div
                    className="max-w-4xl mx-auto flex flex-col gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {internships.map((item, index) => (
                        <InternshipItem item={item} key={index} index={index} expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Internship;