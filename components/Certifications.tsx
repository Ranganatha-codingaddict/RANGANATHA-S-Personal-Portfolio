import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    { name: "Java (Basic) Advanced Skills Certification", provider: "HackerRank", url: "https://www.hackerrank.com/certificates/83de9f5869fa" },
    { name: "Spring Boot 3, Spring 6, Hibernate", provider: "Udemy", url: "#" },
    { name: "Python & SQL", provider: "CoachED", url: "#" },
    { name: "AI - Machine Learning Engineer", provider: "Rooman Technologies", url: "#" },
    { name: "AI&ML Internship Certificate", provider: "Technologics Global Pvt ltd.", url: "#" },
    { name: "Advanced Software Engineering Job Simulation", provider: "Walmart Forage", url: "#" },
    { name: "API Beginner Learning Path - Completion Certificate", provider: "Postman Academy", url: "https://verify.skilljar.com/c/2zy6kfsn52xz" }
];

const Certifications: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="certifications" className="py-20 bg-light dark:bg-dark scroll-mt-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">Certifications</h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.3)" }}
                        >
                             <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             <h3 className="text-lg font-semibold text-dark dark:text-white flex-grow">{cert.name}</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-400 my-2">{cert.provider}</p>
                             <a href={cert.url} target="_blank" rel="noopener noreferrer" className={`mt-auto text-sm text-primary hover:underline flex items-center whitespace-nowrap ${cert.url === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                View Credential
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;