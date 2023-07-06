import React from "react";
import css from './Buton.module.css'

export const Button = ({ onClick }) => (
    <button className={css.Button} 
    onClick={onClick} type="button">
      Load more
    </button>
  );