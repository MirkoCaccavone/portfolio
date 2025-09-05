import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        // const element = document.getElementById(sectionId);
        // if (element) {
        //     element.scrollIntoView({ behavior: 'smooth' });
        // }
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
            // Attendi che la pagina principale sia caricata prima di scrollare
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // 100ms di attesa, puoi aumentare se serve
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav-links">
                <button onClick={() => scrollToSection('about')}>Chi Sono</button>
                <button onClick={() => scrollToSection('projects')}>Progetti</button>
                <button onClick={() => scrollToSection('skills')}>Skills</button>
                <button onClick={() => scrollToSection('contacts')}>Contatti</button>
            </nav>
        </header>
    );
};

export default Header;