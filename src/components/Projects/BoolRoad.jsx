
// Importa il componente motion da framer-motion per animazioni React
import { motion } from 'framer-motion';
// Importa il componente BackButton per tornare alla pagina precedente
import BackButton from '../BackButton';
// Importa lo stile specifico per i progetti demo
import '../../styles/DemoProject.css';


// Componente principale che mostra la pagina di presentazione del progetto BoolRoad
const BoolRoad = () => {
    return (
        // motion.div permette di animare l'opacità del contenitore principale all'ingresso e all'uscita
        <motion.div
            className="demo-project"
            initial={{ opacity: 0 }} // Opacità iniziale (quando il componente viene montato)
            animate={{ opacity: 1 }} // Opacità finale (quando il componente è visibile)
            exit={{ opacity: 0 }}    // Opacità in uscita (quando il componente viene smontato)
        >
            {/* Pulsante per tornare indietro */}
            <BackButton />

            {/* Titolo del progetto */}
            <h1>Boolroad</h1>

            <div className="demo-content">
                {/* Sezione panoramica del progetto */}
                <section className="demo-project-overview">
                    <h2>Overview</h2>
                    <div className="video-demo-container">
                        {/* Video dimostrativo del progetto */}
                        <video controls>
                            <source src="/Bool-road.mp4" type="video/mp4" />
                            {/* Messaggio di fallback se il browser non supporta il video */}
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                    {/* Descrizione sintetica del progetto */}
                    <h3>BoolRoad è una web app sviluppata per un’agenzia di viaggi di gruppo, pensata per semplificare l’organizzazione e la gestione dei partecipanti.</h3>
                    <p>I coordinatori possono accedere facilmente ai dati dei viaggiatori, sia da computer che da smartphone, così da avere sempre a portata di mano tutte le informazioni utili durante un viaggio.</p>
                </section>

                {/* Sezione funzionalità del progetto */}
                <section className="demo-project-features">
                    <h2>Funzionalità</h2>
                    <ul>
                        {/* Elenco delle principali funzionalità offerte dalla web app */}
                        <li>Accesso multi-dispositivo (PC e smartphone)</li>
                        <li>Consultazione rapida dei partecipanti a ciascun viaggio</li>
                        <li>Visualizzazione dettagli anagrafici (nome, cognome, email, telefono)</li>
                        <li>Gestione delle informazioni aggiuntive, come allergie e note importanti</li>
                        <li>Contatto diretto con i viaggiatori in caso di necessità</li>
                    </ul>
                </section>

                {/* Sezione tecnologie utilizzate */}
                <section>
                    <h2>Tecnologie Utilizzate</h2>
                    <div className="demo-tech-stack">
                        {/* Elenco delle tecnologie principali usate nello sviluppo del progetto */}
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


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default BoolRoad;