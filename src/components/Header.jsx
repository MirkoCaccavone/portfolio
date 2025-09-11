// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../styles/Header.css';

// const Header = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionId) => {
//         if (location.pathname !== "/") {
//             navigate("/", { replace: false });
//             // Attendi che la pagina principale sia caricata prima di scrollare
//             setTimeout(() => {
//                 const element = document.getElementById(sectionId);
//                 if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                 }
//             }, 100); // 100ms di attesa, puoi aumentare se serve
//         } else {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     };

//     return (
//         <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
//             <nav className="nav-links">
//                 <button onClick={() => scrollToSection('about')}>Chi Sono</button>
//                 <button onClick={() => scrollToSection('projects')}>Progetti</button>
//                 <button onClick={() => scrollToSection('skills')}>Skills</button>
//                 <button onClick={() => scrollToSection('contacts')}>Contatti</button>
//             </nav>
//         </header>
//     );
// };

// export default Header;

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        // Seleziona i contenitori con ID specifici
        const sections = document.querySelectorAll("#about, #projects, #skills, #contacts");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // root: null,
                rootMargin: "-50% 0px -50% 0px", // prende la metà superiore e metà inferiore del viewport
                threshold: 0
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [location.pathname]);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
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
                <button
                    onClick={() => scrollToSection('about')}
                    className={activeSection === 'about' ? 'active' : ''}
                >
                    Chi Sono
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={activeSection === 'projects' ? 'active' : ''}
                >
                    Progetti
                </button>
                <button
                    onClick={() => scrollToSection('skills')}
                    className={activeSection === 'skills' ? 'active' : ''}
                >
                    Skills
                </button>
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

export default Header;

