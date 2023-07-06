import React, {useEffect} from "react";
import css from './Modal.module.css'

export function Modal ({url, alt, onClose}) {
    
    useEffect (() => {
      const handleClick = e => {
        if (e.code === 'Escape') 
        onClose();
      };
      window.addEventListener('keydown', handleClick);
      return () => {
        window.removeEventListener('keydown', handleClick);
      };
    },[onClose]); 

      const onOverlayClickClose = e => {
        if (e.target === e.currentTarget ) 
        onClose(); 
      };

        return (
            <div className={css.Overlay } 
            onClick={onOverlayClickClose}>
            <div className={css.Modal}>
              <img src={url} alt={alt} />
            </div>
          </div>
        )
};