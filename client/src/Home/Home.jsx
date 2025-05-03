import React from "react";
// import "../index.css";
import FileUpload from "../components/FileUpload";
import { IoMdCloudUpload } from "react-icons/io";
import { SiFsecure } from "react-icons/si";
import { GoFileSubmodule } from "react-icons/go";
import { TbUpload } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaLink, FaTwitter } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Header from "../components/HeaderComp";

const iconAnim = {
  animate: {
    scale: [1, 1.15, 1],
    y: [0, -10, 0],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const features = [
  {
    icon: <motion.div variants={iconAnim} animate="animate"><IoMdCloudUpload size={60} className="mx-auto mb-4 text-blue-500" /></motion.div>,
    title: "Easy File Uploads",
    desc: "Upload your files quickly and easily."
  },
  {
    icon: <motion.div variants={iconAnim} animate="animate"><SiFsecure size={55} className="mx-auto mb-4 text-green-500" /></motion.div>,
    title: "Secure Sharing",
    desc: "Share files securely with anyone."
  },
  {
    icon: <motion.div variants={iconAnim} animate="animate"><GoFileSubmodule size={55} className="mx-auto mb-4 text-purple-500" /></motion.div>,
    title: "Quick Access",
    desc: "Access your files from anywhere."
  },
];

const howItWorks = [
  {
    icon: <motion.div variants={iconAnim} animate="animate"><TbUpload size={55} className="mx-auto mb-4 text-blue-500" /></motion.div>,
    title: "Upload your file",
    desc: "Select and upload the file you want to share."
  },
  {
    icon: <motion.div variants={iconAnim} animate="animate"><FaLink size={55} className="mx-auto mb-4 text-purple-500" /></motion.div>,
    title: "Get your shareable link",
    desc: "Receive a link to share with anyone."
  },
  {
    icon: <motion.div variants={iconAnim} animate="animate"><FaShareSquare size={55} className="mx-auto mb-4 text-green-500" /></motion.div>,
    title: "Share with anyone",
    desc: "Send the link to your friends, family, or colleagues."
  },
];

const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
  }),
  hover: {
    scale: 1.06,
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
    transition: { type: 'spring', stiffness: 300 }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[70vh] py-16 px-4 relative overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 drop-shadow-xl tracking-tight"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-transparent bg-clip-text">
            <Typewriter
              words={[
                'FileFlow',
                'Fast. Secure. Effortless.',
                'Share Files Instantly.',
                'Modern File Sharing.'
              ]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl text-gray-700 mb-10 max-w-2xl font-light"
        >
          Share files effortlessly, anywhere, anytime. Modern, secure, and lightning fast.
        </motion.p>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link to="/upload">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              Get Started
            </button>
          </Link>
        </motion.div>
        {/* Animated background shapes */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -z-10 animate-pulse"
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-purple-200 rounded-full opacity-20 -z-10 animate-pulse"
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 drop-shadow-lg">Why Choose FileFlow?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-80 border-t-4 border-blue-400 hover:shadow-3xl transition-transform duration-300"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={boxVariants}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 drop-shadow-lg">How FileFlow Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {howItWorks.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-10 w-72"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={boxVariants}
              viewport={{ once: true }}
            >
              {step.icon}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Footer Section */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-8 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-4 gap-4">
          <div className="flex items-center gap-2 justify-center mb-2 md:mb-0">
            <span className="font-bold text-2xl tracking-tight">FileFlow</span>
            <span className="text-xs bg-white/20 rounded px-2 py-1 ml-2">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
              <FaInstagram size={28} />
            </a>
          </div>
          <div className="text-sm text-white/80 mt-2 md:mt-0">
            Made with <span className="text-pink-200">♥</span> by SoniKumari
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
