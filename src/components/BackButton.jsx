
// Importa motion da framer-motion per animazioni React
import { motion } from 'framer-motion';
// Importa il componente FontAwesomeIcon per visualizzare l'icona della freccia
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa l'icona della freccia sinistra da FontAwesome
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
// Importa useNavigate da react-router-dom per la navigazione programmatica
import { useNavigate } from 'react-router-dom';
// Importa lo stile CSS specifico per il pulsante back
import '../styles/BackButton.css';


// Componente che mostra un pulsante animato per tornare alla sezione progetti
const BackButton = () => {
    // Hook di react-router-dom per gestire la navigazione
    const navigate = useNavigate();

    // Funzione chiamata al click del pulsante
    const goBack = () => {
        // Naviga verso la home page senza sostituire la cronologia
        navigate("/", { replace: false });
        // Dopo un breve delay, effettua lo scroll alla sezione "projects" in modo fluido
        setTimeout(() => {
            const element = document.getElementById("projects");
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        // motion.button permette di animare il pulsante all'ingresso, all'hover e al click
        <motion.button
            className="back-button-floating"
            onClick={goBack}
            initial={{ opacity: 0, x: -50 }} // Animazione iniziale: traslato a sinistra e trasparente
            animate={{ opacity: 1, x: 0 }}   // Animazione finale: visibile e in posizione
            whileHover={{ scale: 1.1, rotate: -5 }} // Effetto di ingrandimento e rotazione all'hover
            whileTap={{ scale: 0.95 }} // Effetto di pressione al click
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Parametri dell'animazione
        >
            {/* Icona della freccia sinistra */}
            <FontAwesomeIcon icon={faArrowLeftLong} />
        </motion.button>
    );
};


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default BackButton;