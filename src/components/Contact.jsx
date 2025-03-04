import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-8">
      <div className="border-b border-neutral-900 pb-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h1>
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <a href="mailto:divyakampalli.in@gmail.com" target="_blank">
            <p className="my-4">{CONTACT.email}</p>{" "}
          </a>
          <a href="tel:+13128859732">
            <p className="my-4">{CONTACT.phoneNo}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
