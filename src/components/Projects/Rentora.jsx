
// Importa motion da framer-motion per gestire animazioni React
import { motion } from 'framer-motion';
// Importa il componente BackButton per la navigazione indietro
import BackButton from '../BackButton';
// Importa lo stile CSS specifico per i progetti demo
import '../../styles/DemoProject.css';


// Componente principale che mostra la pagina di presentazione del progetto Rentora
const Rentora = () => {
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
            <h1>Rentora</h1>

            <div className="demo-content">
                {/* Sezione panoramica del progetto */}
                <section className="demo-project-overview">
                    <h2>Overview</h2>
                    <div className="video-demo-container">
                        {/* Video dimostrativo del progetto */}
                        <video controls>
                            <source src="/Noleggio-Veicoli.mp4" type="video/mp4" />
                            {/* Messaggio di fallback se il browser non supporta il video */}
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                    {/* Descrizione sintetica del progetto */}
                    <h3>Una soluzione digitale moderna che unisce praticità per l’utente e controllo totale per l’amministratore.</h3>
                    <p>Rentora è un’applicazione web che offre un’esperienza intuitiva sia per gli utenti che vogliono prenotare un mezzo, sia per gli amministratori che gestiscono disponibilità e prenotazioni.</p>
                </section>

                {/* Sezione funzionalità del progetto */}
                <section className="demo-project-features">
                    <h2>Funzionalità</h2>
                    {/* Area dedicata alle funzionalità lato utente */}
                    <h3>Area Utente</h3>
                    <ul>
                        {/* Elenco delle principali funzionalità per l'utente */}
                        <li>Navigazione fluida tra i mezzi disponibili (auto, bici, scooter, van)</li>
                        <li>Barra di ricerca e filtri per tipologia di veicolo</li>
                        <li>Consultazione dettagliata dei veicoli (foto, descrizione, prezzo, disponibilità)</li>
                        <li>Verifica delle date disponibili</li>
                        <li>Prenotazione semplice e veloce online</li>
                    </ul>

                    {/* Area dedicata alle funzionalità lato amministratore */}
                    <h3>Area Admin</h3>
                    <ul>
                        {/* Elenco delle principali funzionalità per l'amministratore */}
                        <li>Accesso riservato con login</li>
                        <li>Gestione completa del parco mezzi</li>
                        <li>Monitoraggio e gestione delle prenotazioni effettuate dagli utenti</li>
                        <li>Dashboard intuitiva per avere tutto sotto controllo</li>
                    </ul>
                </section>

                {/* Sezione tecnologie utilizzate */}
                <section>
                    <h2>Tecnologie Utilizzate</h2>
                    <div className="demo-tech-stack">
                        {/* Elenco delle tecnologie principali usate nello sviluppo del progetto */}
                        <span className="demo-tech-item">React</span>
                        <span className="demo-tech-item">Laravel (PHP)</span>
                        <span className="demo-tech-item">MySQL</span>
                        <span className="demo-tech-item">CSS</span>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default Rentora;