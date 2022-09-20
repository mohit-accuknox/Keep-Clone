import React from "react";
import { useState } from "react";
import "../styles/Header.css";
import { motion } from "framer-motion";

const Header = (prop) => {
  return (
    <div>
      <motion.section
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="navbar"
      >
        <div className="left">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            src="/images/icon.png"
            alt=""
          />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="logoTitle"
          >
            Keep
          </motion.h3>
        </div>
        <div className="searchBar">
          <motion.input
            whileFocus={{
              backgroundColor: "white",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
            }}
            initial={{opacity:0, width: "0"}}
            animate={{opacity:1, width: "100%"}}
            transition={{ whileFocus: {duration: 0.2}, delay:0.9}}
            className="searchBarInput"
            type="text"
            placeholder="Search"
            onChange={(e) => prop.search(e.target.value)}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Header;
