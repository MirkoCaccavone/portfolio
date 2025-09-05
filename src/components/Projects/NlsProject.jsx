
import { motion } from 'framer-motion';
import '../../styles/DemoProject.css';

const NlsProject = () => {
    return (
        <motion.div
            className="demo-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Next Level Shop</h1>
            <div className="demo-content">
                <section className="demo-project-overview">
                    <h2>Overview</h2>
                    <div className="video-demo-container">
                        <video controls>
                            <source src="/demoNls.mp4" type="video/mp4" />
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                    <h3>Non un semplice sito, ma una vera e propria App</h3>
                    <p>NLS è un e-commerce completo che offre un'esperienza di shopping intuitiva e moderna.</p>
                </section>

                <section className="demo-project-features">
                    <h2>Funzionalità</h2>
                    <ul>
                        <li>Navigazione fluida tra le categorie</li>
                        <li>Filtri avanzati per la ricerca prodotti</li>
                        <li>Carrello dinamico</li>
                        <li>Checkout semplificato</li>
                        <li>Gestione ordini</li>
                    </ul>
                </section>

                <section>
                    <h2>Tecnologie Utilizzate</h2>
                    <div className="demo-tech-stack">
                        <span className="demo-tech-item">React</span>
                        <span className="demo-tech-item">Node.js</span>
                        <span className="demo-tech-item">Express</span>
                        <span className="demo-tech-item">MySQL</span>
                        <span className="demo-tech-item">CSS</span>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default NlsProject;