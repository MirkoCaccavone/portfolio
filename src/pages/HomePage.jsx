import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Sidebar from "../components/Sidebar";
import '../styles/HomePage.css';
import Header from "../components/Header";


// pagina principale con tutti i contenuti
const HomePage = () => {
    return (
        <>
            <div className="home-container">

                {/* contenitore di sinistra con immagini */}
                <div className="left-content">
                    <Sidebar />
                </div>

                {/* contenitore destro con tutto il contenuto */}
                <div className="right-content">
                    <Header />
                    <About />
                    <Projects />
                    <Skills />
                    <Contacts />

                </div>
            </div>

        </>

    );
};

export default HomePage;