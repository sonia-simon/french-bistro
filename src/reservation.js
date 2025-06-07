import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./reservation.css";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(
      `Thanks ${formData.name}, your reservation for ${formData.guests} guest(s) on ${formData.date} at ${formData.time} is confirmed!`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  return (
    <div className="reservation-wrapper">
      <h1>Book your table</h1>

      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />

          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />

          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />

          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" name="guests" min="1" max="20" required value={formData.guests} onChange={handleChange} />

          <button type="submit">Submit Reservation</button>
        </form>
      </div>

      <div className="reservation-side">
        <AnimatePresence>
          {confirmation && (
            <motion.div
              id="confirmation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {confirmation}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
