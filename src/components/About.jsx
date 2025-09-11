
// Importa il componente FontAwesomeIcon per visualizzare le icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa le icone specifiche da FontAwesome per rappresentare le skill
import { faCode, faLaptopCode, faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
// Importa motion da framer-motion per animazioni React
import { motion } from 'framer-motion';
// Importa lo stile CSS specifico per la sezione About
import '../styles/About.css';


// Componente About che mostra una breve presentazione personale e le skill principali
const About = () => {
    // Array di oggetti che rappresentano le skill, ognuna con icona, titolo e descrizione
    const skills = [
        { icon: faCode, title: "Frontend", text: "HTML, CSS, Bootstrap, React, JavaScript" },
        { icon: faLaptopCode, title: "Backend", text: "Node.js, Express, PHP, Laravel" },
        { icon: faMobileAlt, title: "Mobile", text: "Responsive Design" },
        { icon: faDatabase, title: "Database", text: "MySQL, PhpMyAdmin" }
    ];

    return (
        // motion.div permette di animare l'opacità della sezione About all'ingresso
        <motion.div
            className="about"
            id="about"
            initial={{ opacity: 0 }} // Opacità iniziale (quando il componente viene montato)
            animate={{ opacity: 1 }} // Opacità finale (quando il componente è visibile)
            transition={{ duration: 0.6 }} // Durata dell'animazione
        >
            {/* Titolo della sezione */}
            <h2>Chi Sono</h2>

            <div className="about-content">
                {/* Sezione testo di presentazione */}
                <div className="about-text">
                    <h3>👋 Ciao! Sono <strong>Mirko</strong></h3>
                    <p>
                        {/* Descrizione personale con dettagli sul percorso e lo stile di lavoro */}
                        Sviluppatore <strong>full stack</strong> con la testa nel ☁️ cloud e le mani sulla tastiera (letteralmente).
                        <br /><br />
                        Scrivo codice da quando ho scoperto che dietro ogni sito bello c’è una riga di <span className="highlight">CSS</span> in più...
                        e dietro ogni bug… una notte insonne 🌙☕.
                        <br /><br />
                        Mi piace <strong>costruire cose</strong>: che siano siti vetrina, Web app più complesse o esperimenti con l’AI,
                        ogni progetto è un'avventura (con tanto di <code>console.log()</code> come diario di bordo 🧭).
                        <br /><br />
                        Quando non programmo, probabilmente sto già pensando al prossimo progetto...
                        o litigando con un <code>undefined is not a function</code> 💢.
                        <br /><br />
                        Se cerchi qualcuno che sappia <strong>tradurre le idee in codice</strong>
                        (e ci metta pure passione ❤️ e un pizzico di ironia 😄), direi che ci siamo trovati.
                    </p>
                </div>

                {/* Sezione panoramica delle skill */}
                <div className="skills-overview">
                    {/* Ciclo sulle skill per mostrarle come card con icona, titolo e descrizione */}
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card"
                        >
                            {/* Icona della skill */}
                            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                            {/* Titolo della skill */}
                            <h3>{skill.title}</h3>
                            {/* Descrizione della skill */}
                            <p>{skill.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default About