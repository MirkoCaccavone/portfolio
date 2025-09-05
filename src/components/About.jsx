import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
    const skills = [
        { icon: faCode, title: "Frontend", text: "HTML, CSS, Bootstrap, React, JavaScript" },
        { icon: faLaptopCode, title: "Backend", text: "Node.js, Express, PHP, Laravel" },
        { icon: faMobileAlt, title: "Mobile", text: "Responsive Design" },
        { icon: faDatabase, title: "Database", text: "MySQL, PhpMyAdmin" }
    ];
    return (
        <div
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>Chi Sono</h2>
            <div className="about-content">
                <div className="about-text">
                    <h3>👋 Ciao! Sono <strong>Mirko</strong></h3>
                    <p>
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

                <div className="skills-overview">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                            <h3>{skill.title}</h3>
                            <p>{skill.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About