import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/", { replace: false });
        setTimeout(() => {
            const element = document.getElementById("projects");
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <motion.button
            className="back-button-floating"
            onClick={goBack}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <FontAwesomeIcon icon={faArrowLeftLong} />
        </motion.button>
    );
};

export default BackButton;