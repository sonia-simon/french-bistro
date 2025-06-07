import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
   

      <main>
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Our Story</h2>
          <p>
            Our restaurant was founded in 2024 with one mission: to offer authentic, generous,
            and flavorful cuisine inspired by traditional French bistros.
          </p>
          <p>
            Every dish is prepared with care using fresh, local ingredients, in a warm and
            friendly atmosphere.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Our Team</h2>
          <p>
            Our head chef, passionate about gastronomy, creates simple yet refined recipes that
            highlight quality products and traditional flavors.
          </p>
          <p>
            In the dining room, our team welcomes you with a smile and ensures you enjoy a
            delightful culinary experience from start to finish.
          </p>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default About;
