import React from "react";
import css from './Modal.module.css'

export class Modal extends React.Component {
    
    componentDidMount () {
        window.addEventListener('keydown', this.handleClick)
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleClick);
    }
  
    handleClick = e => {
        if (e.code === 'Escape') 
        {this.props.onClose()};
      };

     
    

      onOverlayClickClose = e => {
        if (e.target === e.currentTarget ) 
        {this.props.onClose()}; 
      };

     
    render() {
        const {url, alt} = this.props; 

        return (
            <div className={css.Overlay } onClick={this.onOverlayClickClose}>
            <div className={css.Modal}>
              <img src={url} alt={alt} />
            </div>
          </div>
        )
    }
};