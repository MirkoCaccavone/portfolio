import React, { useEffect } from 'react';
// Importa motion per animazioni React (framer-motion)
import { motion } from 'framer-motion';
// Importa GSAP per animazioni avanzate
import gsap from 'gsap';
// Importa il plugin ScrollTrigger di GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Importa lo stile CSS specifico per le skills
import '../styles/Skills.css';

// Registra il plugin ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    // Effetto che si attiva al montaggio del componente
    useEffect(() => {
        // Crea un contesto GSAP per gestire le animazioni e la loro pulizia
        const ctx = gsap.context(() => {
            // Anima tutti gli elementi con classe .skill-bar-fill
            // L'animazione parte dalla larghezza 0% e arriva al valore impostato nello stile inline
            gsap.from(".skill-bar-fill", {
                width: "0%", // larghezza iniziale
                duration: 1.5, // durata animazione
                ease: "power2.out", // tipo di easing
                stagger: 0.2, // ritardo tra le animazioni delle barre
                scrollTrigger: {
                    trigger: ".skills-container", // attiva animazione quando skills-container entra in viewport
                    start: "top center", // punto di inizio animazione
                    toggleActions: "play none none reverse" // cosa succede quando entra/esce dalla viewport
                }
            });
        });

        // Pulizia dell'animazione quando il componente viene smontato
        return () => ctx.revert();
    }, []);

    // Array di oggetti che rappresentano le skill e la loro percentuale
    const skills = [
        { name: "Capire perché il Wi-Fi non funziona", level: 40 },
        { name: "Debug notturno alle 3 di mattina", level: 99 },
        { name: "Premere F5 sperando che si sistemi", level: 90 },
        { name: "Sopravvivere senza caffè", level: 10 },
        { name: "Mangiare pizza fredda", level: 80 },
        { name: "Dark mode addiction", level: 120 }
    ];

    // Render del componente
    return (
        // Motion div per animare l'opacità all'ingresso
        <motion.div
            className="skills-container"
            id="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>Le Mie Competenze</h2>

            {/* Griglia delle skill */}
            <div className="skills-grid">
                {/* Ciclo su tutte le skill per renderizzare ogni barra */}
                {skills.map((skill, index) => (
                    // Motion div per animare ogni skill-item all'ingresso
                    <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Informazioni sulla skill */}
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        {/* Barra della skill */}
                        <div className="skill-bar" title={skill.level > 100 ? "Skill leggendaria!" : ""}>
                            <div
                                className={`skill-bar-fill${skill.level > 100 ? ' overfill' : ''}${skill.level < 20 ? ' tired' : ''}`}
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
