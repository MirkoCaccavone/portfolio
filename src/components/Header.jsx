// Importa useState e useEffect per gestire stato e side effect
import { useState, useEffect } from 'react';
// Importa useNavigate e useLocation per la navigazione e il rilevamento del percorso attuale
import { useNavigate, useLocation } from 'react-router-dom';
// Importa lo stile CSS specifico per l'header
import '../styles/Header.css';


// Componente Header che gestisce la barra di navigazione e l'evidenziazione della sezione attiva
const Header = () => {
    // Stato per gestire se l'header è scrolled (aggiunge classe CSS)
    const [isScrolled, setIsScrolled] = useState(false);
    // Stato per tenere traccia della sezione attualmente visibile
    const [activeSection, setActiveSection] = useState('');
    // Hook per navigare tra le pagine
    const navigate = useNavigate();
    // Hook per ottenere il percorso attuale
    const location = useLocation();


    useEffect(() => {
        // Funzione per aggiornare lo stato isScrolled in base allo scroll verticale
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Aggiunge l'event listener per lo scroll
        window.addEventListener('scroll', handleScroll);

        // Seleziona le sezioni principali della pagina tramite i loro ID
        const sections = document.querySelectorAll("#about, #projects, #skills, #contacts");

        // Crea un IntersectionObserver per rilevare quale sezione è visibile nel viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // Se la sezione è visibile, aggiorna lo stato activeSection
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // root: null significa che il viewport è l'elemento di riferimento
                root: null, // viewport del browser
                rootMargin: "-50% 0px -50% 0px", // considera la metà superiore e inferiore del viewport
                threshold: 0 // attiva l'intersezione appena la sezione entra nel viewport
            }
        );

        // Osserva ogni sezione
        sections.forEach((section) => observer.observe(section));

        // Cleanup: rimuove l'event listener e l'observer quando il componente viene smontato o cambia il pathname
        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [location.pathname]);


    // Funzione per scrollare alla sezione desiderata
    const scrollToSection = (sectionId) => {
        // Se non siamo nella home, naviga prima alla home e poi scrolla dopo un breve delay
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // 100ms di attesa per assicurarsi che la home sia caricata
        } else {
            // Se siamo già nella home, scrolla direttamente
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    return (
        // Header principale con classe dinamica in base allo scroll
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav-links">
                {/* Bottone per scrollare alla sezione "Chi Sono" */}
                <button
                    onClick={() => scrollToSection('about')}
                    className={activeSection === 'about' ? 'active' : ''}
                >
                    Chi Sono
                </button>
                {/* Bottone per scrollare alla sezione "Progetti" */}
                <button
                    onClick={() => scrollToSection('projects')}
                    className={activeSection === 'projects' ? 'active' : ''}
                >
                    Progetti
                </button>
                {/* Bottone per scrollare alla sezione "Skills" */}
                <button
                    onClick={() => scrollToSection('skills')}
                    className={activeSection === 'skills' ? 'active' : ''}
                >
                    Skills
                </button>
                {/* Bottone per scrollare alla sezione "Contatti" */}
                <button
                    onClick={() => scrollToSection('contacts')}
                    className={activeSection === 'contacts' ? 'active' : ''}
                >
                    Contatti
                </button>
            </nav>
        </header>
    );
};


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default Header;

