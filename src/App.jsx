import { useState } from "react";
import logo from "./assets/EmploezLogo.png";
import { motion } from "framer-motion";
import MainproviderPage from "./MainproviderPage";

function App() {

  const [openPage, setPageOpen] = useState(sessionStorage.getItem("showed") || false);

  const handlePageChange = () => {
    setPageOpen(true);
    sessionStorage.setItem("showed",true)
  };

  if (!openPage) {
    return <AnimationPage onAnimationComplete={handlePageChange} key="animi" />;
  } else {
    return <MainPage />;
  }
}

export default App;

const AnimationPage = ({ onAnimationComplete }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {/* Parent Animation Container */}
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.5,
            delayChildren: 0.5,
          },
        }}
        // Trigger page change after all animations
      >
        {/* Logo Animation */}
        <motion.img
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={logo}
          alt="Emploez Logo"
          className="w-[150px] h-[100px] md:w-[200px] md:h-[150px] z-10"
        />

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex space-x-0"
        >
          {"Emploez.in".split("").map((char, index, arr) => (
            <motion.span
              key={index} // Unique key for each span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
              className={"text-3xl md:text-4xl font-bold text-orange-600"}
            >
              {char}
            </motion.span>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            onAnimationComplete={onAnimationComplete}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const MainPage = () => {
  return (
    <MainproviderPage/>
  );
};
