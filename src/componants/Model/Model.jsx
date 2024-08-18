import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import an icon

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
      >
        <div className="flex items-center justify-center mb-4">
          <AiOutlineCheckCircle className="text-green-500 text-4xl" /> {/* Add an icon */}
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Alert</h2>
        <p className="mb-6 text-center text-black">{message}</p>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
