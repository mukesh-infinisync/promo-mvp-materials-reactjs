import React from 'react';
import { motion } from 'framer-motion';

const LoadingFallback: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f0f0f0', // Light background for better visibility
        color: '#333', // Dark text for contrast
      }}
    >
      {/* Animated Spinner Loader */}
      <motion.div
        style={{
          width: 50,
          height: 50,
          border: '5px solid #ccc',
          borderTop: '5px solid #007bff', // Blue accent for the spinner
          borderRadius: '50%',
          marginBottom: 20,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Meaningful Loading Text with Fade-in Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{ fontSize: '18px', fontWeight: 'bold' }}
      >
        Loading content... Please wait.
      </motion.p>
      
      {/* Additional Subtext for Context */}
      <p style={{ fontSize: '14px', marginTop: 10, color: '#666' }}>
        Fetching the latest data to provide the best experience.
      </p>
    </div>
  );
};

export default LoadingFallback;