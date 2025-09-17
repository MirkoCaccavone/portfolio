
// Importa useState e useEffect per gestire stato e side effect
import { useState, useEffect } from 'react';
// Importa lo stile CSS specifico per la sidebar
import '../styles/Sidebar.css';


// Componente Sidebar che mostra l'immagine profilo, una scritta animata e i link social
const Sidebar = () => {
    // Stato per la scritta animata (typewriter effect)
    const [text, setText] = useState('');
    // Testo completo da animare
    const fullText = "Full Stack Web Developer";

    useEffect(() => {
        // Funzione che gestisce l'animazione della scritta (typewriter + cancellazione)
        const animateText = () => {
            let index = 0;
            let isDeleting = false;

            // Funzione ricorsiva per animare carattere per carattere
            const animate = () => {
                if (!isDeleting) {
                    // Scrive carattere per carattere
                    if (index <= fullText.length) {
                        setText(fullText.slice(0, index));
                        index++;
                        setTimeout(animate, 150); // Velocità scrittura
                    } else {
                        isDeleting = true;
                        setTimeout(animate, 3000); // Pausa prima di iniziare a cancellare
                    }
                } else {
                    // Cancella carattere per carattere
                    if (index > 0) {
                        setText(fullText.slice(0, index));
                        index--;
                        setTimeout(animate, 150); // Velocità di cancellazione
                    } else {
                        isDeleting = false;
                        setTimeout(animate, 1000); // Pausa prima di ricominciare
                    }
                }
            };

            animate();
        };

        animateText(); // Avvia l'animazione al mount del componente
    }, []);


    return (
        // Contenitore principale della sidebar
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="image-container">
                    {/* Immagine profilo principale */}
                    <img src="/papera.jpg" alt="Immagine seria" className="profile-img" />
                    {/* Immagine profilo alternativa (hover) */}
                    <img src="/seconda-foto.jpg" alt="Immagine simpatica" className="profile-img-hover" />
                    <div className="overlay-content">
                        <div className="intro">
                            {/* Titolo e scritta animata */}
                            <h2>Ciao, sono Mirko</h2>
                            {/* Quando text è una stringa vuota viene visualizzato uno spazio invisibile */}
                            <p className="typewriter">{text === "" ? "\u00A0" : text}</p>
                        </div>
                        {/* Sezione link social */}
                        <div className="socials">
                            {/* Link GitHub */}
                            <a href="https://github.com/MirkoCaccavone" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            {/* Link LinkedIn */}
                            <a href="https://www.linkedin.com/in/mirko-caccavone-a5160919a/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            {/* Link Instagram */}
                            <a href="https://www.instagram.com/mirkocaccavone/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                            {/* Link Facebook */}
                            <a href="https://www.facebook.com/mirko.caccavone" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-facebook"></i>
                            </a>
                            {/* Link email */}
                            <a href="mailto:mirkocaccavone03@gmail.com" className="social-link">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default Sidebar;