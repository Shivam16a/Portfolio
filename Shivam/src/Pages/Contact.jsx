import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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

const Contact = ({ data }) => {
  const { personal, socials } = data || {};

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_keigaoa", "template_difdk5d", e.target, "7r_lo66G4wN6ldOM4")
      .then(() => alert("Message Sent 🚀"))
      .catch(() => alert("Error sending message ❌"));
  };

  return (
    <section className="container py-5 text-white" id="contact">
      <motion.div
        className="row"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="col-md-5 mb-4">
          <motion.h1 variants={itemVariant} className="mb-4 gradient-text">
            Contact Me
          </motion.h1>

          <motion.p variants={itemVariant} className="text-secondary">
            Feel free to reach out 👋
          </motion.p>

          {[
            { icon: <FaEnvelope />, text: personal?.email, color: "text-primary" },
            { icon: <FaPhone />, text: personal?.phone, color: "text-success" },
            { icon: <FaMapMarkerAlt />, text: personal?.location, color: "text-danger" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              whileHover={{ scale: 1.05, x: 10 }}
              className={`mb-3 ${item.color} d-flex align-items-center`}
            >
              {item.icon} <span className="ms-2 text-white">{item.text}</span>
            </motion.div>
          ))}

          <motion.div variants={itemVariant} className="mt-4 d-flex gap-3 fs-4">
            {socials?.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer" className="text-white">
                {s.name === "GitHub" && <FaGithub />}
                {s.name === "LinkedIn" && <FaLinkedin />}
                {s.name === "WhatsApp" && <FaWhatsapp />}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="col-md-7">
          <motion.form
            variants={itemVariant}
            className="p-4 shadow rounded glass"
            onSubmit={sendEmail}
          >
            {["Name", "Email", "Message"].map((label, i) => (
              <motion.div key={i} variants={itemVariant} className="mb-3">
                <label className="form-label text-white">{label}</label>
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