import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const socials = [
    {
        icon: FaGithub,
        link: "https://github.com/Shivam16a",
    },
    {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/shivam-kumar-0a743b322/",
    },
    {
        icon: FaWhatsapp,
        link: "https://wa.me/919876543210?text=Hello%20Shivam",
    },
];

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_12c5rkq",
            "template_difdk5d",
            e.target,
            "7r_lo66G4wN6ldOM4"
        )
            .then(() => alert("Message Sent "))
            .catch(() => alert("Error "));
    };

    return (
        <section className="container py-5 contact-bg vh-100" id="contact">

            <motion.div
                className="row"
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* LEFT */}
                <div className="col-md-5 mb-4">

                    <motion.h1 variants={itemVariant} className="mb-4 gradient-text">
                        Contact Me
                    </motion.h1>

                    <motion.p variants={itemVariant} className="text-white">
                        Feel free to reach out 👋
                    </motion.p>

                    {/* Info */}
                    {[
                        { icon: <FaEnvelope />, text: "shivam123hjp@gmail.com", color: "text-primary" },
                        { icon: <FaPhone />, text: "+91 8002632535", color: "text-success" },
                        { icon: <FaMapMarkerAlt />, text: "India, Bihar", color: "text-danger" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariant}
                            whileHover={{ scale: 1.05, x: 10 }}
                            className={`mb-3 ${item.color}`}
                        >
                            {item.icon} <span className="ms-2">{item.text}</span>
                        </motion.div>
                    ))}

                    {/* Social */}
                    <motion.div variants={itemVariant} className="mt-4 d-flex gap-3 fs-4">
                        {socials.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.3, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-white"
                                >
                                    <Icon />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                </div>

                {/* RIGHT FORM */}
                <div className="col-md-7">

                    <motion.form
                        variants={itemVariant}
                        className="p-4 shadow rounded glass"
                        onSubmit={sendEmail}
                    >

                        {["Name", "Email", "Message"].map((label, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariant}
                                className="mb-3"
                            >
                                <label className="form-label">{label}</label>

                                {label !== "Message" ? (
                                    <input
                                        type={label === "Email" ? "email" : "text"}
                                        className="form-control glass-input"
                                        placeholder={`Enter your ${label}`}
                                        name={label === "Name" ? "from_name" : "from_email"}
                                        required
                                    />
                                ) : (
                                    <textarea
                                        className="form-control glass-input"
                                        rows="4"
                                        placeholder="Write your message"
                                        name="message"
                                        required
                                    ></textarea>
                                )}
                            </motion.div>
                        ))}

                        <motion.button
                            variants={itemVariant}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn w-100 glass-btn"
                        >
                            Send Message 🚀
                        </motion.button>

                    </motion.form>

                </div>

            </motion.div>

        </section>
    );
};

export default Contact;