import React from 'react';
import { motion, Variants } from 'framer-motion';

const metrics = [
    { value: '3+', label: 'Internships' },
    { value: '2+', label: 'Projects Completed' },
];

const About: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="py-24 bg-light-secondary dark:bg-dark-secondary scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-2xl rounded-2xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        <motion.div variants={itemVariants} className="md:col-span-2 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">About Me</h2>
                            <p className="text-gray-600 dark:text-light-secondary mb-4 leading-relaxed">
                                Aspiring Full Stack Developer with expertise in Java and database systems, eager to craft dynamic and scalable web solutions. Passionate about problem-solving and writing clean, efficient, and optimized code.
                            </p>
                            <p className="text-gray-600 dark:text-light-secondary mb-8 leading-relaxed">
                                Quick learner, highly adaptable to new technologies, and committed to continuous innovation in the ever-evolving tech landscape.
                            </p>
                             <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start">
                                <div>
                                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-2">Languages Known</h4>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-light-secondary">
                                        <li>Kannada</li>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Telugu</li>
                                    </ul>
                                </div>
                                 <motion.a 
                                    href="https://pdf.ac/Xap7YurO2" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-primary self-center text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40" 
                                    whileHover={{ scale: 1.05 }} 
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Resume
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="md:col-span-1 flex flex-col items-center gap-8">
                            {metrics.map((metric) => (
                                <div key={metric.label} className="text-center bg-light/50 dark:bg-dark/50 p-6 rounded-xl w-48 shadow-lg">
                                    <p className="text-4xl font-bold text-primary">{metric.value}</p>
                                    <p className="text-gray-600 dark:text-light-secondary">{metric.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;