import React from 'react';
import { motion, Variants } from 'framer-motion';

const RESUME_URL = 'https://pdf.ac/Xap7YurO2';

const resumeData = {
    objective: "Passionate Full Stack Developer with expertise in Java and Spring Boot, and proficiency in Front-end technologies for building dynamic, scalable, and user-friendly web applications. Strong in problem-solving, DSA, and eager to contribute innovative solutions in modern software development.",
    experience: [
        {
            role: "Java Full Stack Intern, at Codegnan Destination",
            duration: "Mar 25 — Present",
            location: "Bengaluru, India",
            points: [
                "Applied core Java principles and developed RESTful APIs using Spring Boot, contributing to a microservices-based architecture.",
                "Collaborated on building a responsive front-end with ReactJS, managing state and consuming APIs for a seamless user experience.",
                "Engaged in database design and management with MySQL, writing optimized queries and ensuring data integrity.",
                "Practiced Agile methodologies, participating in daily stand-ups and sprint planning to enhance team collaboration."
            ]
        },
        {
            role: "AI & ML Intern, at Rooman Technologies",
            duration: "Oct '24 — Feb '25",
            location: "Chitradurga, India",
            points: [
                "Engineered and deployed lightweight, scalable RESTful APIs using Flask to serve real-time Natural Language Processing (NLP) models.",
                "Executed comprehensive data pipelines, including preprocessing, cleaning, and feature engineering to prepare datasets for model training.",
                "Performed rigorous model evaluation and hyperparameter tuning to optimize performance and accuracy for NLP tasks."
            ]
        },
        {
            role: "AI & ML Intern at Technologies Global Pvt Ltd.",
            duration: "Oct '23 — Nov '23",
            location: "Bengaluru, India",
            points: [
                "Developed and fine-tuned machine learning models for predictive analytics and business process automation.",
                "Implemented and deployed end-to-end AI solutions that integrated both NLP for text analysis and computer vision for image recognition.",
                "Achieved a 25% improvement in model accuracy through advanced feature engineering, data augmentation, and algorithm selection."
            ]
        }
    ],
    projects: [
        {
            title: "Interactive AI Portfolio Website",
            link: "https://ai.studio/apps/drive/1-Ec4Y1Xm_1X3DIivGr0ELAPfah9kRsDY",
            duration: "Aug '25 - Present",
            points: [
                "Developed this dynamic, single-page portfolio website using AI Studio, showcasing skills and projects.",
                "Built with React, Tailwind CSS, and Framer Motion, featuring a clean, responsive UI, smooth animations, and real-time project filtering.",
                "Demonstrates modern frontend development practices and UI/UX design principles."
            ]
        },
        {
            title: "E-Notes: A Spring Boot-Based Digital Notebook",
            link: "https://github.com/Ranganatha-codingaddict/Enotes-Spring-Boot-Project.git",
            duration: "Jun '24 — Oct '24",
            points: [
                "E-Notes is a Spring Boot-based note-taking Web Application with RESTful Web Services, leveraging J2EE, MySQL and Spring Security for secure authentication.",
                "Ensured code reliability through JUnit testing, Agile development, while integrating Microservices, Web Services.",
                "Designed a dynamic and responsive UI using Bootstrap, HTML, CSS, and JavaScript, ensuring seamless integration of future AI New Features like AI-powered summarization and speech-to-text."
            ]
        },
        {
            title: "AI Powered Freelancing and Skill Enhancement",
            link: "https://github.com/Ranganatha-codingaddict/Ai-Powered-Freelancer-Platform.git",
            duration: "Feb '25 — May '25",
            points: [
                "Developed a Full Stack Web Application using Spring Boot, React.js, and SQL to connect freelancers with job opportunities and upskilling resources.",
                "Integrated AI-driven job matching, resume analysis, and skill recommendations.",
                "Implemented role-based access control (RBAC) with JWT authentication, OAuth, and Spring Security."
            ]
        }
    ],
    skills: {
        "Programming Languages": "Java (OOPs, Collection Framework, Java 8+ Features, Multithreading), C/C++, JavaScript, SQL",
        "Frameworks": "JDBC, Hibernate, Spring (Core, MVC, JDBC, DI/IOC), Spring Boot.",
        "Web Development": "HTML, CSS, Java Servlets, RESTful Web Services.",
        "Core Concepts": "Data Structure & Algorithms, Object-Oriented Programming, DBMS, SDLC.",
        "Technologies & Platforms": "MySQL, Maven.",
        "Development Environment": "Visual Studio Code, IntelliJ IDEA, Eclipse IDE, STS, Version Control Systems (Git/GitHub).",
        "Soft Skills": "Teamwork, Communication Skills, Leadership, Analytical Skills.",
        "Languages": "Kannada, English, Hindi, Telugu."
    },
    education: [
        { details: "Bachelor of Engineering in Computer Science, SJM Institute of Technology (CGPA: 8.4)", duration: "Nov '21 — May '25" },
        { details: "PUC in PCMB, SRS PUC College (Percentage: 83.16)", duration: "May '19 — Jul '21" },
        { details: "SSLC in, Aadharsha Vidyalaya (Percentage: 89.12)", duration: "Jun '18 — Apr '19" },
    ],
    certifications: [
        { name: "Java (Basic) Advanced Skills Certification", provider: "HackerRank" },
        { name: "Spring Boot 3, Spring 6, Hibernate", provider: "Udemy" },
        { name: "Python & SQL", provider: "CoachED" },
        { name: "AI - Machine Learning Engineer", provider: "Rooman Technologies" },
        { name: "AI&ML Internship Certificate", provider: "Technologics Global Pvt ltd." },
        { name: "Advanced Software Engineering Job Simulation", provider: "Walmart Forage" },
        { name: "API Beginner Learning Path - Completion Certificate", provider: "Postman Academy" },
    ]
};


// Fix: Explicitly added `children` to the props type. With modern React types, `React.FC`
// no longer implicitly includes the `children` prop, so it must be defined.
const ResumeSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-primary border-b-2 border-primary/30 pb-2 mb-4">{title}</h3>
        <div className="text-gray-700 dark:text-light-secondary space-y-4">
            {children}
        </div>
    </div>
);

const Resume: React.FC = () => {
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };

    return (
        <section id="resume" className="py-20 bg-light-secondary dark:bg-dark scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="max-w-4xl mx-auto bg-white dark:bg-dark-secondary rounded-lg shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-extrabold text-dark dark:text-white">Ranganatha S</h1>
                            <p className="text-lg text-gray-600 dark:text-light-secondary">Full Stack Developer</p>
                            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                <a href="tel:+919019368681" className="hover:text-primary">+91 9019368681</a>
                                <span>&bull;</span>
                                <a href="mailto:ranganathas9696@gmail.com" className="hover:text-primary">ranganathas9696@gmail.com</a>
                                <span>&bull;</span>
                                <a href="https://linkedin.com/in/ranganathas9696" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
                                <span>&bull;</span>
                                <a href="https://github.com/Ranganatha-codingaddict" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
                            </div>
                        </div>

                        {/* Objective */}
                        <ResumeSection title="Objective">
                            <p>{resumeData.objective}</p>
                        </ResumeSection>

                        {/* Experience */}
                        <ResumeSection title="Experience">
                            {resumeData.experience.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-dark dark:text-white">{item.role}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-right flex-shrink-0 ml-4">{item.duration}<br/>{item.location}</p>
                                    </div>
                                    <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                                        {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </ResumeSection>
                        
                        {/* Academic Projects */}
                        <ResumeSection title="Academic Projects">
                            {resumeData.projects.map((item, index) => (
                                <div key={index} className="mb-4">
                                     <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-dark dark:text-white">
                                            {item.title} 
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm ml-2">[Link]</a>
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-right flex-shrink-0 ml-4">{item.duration}</p>
                                    </div>
                                    <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                                        {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </ResumeSection>

                         {/* Skills */}
                        <ResumeSection title="Skills">
                           <div className="space-y-2 text-sm">
                                {Object.entries(resumeData.skills).map(([category, skills]) => (
                                    <div key={category} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                                        <strong className="md:col-span-1 text-dark dark:text-white">{category}:</strong>
                                        <p className="md:col-span-3">{skills}</p>
                                    </div>
                                ))}
                           </div>
                        </ResumeSection>

                         {/* Education */}
                        <ResumeSection title="Education">
                            {resumeData.education.map((item, index) => (
                                <div key={index} className="flex justify-between items-center text-sm">
                                    <p>{item.details}</p>
                                    <p className="text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">{item.duration}</p>
                                </div>
                            ))}
                        </ResumeSection>

                        {/* Certifications */}
                         <ResumeSection title="Certifications">
                            <ul className="list-disc list-inside text-sm space-y-1">
                                {resumeData.certifications.map((cert, index) => (
                                    <li key={index}>{cert.name} – <span className="font-semibold">{cert.provider}</span></li>
                                ))}
                            </ul>
                        </ResumeSection>
                    </div>

                    <div className="text-center mt-8">
                        <motion.a 
                            href={RESUME_URL}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40" 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                        >
                            View Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;