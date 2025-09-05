import { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Web Developer";

    useEffect(() => {
        const animateText = () => {
            let index = 0;
            let isDeleting = false;

            const animate = () => {
                if (!isDeleting) {
                    if (index <= fullText.length) {
                        setText(fullText.slice(0, index));
                        index++;
                        setTimeout(animate, 100);
                    } else {
                        isDeleting = true;
                        setTimeout(animate, 3000); // Pausa prima di iniziare a cancellare
                    }
                } else {
                    if (index > 0) {
                        setText(fullText.slice(0, index));
                        index--;
                        setTimeout(animate, 80); // Velocità di cancellazione più rapida
                    } else {
                        isDeleting = false;
                        setTimeout(animate, 1000); // Pausa prima di ricominciare
                    }
                }
            };

            animate();
        };

        animateText();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="image-container">
                    <img src="/papera.jpg" alt="Immagine seria" className="profile-img" />
                    <img src="/seconda-foto.jpg" alt="Immagine simpatica" className="profile-img-hover" />
                    <div className="overlay-content">
                        <div className="intro">
                            <h2>Ciao, sono Mirko</h2>
                            <p className="typewriter">{text}</p>
                        </div>
                        <div className="socials">
                            <a href="https://github.com/MirkoCaccavone" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mirko-caccavone-a5160919a/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/mirkocaccavone/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/mirko.caccavone" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-facebook"></i>
                            </a>
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

export default Sidebar;