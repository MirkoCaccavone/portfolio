
// Importa motion da framer-motion per gestire animazioni React
import { motion } from 'framer-motion';
// Importa il componente BackButton per la navigazione indietro
import BackButton from '../BackButton';
// Importa lo stile CSS specifico per i progetti demo
import '../../styles/DemoProject.css';


// Componente principale che mostra la pagina di presentazione del progetto Next Level Shop (NLS)
const NlsProject = () => {
    return (
        // motion.div permette di animare l'opacità del contenitore principale all'ingresso e all'uscita
        <motion.div
            className="demo-project"
            initial={{ opacity: 0 }} // Opacità iniziale (quando il componente viene montato)
            animate={{ opacity: 1 }} // Opacità finale (quando il componente è visibile)
            exit={{ opacity: 0 }}    // Opacità in uscita (quando il componente viene smontato)
        >
            {/* Pulsante per tornare ai progetti */}
            <BackButton />

            {/* Titolo del progetto */}
            <h1>Next Level Shop</h1>

            <div className="demo-content">
                {/* Sezione panoramica del progetto */}
                <section className="demo-project-overview">
                    <h2>Overview</h2>
                    <div className="video-demo-container">
                        {/* Video dimostrativo del progetto */}
                        <video controls>
                            <source src="/demoNls.mp4" type="video/mp4" />
                            {/* Messaggio di fallback se il browser non supporta il video */}
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                    {/* Descrizione sintetica del progetto */}
                    <h3>Non un semplice sito, ma una vera e propria App</h3>
                    <p>NLS è un e-commerce completo che offre un'esperienza di shopping intuitiva e moderna.</p>
                </section>

                {/* Sezione funzionalità del progetto */}
                <section className="demo-project-features">
                    <h2>Funzionalità</h2>
                    <ul>
                        {/* Elenco delle principali funzionalità offerte dalla web app */}
                        <li>Navigazione fluida tra le categorie</li>
                        <li>Filtri avanzati per la ricerca prodotti</li>
                        <li>Carrello dinamico</li>
                        <li>Checkout semplificato</li>
                        <li>Gestione ordini</li>
                    </ul>
                </section>

                {/* Sezione tecnologie utilizzate */}
                <section>
                    <h2>Tecnologie Utilizzate</h2>
                    <div className="demo-tech-stack">
                        {/* Elenco delle tecnologie principali usate nello sviluppo del progetto */}
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


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default NlsProject;