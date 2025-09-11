import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Next Level Shop",
            description: "NLS è un e-commerce che permette agli utenti di navigare facilmente nelle varie pagine, filtrare o cercare in tanti modi i prodotti desiderati, aggiungere prodotti al carrello e completare gli ordini, tutto senza doversi registare.",
            tech: ["React", "CSS", "Node.js", "Express", "MySQL"],
            image: "/Next_level_shop1.mp4",
            github: "https://github.com/GheorgheMadan/bool-game-fe",

        },
        {
            title: "Rentora",
            description: "Piattaforma web per prenotare e gestire mezzi di trasporto (auto, bici, scooter, van) con area utente in React e pannello admin in Laravel.",
            tech: ["React", "Laravel (PHP)", "MySQL", "CSS"],
            image: "/public/RENTORA1.mp4", // o .jpg/.png se è un'immagine
            github: "https://github.com/MirkoCaccavone/noleggio-mezzi"
        },
        {
            title: "Boolroad",
            description: "Web app per agenzie di viaggio che permette ai coordinatori di gestire i partecipanti, contatti e informazioni importanti da qualsiasi dispositivo.",
            tech: ["React", "Vite", "Node.js", "Bootstrap", "CSS"],
            image: "/public/logo-boolroad.png", // o .jpg/.png se è un'immagine
            github: "https://github.com/MirkoCaccavone/boolroad"
        },
    ];

    const ProjectModal = ({ project, onClose }) => (
        <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="project-modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={e => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{project.title} - Demo</h2>
                <div className="demo-media-container">
                    {project.demoMedia.map((media, index) => (
                        <div key={index} className="demo-media-item">
                            {media.type === 'image' ? (
                                <img src={media.url} alt={media.caption} />
                            ) : (
                                <video controls>
                                    <source src={media.url} type="video/mp4" />
                                    Il tuo browser non supporta il tag video.
                                </video>
                            )}
                            <p className="demo-caption">{media.caption}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
    return (
        <motion.section
            className="projects-container"
            id="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>I Miei Progetti</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="project-image">
                            {project.image.endsWith('.mp4') ? (
                                <video autoPlay loop muted playsInline>
                                    <source src={project.image} type="video/mp4" />
                                    Il tuo browser non supporta il tag video.
                                </video>
                            ) : (
                                <img src={project.image} alt={project.title} />
                            )}
                            <div className="project-overlay">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="demo-link">
                                    Vedi Demo
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </motion.section>
    )
}

export default Projects