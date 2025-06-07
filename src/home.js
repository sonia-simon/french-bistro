import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Home() {
  return (
    <div className="background-container">
      <div className="content">
        <motion.h1 
          className='welcome' 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
        >
          Welcome to Our Restaurant
        </motion.h1>
        
        <motion.p 
          className='discover' 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          transition={{ delay: 0.3 }}
        >
          Discover our menu and enjoy a great dining experience!
        </motion.p>
      </div>
   
      <div>
        <motion.section 
          className="opening-section" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
        >
          <div className="opening-hours">
            <h2>Opening Hours</h2>
            <p>Welcome to our bistro! We are open:</p>
            <p>Monday to Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday: 10:00 AM - 1:00 AM</p>
            <p>Sunday: 10:00 AM - 11:00 PM</p>
          </div>
        </motion.section>

        <motion.section 
          className="gallery" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ delay: 0.2 }}
        >
          <h3>A Glimpse Into Our Kitchen</h3>
          <div className="image-grid">
            <img src="bourguignon.jpg" alt="French dish 1" />
            <img src="onion-soup.jpg" alt="French dish 2" />
            <img src="tatin.jpg" alt="French dish 3" />
            <img src="/bistrot.webp" alt="" /> 
            <img src="/bistrot1.jpg" alt="" />
            <img src="/moules.jpg" alt="" /> 
            <img src="/hachis.webp" alt="" /> 
          </div>
        </motion.section>

        <motion.section 
          className="events" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ delay: 0.4 }}
        >
          <h3>Upcoming Events</h3>
          <ul>
            <li>🧀 Cheese & Wine Pairing Night – June 15</li>
            <li>🎶 Live Jazz Dinner – June 22</li>
            <li>🍷 Bastille Day Celebration – July 14</li>
          </ul>
          <Link className="contact-inscription" to="/contact">→ Contact us for inscription</Link>
        </motion.section>

        <motion.section 
          className="menu-preview" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ delay: 0.6 }}
        >
          <h3>Discover Our Menu</h3>
          <div className="menu-items">
            <div className="dish-card">
              <img src="escargots.jpg" alt="Escargots de Bourgogne" />
              <h4>Escargots</h4>
              <p>Garlic butter snails</p>
            </div>
            <div className="dish-card">
              <img src="ratatouille.jpg" alt="Ratatouille" />
              <h4>Ratatouille</h4>
              <p>Slow-cooked Provençal vegetables</p>
            </div>
            <div className="dish-card">
              <img src="creme-brulee.jpeg" alt="Crème Brûlée" />
              <h4>Crème Brûlée</h4>
              <p>Custard with caramelized sugar</p>
            </div>
            <div className="dish-card">
              <img src="salade-nicoise.webp" alt="Salade Niçoise" />
              <h4>Salade Niçoise</h4>
              <p>Tuna, olives, eggs, and greens</p>
            </div>
            <div className="dish-card">
              <img src="canard-confit.jpg" alt="Duck confit" />
              <h4>Duck Confit</h4>
              <p>Slow-cooked duck leg</p>
            </div>
          </div>
          <Link className="view-full-menu" to="/menu">→ View Full Menu</Link>
        </motion.section>

        <motion.section 
          className="history" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ delay: 0.8 }}
        >
          <h3>Our Story</h3>
          <p>
            Established in 1985 in the heart of Paris, our bistro continues a rich family tradition of French gastronomy.
            Every recipe is a celebration of passion, authenticity, and timeless flavors.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

export default Home;
