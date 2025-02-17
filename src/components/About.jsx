import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="border-b border-neutral-900 pb-4">
        {/* Centered Heading */}
        <h2 className="my-10 text-4xl text-center font-bold">About Me</h2>

        <div className="flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl px-8 text-left" // Control width and padding
          >
            {/* Render ABOUT_TEXT as paragraphs */}
            {ABOUT_TEXT.split("\n").map((paragraph, index) => (
              <p key={index} className="my-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
