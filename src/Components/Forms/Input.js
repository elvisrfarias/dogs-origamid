import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, value, placeholder, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={styles.input}
      />
      <p className={styles.error}>Favor preencher todos os campos carretamente!</p>
    </div>
  );
};

export default Input;
