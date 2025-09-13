import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = {
    "Programming Languages": [
        { name: "Java (OOPs, Collections, Java 8+, Multithreading)", icon: "☕", proficiency: 95 },
        { name: "JavaScript", icon: "📜", proficiency: 80 },
        { name: "TypeScript", icon: "🔷", proficiency: 80 },
        { name: "C/C++", icon: "🔧", proficiency: 70 },
        { name: "SQL", icon: "🗃️", proficiency: 90 }
    ],
    "Frameworks": [
        { name: "Spring (Core, MVC, DI/IOC)", icon: "🌱", proficiency: 90 },
        { name: "Spring Boot", icon: "🚀", proficiency: 90 },
        { name: "Spring Data JPA", icon: "💾", proficiency: 85 },
        { name: "Hibernate", icon: "🍂", proficiency: 85 },
        { name: "JDBC", icon: "🔗", proficiency: 85 },
        { name: "React.js", icon: "⚛️", proficiency: 85 },
        { name: "JWT Auth", icon: "🔒", proficiency: 80 },
    ],
    "Web Development": [
        { name: "HTML", icon: "🌐", proficiency: 95 },
        { name: "CSS", icon: "🎨", proficiency: 90 },
        { name: "TailwindCSS", icon: "💨", proficiency: 85 },
        { name: "Java Servlets", icon: "⚙️", proficiency: 80 },
        { name: "RESTful Web Services", icon: "🔄", proficiency: 90 }
    ],
    "Core Concepts": [
        { name: "Data Structures & Algorithms", icon: "📊", proficiency: 90 },
        { name: "Object-Oriented Programming", icon: "🧩", proficiency: 95 },
        { name: "DBMS", icon: "💾", proficiency: 85 },
        { name: "SDLC", icon: "🔄", proficiency: 80 },
        { name: "Microservices", icon: "🧱", proficiency: 85 },
    ],
    "Technologies & Platforms": [
        { name: "MySQL", icon: "🐬", proficiency: 90 },
        { name: "Maven", icon: "📦", proficiency: 80 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 75 },
        { name: "Docker", icon: "🐳", proficiency: 80 },
        { name: "AWS", icon: "☁️", proficiency: 75 },
        { name: "Node.js", icon: "🟢", proficiency: 75 },
        { name: "Gemini AI API", icon: "💎", proficiency: 80 },
    ],
    "Development Environment": [
        { name: "Visual Studio Code", icon: "💻", proficiency: 95 },
        { name: "IntelliJ IDEA", icon: "💡", proficiency: 90 },
        { name: "Eclipse IDE", icon: "🌙", proficiency: 85 },
        { name: "STS", icon: "🛠️", proficiency: 85 },
        { name: "Vite", icon: "⚡", proficiency: 85 },
        { name: "Version Control (Git/GitHub)", icon: "🐙", proficiency: 90 },
        { name: "Postman", icon: "📬", proficiency: 85 },
        { name: "MongoDB Compass", icon: "🍃", proficiency: 70 },
        { name: "PyCharm", icon: "🐍", proficiency: 80 },
        { name: "Command Line", icon: "⌨️", proficiency: 85 },
    ],
    "Soft Skills": [
        { name: "Teamwork", icon: "🤝", proficiency: 95 },
        { name: "Communication Skills", icon: "🗣️", proficiency: 90 },
        { name: "Leadership", icon: "👥", proficiency: 85 },
        { name: "Analytical Skills", icon: "🧠", proficiency: 90 },
        { name: "Problem-Solving", icon: "💡", proficiency: 95 },
    ]
};

interface Skill {
    name: string;
    icon: string;
    proficiency: number;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            variants={cardVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white dark:bg-dark-secondary p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-lg cursor-pointer min-h-[160px] transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/20"
        >
            <div className="text-4xl mb-3 transition-transform duration-300" style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)' }}>{skill.icon}</div>
            <span className="font-medium text-gray-600 dark:text-light-secondary text-sm transition-transform duration-300" style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)' }}>
                {skill.name}
            </span>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="w-full mt-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-sm font-bold text-primary">{skill.proficiency}%</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1 overflow-hidden">
                            <motion.div
                                className="bg-primary h-1.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-light dark:bg-dark scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills</h2>
                </motion.div>
                <div className="space-y-12">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-semibold text-center text-dark dark:text-white mb-6">{category}</h3>
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ staggerChildren: 0.05 }}
                            >
                                {skillList.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;