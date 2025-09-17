
// Importa useState per gestire lo stato locale del componente
import { useState } from 'react';
// Importa motion e AnimatePresence per animazioni React
import { motion, AnimatePresence } from 'framer-motion';
// Importa lo stile CSS specifico per la sezione progetti
import '../styles/Projects.css';

// Componente principale che mostra la sezione dei progetti
const Projects = () => {
    // Stato per gestire quale progetto è selezionato per la modale
    const [selectedProject, setSelectedProject] = useState(null);

    // Array di oggetti che rappresentano i progetti da mostrare
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
            image: "/RENTORA1.mp4", // o .jpg/.png se è un'immagine
            github: "https://github.com/MirkoCaccavone/noleggio-mezzi"
        },
        {
            title: "Boolroad",
            description: "Web app per agenzie di viaggio che permette ai coordinatori di gestire i partecipanti, contatti e informazioni importanti da qualsiasi dispositivo.",
            tech: ["React", "Vite", "Node.js", "Bootstrap", "CSS"],
            image: "/logo-boolroad.png", // o .jpg/.png se è un'immagine
            github: "https://github.com/MirkoCaccavone/boolroad"
        },
    ];

    // Modale che mostra la demo del progetto selezionato (solo proprietà esistenti)

    // Modale che mostra la demo del progetto selezionato (solo proprietà esistenti)
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
                {/* Pulsante per chiudere la modale */}
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{project.title} - Demo</h2>
                <div className="demo-media-container">
                    {/* Mostra il video o l'immagine principale del progetto */}
                    {project.image.endsWith('.mp4') ? (
                        <video controls style={{ maxWidth: '100%' }}>
                            <source src={project.image} type="video/mp4" />
                            Il tuo browser non supporta il tag video.
                        </video>
                    ) : (
                        <img src={project.image} alt={project.title} style={{ maxWidth: '100%' }} />
                    )}
                </div>
                <div className="project-info-modal">
                    <p>{project.description}</p>
                    <div className="project-tech">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        // Sezione principale dei progetti con animazione di fade-in
        <section
            className="projects-container"
            id="projects"
        >
            {/* Titolo della sezione */}
            <h2>I Miei Progetti</h2>

            {/* Griglia dei progetti */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                    >
                        {/* Immagine o video del progetto */}
                        <div className="project-image">
                            {project.image.endsWith('.mp4') ? (
                                <video autoPlay loop muted playsInline>
                                    <source src={project.image} type="video/mp4" />
                                    Il tuo browser non supporta il tag video.
                                </video>
                            ) : (
                                <img src={project.image} alt={project.title} />
                            )}
                            {/* Overlay con doppia azione: link GitHub, modale demo e pagina dedicata */}
                            <div className="project-overlay">
                                {/* Link al repository GitHub */}
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>

                                {/* Link per navigare alla pagina dedicata del progetto */}
                                <a href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="demo-link">
                                    Vedi Demo
                                </a>
                            </div>
                        </div>
                        {/* Informazioni sul progetto */}
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {/* Elenco delle tecnologie usate */}
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modale demo progetto */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}

// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default Projects;