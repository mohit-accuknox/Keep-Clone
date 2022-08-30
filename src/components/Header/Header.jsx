import React from "react";
import { useState } from "react";
import "../styles/Header.css";

const Header = (prop) => {
  

  return (
    <div>
      <section className="navbar">
        <div className="left">
          <img src="/images/icon.png" alt="" />
          <h3 className="logoTitle">Keep</h3>
        </div>
        <div className="searchBar">
          <input className="searchBarInput" type="text" placeholder="Search" onChange={(e) => prop.search(e.target.value)}/>
        </div>
      </section>
    </div>
  );
};

export default Header;
