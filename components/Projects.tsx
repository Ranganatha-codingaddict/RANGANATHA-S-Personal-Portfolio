import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';


const projects = [
    {
        title: "🛒 E-Commerce Web Application",
        date: "2024",
        description: "A scalable Java Full Stack E-Commerce Web Application built using React (Vite) for the frontend and Spring Boot + Spring Data JPA for the backend. Designed with clean architecture, role-based access, and seamless PostgreSQL integration.",
        tags: ["React (Vite)", "TailwindCSS", "Spring Boot", "Spring Data JPA", "JWT Auth", "PostgreSQL"],
        imageUrls: [
            "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://github.com/Ranganatha-codingaddict/E-Commerce-WebApp",
        link: "#"
    },
    {
        title: "🤖 Gemini AI Chatbot",
        date: "2025",
        description: "A fully functional AI-powered chatbot built using Gemini AI, Spring Boot, and ReactJS — developed as a solo project. Real-time conversations powered by Gemini AI API with modular and scalable architecture.",
        tags: ["Gemini API", "Spring Boot", "ReactJS", "REST APIs"],
        imageUrls: [
            "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/7567568/pexels-photo-7567568.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://github.com/Ranganatha-codingaddict/Gemini-ChatBot.git",
        link: "#"
    },
    {
        title: "💼 Job Application Management System",
        date: "2025",
        description: "A scalable job application management system built with ReactJS (frontend) and Spring Boot REST API (backend). Provides CRUD operations for job listings and applications, following clean separation of frontend and backend services.",
        tags: ["ReactJS", "Spring Boot", "REST APIs", "CRUD", "Java", "MySQL", "PostgreSQL"],
        imageUrls: [
            "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://github.com/Ranganatha-codingaddict/Job-App.git",
        link: "#"
    },
    {
        title: "✨ CreatiFlow – AI-Powered Productivity Platform",
        date: "2025",
        description: "CreatiFlow is an intelligent platform that combines AI-powered assistance, collaboration, and automation in one place. Built using React + TypeScript and powered by Gemini AI, it helps streamline creativity and productivity for individuals and teams.",
        tags: ["React", "TypeScript", "Gemini AI", "TailwindCSS", "Node.js"],
        imageUrls: [
            "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://github.com/Ranganatha-codingaddict/CREATIFLOW.git",
        link: "https://ai.studio/apps/drive/1e8TeLzI3tJctFd8JMO0FTLPSXhDumM2q"
    },
    {
        title: "Interactive AI Portfolio Website",
        date: "Aug '25 - Present",
        description: "Developed this dynamic, single-page portfolio website using AI Studio. This interactive portfolio is built with React, Tailwind CSS, and Framer Motion, featuring a clean, responsive UI, smooth animations, and a real-time project filtering system. The application demonstrates modern frontend development practices and UI/UX design principles.",
        tags: ["AI Studio", "React", "Tailwind CSS", "Framer Motion", "UI/UX", "Frontend"],
        imageUrls: [
            "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://ai.studio/apps/drive/1-Ec4Y1Xm_1X3DIivGr0ELAPfah9kRsDY",
        link: "https://ai.studio/apps/drive/1-Ec4Y1Xm_1X3DIivGr0ELAPfah9kRsDY"
    },
    {
        title: "E-Notes: A Spring Boot-Based Digital Notebook",
        date: "Jun '24 — Oct '24",
        description: "A Spring Boot-based note-taking Web Application with RESTful Web Services, leveraging J2EE, MySQL and Spring Security. Ensured code reliability through JUnit testing and Agile development, while integrating Microservices. Designed a dynamic UI using Bootstrap, HTML, CSS, and JavaScript.",
        tags: ["Spring Boot", "MySQL", "J2EE", "Spring Security", "REST", "JUnit", "Microservices", "Bootstrap", "Agile"],
        imageUrls: [
            "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://github.com/Ranganatha-codingaddict/Enotes-Spring-Boot-Project.git",
        link: "Link"
    },
    {
        title: "AI Powered Freelancing and Skill Enhancement Platform",
        date: "Feb '25 — May '25",
        description: "Developed a Full Stack Web Application using Spring Boot, React.js, and SQL to connect freelancers with job opportunities. Integrated AI-driven job matching, resume analysis, and skill recommendations. Implemented role-based access control (RBAC) with JWT authentication, OAuth, and Spring Security.",
        tags: ["Spring Boot", "React", "SQL", "AI", "RBAC", "JWT", "OAuth", "Spring Security"],
        imageUrls: [
            "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
            "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
        ],
        githubUrl: "https://github.com/Ranganatha-codingaddict/Ai-Powered-Freelancer-Platform.git",
        link: "Link"
    }
];

type Project = typeof projects[0];

Modal.setAppElement('#root');

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
};

const carouselVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const ImageCarousel: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isHovered, setIsHovered] = useState(false);

    const imageIndex = page % imageUrls.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div 
            className="w-full h-full relative flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={imageUrls[imageIndex]}
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>
            <AnimatePresence>
            {isHovered && (
                <>
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="z-10 absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full cursor-pointer p-1"
                    onClick={() => paginate(-1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="z-10 absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full cursor-pointer p-1"
                    onClick={() => paginate(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </motion.div>
                </>
            )}
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {imageUrls.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === imageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard: React.FC<{ project: Project; onCardClick: (project: Project) => void; onTagClick: (tag: string) => void }> = ({ project, onCardClick, onTagClick }) => {
    return (
        <motion.div
            layout
            variants={cardVariants}
            exit="exit"
            className="bg-white dark:bg-dark-secondary rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer"
            whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(59, 130, 246, 0.2)" }}
            onClick={() => onCardClick(project)}
        >
            <div className="w-full h-48">
                <ImageCarousel imageUrls={project.imageUrls} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{project.date}</p>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-light-secondary text-base mb-4 flex-grow line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <motion.button 
                            key={tag} 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent modal from opening
                                onTagClick(tag);
                            }}
                            className="bg-gray-200 dark:bg-gray-700 text-xs font-semibold text-primary px-2.5 py-1 rounded-full transition-colors duration-200 hover:bg-primary hover:text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


const Projects: React.FC = () => {
    const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
    const [selectedTag, setSelectedTag] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        let tempProjects = projects;

        // Filter by tag
        if (selectedTag !== 'All') {
            tempProjects = tempProjects.filter(project => project.tags.includes(selectedTag));
        }

        // Filter by search query
        if (searchQuery.trim() !== '') {
            const lowercasedQuery = searchQuery.toLowerCase();
            tempProjects = tempProjects.filter(project =>
                project.title.toLowerCase().includes(lowercasedQuery) ||
                project.description.toLowerCase().includes(lowercasedQuery)
            );
        }

        setFilteredProjects(tempProjects);
    }, [selectedTag, searchQuery]);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

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
        <section id="projects" className="py-20 bg-light-secondary dark:bg-dark scroll-mt-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Academic Projects</h2>
                
                <div className="mb-8 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search by title or description..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded-full bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-700 text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        aria-label="Search projects"
                    />
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {allTags.slice(0,9).map(tag => (
                        <motion.button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none ${
                                selectedTag === tag
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-white dark:bg-dark-secondary text-gray-600 dark:text-light-secondary hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <AnimatePresence>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectCard key={project.title} project={project} onCardClick={openModal} onTagClick={setSelectedTag} />
                            ))
                        ) : (
                             <div className="md:col-span-2 text-center text-gray-500 dark:text-gray-400 py-10">
                                <p className="text-xl">No projects found.</p>
                                <p>Try adjusting your search or filters.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="absolute top-1/2 left-1/2 right-auto bottom-auto -mr-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-2xl w-full border border-primary/50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            >
                {selectedProject && (
                    <div className="relative">
                        <button onClick={closeModal} className="absolute -top-4 -right-4 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center focus:outline-none">&times;</button>
                        <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">{selectedProject.title}</h2>
                        <div className="w-full h-64 object-cover rounded-md mb-4 overflow-hidden">
                             <ImageCarousel imageUrls={selectedProject.imageUrls} />
                        </div>
                        <p className="text-gray-600 dark:text-light-secondary mb-4">{selectedProject.description}</p>
                         <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.tags.map(tag => (
                                <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-xs font-semibold text-primary px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary hover:underline">
                                View on GitHub
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary hover:underline">
                                View Project Link
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;