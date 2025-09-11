
// Importa i componenti principali della pagina
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Sidebar from "../components/Sidebar";
import '../styles/HomePage.css';
import Header from "../components/Header";



// Componente principale che rappresenta la homepage del portfolio
const HomePage = () => {
    return (
        // Fragment React per racchiudere il layout
        <>
            {/* Contenitore principale che divide la pagina in due colonne */}
            <div className="home-container">

                {/* Colonna sinistra: sidebar con immagini e social */}
                <div className="left-content">
                    <Sidebar />
                </div>

                {/* Colonna destra: header e contenuti principali */}
                <div className="right-content">
                    {/* Header di navigazione */}
                    <Header />
                    {/* Sezione presentazione personale */}
                    <About />
                    {/* Sezione progetti */}
                    <Projects />
                    {/* Sezione competenze */}
                    <Skills />
                    {/* Sezione contatti */}
                    <Contacts />
                </div>
            </div>
        </>
    );
};


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default HomePage;