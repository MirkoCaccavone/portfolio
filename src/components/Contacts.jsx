
// Importa React e useRef per gestire il riferimento al form
import React, { useRef } from 'react';
// Importa motion da framer-motion per animazioni React
import { motion } from 'framer-motion';
// Importa emailjs per inviare email tramite form
import emailjs from '@emailjs/browser';
// Importa toast per mostrare notifiche di successo/errore
import toast from 'react-hot-toast';
// Importa lo stile CSS specifico per la sezione contatti
import '../styles/Contacts.css';


// Componente che mostra la sezione contatti con info e form per invio email
const Contacts = () => {
    // Riferimento al form per poterlo gestire con emailjs
    const formRef = useRef();

    // Gestisce l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene il comportamento di default del form

        // Invia il form tramite emailjs
        emailjs.sendForm(
            'service_wu0z5ef', // ID del servizio EmailJS
            'template_3f8utzq', // ID del template EmailJS
            formRef.current,    // Riferimento al form DOM
            'CZs6HBaRxPL-cC9-J' // Chiave pubblica EmailJS
        )
            .then(() => {
                // Mostra notifica di successo
                toast.success('Messaggio inviato con successo!');
                // Resetta i campi del form
                formRef.current.reset();
            })
            .catch(() => {
                // Mostra notifica di errore
                toast.error('Errore nell\'invio del messaggio.');
            });
    };


    return (
        // motion.div permette di animare l'opacità della sezione contatti all'ingresso
        <motion.div
            className="contacts-container"
            id="contacts"
            initial={{ opacity: 0 }} // Opacità iniziale (quando il componente viene montato)
            animate={{ opacity: 1 }} // Opacità finale (quando il componente è visibile)
            transition={{ duration: 0.6 }} // Durata dell'animazione
        >
            {/* Titolo della sezione */}
            <h2>Contattami</h2>

            <div className="contacts-content">
                {/* Sezione informazioni di contatto */}
                <div className="contact-info">
                    {/* Email */}
                    <motion.div
                        className="info-item"
                        whileHover={{ scale: 1.05 }} // Effetto di ingrandimento all'hover
                    >
                        <i className="fas fa-envelope"></i>
                        <p>mirkocaccavone03@gmail.com</p>
                    </motion.div>
                    {/* Telefono */}
                    <motion.div
                        className="info-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <i className="fas fa-phone"></i>
                        <p>+39 346 323 1336</p>
                    </motion.div>
                    {/* Località */}
                    <motion.div
                        className="info-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Italia</p>
                    </motion.div>
                </div>

                {/* Form di contatto per invio email */}
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        {/* Campo nome */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Il tuo nome"
                            required
                        />
                    </div>
                    <div className="form-group">
                        {/* Campo email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="La tua email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        {/* Campo messaggio */}
                        <textarea
                            name="message"
                            placeholder="Il tuo messaggio"
                            required
                        ></textarea>
                    </div>
                    {/* Pulsante di invio con animazione */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Invia Messaggio
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};


// Esporta il componente per poterlo utilizzare in altre parti dell'applicazione
export default Contacts;