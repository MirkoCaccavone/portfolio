import { motion } from 'framer-motion';
import '../../styles/DemoProject.css';

const Rentora = () => {
    return (
        <motion.div
            className="demo-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Rentora</h1>
            <div className="demo-content">
                <section className="demo-project-overview">
                    <h2>Overview</h2>
                    <div className="video-demo-container">
                        <video controls>
                            <source src="/Noleggio-Veicoli.mp4" type="video/mp4" />
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                    <h3>Una soluzione digitale moderna che unisce praticità per l’utente e controllo totale per l’amministratore.</h3>
                    <p>Rentora è un’applicazione web che offre un’esperienza intuitiva sia per gli utenti che vogliono prenotare un mezzo, sia per gli amministratori che gestiscono disponibilità e prenotazioni.</p>
                </section>

                <section className="demo-project-features">
                    <h2>Funzionalità</h2>
                    <h3>Area Utente</h3>
                    <ul>
                        <li>Navigazione fluida tra i mezzi disponibili (auto, bici, scooter, van)</li>
                        <li>Barra di ricerca e filtri per tipologia di veicolo</li>
                        <li>Consultazione dettagliata dei veicoli (foto, descrizione, prezzo, disponibilità)</li>
                        <li>Verifica delle date disponibili</li>
                        <li>Prenotazione semplice e veloce online</li>
                    </ul>

                    <h3>Area Admin</h3>
                    <ul>
                        <li>Accesso riservato con login</li>
                        <li>Gestione completa del parco mezzi</li>
                        <li>Monitoraggio e gestione delle prenotazioni effettuate dagli utenti</li>
                        <li>Dashboard intuitiva per avere tutto sotto controllo</li>
                    </ul>
                </section>

                <section>
                    <h2>Tecnologie Utilizzate</h2>
                    <div className="demo-tech-stack">
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

export default Rentora;