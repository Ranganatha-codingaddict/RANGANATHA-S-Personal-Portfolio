import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="home" className="min-h-screen flex items-center bg-light dark:bg-dark pt-24 md:pt-0">
            <div className="container mx-auto px-6">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="md:w-1/2 text-center md:text-left" variants={itemVariants}>
                        <h1 className="text-4xl md:text-6xl font-bold text-dark dark:text-white mb-2">Ranganatha S</h1>
                        <h2 className="text-2xl md:text-3xl text-primary mb-4">Full Stack Developer</h2>
                        <p className="text-lg text-gray-600 dark:text-light-secondary mb-6 max-w-xl mx-auto md:mx-0">
                           Passionate Full Stack Developer with expertise in Java and Spring Boot, and proficiency in Front-end technologies for building dynamic, scalable, and user-friendly web applications. Strong in problem-solving, DSA, and eager to contribute innovative solutions in modern software development.
                        </p>
                         <div className="flex flex-col items-center md:items-start gap-4 mb-8">
                           <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-gray-600 dark:text-light-secondary text-sm">
                               <span>📞 +91 9019368681</span>
                               <span className="hidden sm:inline">|</span>
                               <span>📧 ranganathas9696@gmail.com</span>
                                <span className="hidden sm:inline">|</span>
                               <span>📍 Bengaluru, India</span>
                           </div>
                           <div className="flex items-center space-x-4">
                               <a href="https://linkedin.com/in/ranganathas9696" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-light-secondary hover:text-primary transition-colors duration-300">
                                   <LinkedInIcon />
                                   <span>LinkedIn</span>
                               </a>
                               <a href="https://github.com/Ranganatha-codingaddict" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-light-secondary hover:text-primary transition-colors duration-300">
                                   <GitHubIcon />
                                   <span>GitHub</span>
                               </a>
                                <a href="https://ranganathas-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-light-secondary hover:text-primary transition-colors duration-300">
                                   <PortfolioIcon />
                                   <span>Portfolio</span>
                               </a>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <motion.a 
                                href="#resume"
                                onClick={(e) => handleSmoothScroll(e, '#resume')}
                                className="bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                View Resume
                            </motion.a>
                            <motion.a 
                                href="#contact" 
                                onClick={(e) => handleSmoothScroll(e, '#contact')}
                                className="bg-gray-200 dark:bg-dark-secondary text-dark dark:text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div className="md:w-1/3" variants={itemVariants}>
                        <img 
                            src="https://image2url.com/images/1757750962461-114775c3-cc7f-4618-b825-6335fcc84d0e.jpg"
                            alt="Profile photo of Ranganatha S" 
                            className="rounded-full border-4 border-primary shadow-lg object-cover w-64 h-64 md:w-96 md:h-96"
                            width="384"
                            height="384"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

// SVG Icons
const LinkedInIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GitHubIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const PortfolioIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;

export default Hero;