import React from "react";
import styles from "./header.module.css";
import headerImage from "../../images/header.jpg";

const Header = () => {
  return <img src={headerImage} alt='header' className={styles.image} />;
};

export default Header;
