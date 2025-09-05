import { motion } from 'framer-motion';
import '../../styles/DemoProject.css';

const BoolRoad = () => {
    return (
        <motion.div
            className="demo-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Boolroad</h1>
            <div className="demo-content">
                <section className="demo-project-overview">
                    <h2>Overview</h2>
                    <div className="video-demo-container">
                        <video controls>
                            <source src="/Bool-road.mp4" type="video/mp4" />
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                    <h3>BoolRoad è una web app sviluppata per un’agenzia di viaggi di gruppo, pensata per semplificare l’organizzazione e la gestione dei partecipanti.</h3>
                    <p>I coordinatori possono accedere facilmente ai dati dei viaggiatori, sia da computer che da smartphone, così da avere sempre a portata di mano tutte le informazioni utili durante un viaggio.</p>
                </section>

                <section className="demo-project-features">
                    <h2>Funzionalità</h2>
                    <ul>
                        <li>Accesso multi-dispositivo (PC e smartphone)</li>
                        <li>Consultazione rapida dei partecipanti a ciascun viaggio</li>
                        <li>Visualizzazione dettagli anagrafici (nome, cognome, email, telefono)</li>
                        <li>Gestione delle informazioni aggiuntive, come allergie e note importanti</li>
                        <li>Contatto diretto con i viaggiatori in caso di necessità</li>
                    </ul>
                </section>

                <section>
                    <h2>Tecnologie Utilizzate</h2>
                    <div className="demo-tech-stack">
                        <span className="demo-tech-item">React</span>
                        <span className="demo-tech-item">Vite</span>
                        <span className="demo-tech-item">Node.js</span>
                        <span className="demo-tech-item">Bootstrap</span>
                        <span className="demo-tech-item">CSS</span>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default BoolRoad;