import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import '../styles/Contacts.css';

const Contacts = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wu0z5ef',
            'template_3f8utzq',
            formRef.current,
            'CZs6HBaRxPL-cC9-J'
        )
            .then(() => {
                toast.success('Messaggio inviato con successo!');
                formRef.current.reset();
            })
            .catch(() => {
                toast.error('Errore nell\'invio del messaggio.');
            });
    };

    return (
        <motion.div
            className="contacts-container"
            id="contacts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>Contattami</h2>

            <div className="contacts-content">
                <div className="contact-info">
                    <motion.div
                        className="info-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <i className="fas fa-envelope"></i>
                        <p>mirkocaccavone03@gmail.com</p>
                    </motion.div>
                    <motion.div
                        className="info-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <i className="fas fa-phone"></i>
                        <p>+39 346 323 1336</p>
                    </motion.div>
                    <motion.div
                        className="info-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Italia</p>
                    </motion.div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Il tuo nome"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="La tua email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Il tuo messaggio"
                            required
                        ></textarea>
                    </div>
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

export default Contacts;