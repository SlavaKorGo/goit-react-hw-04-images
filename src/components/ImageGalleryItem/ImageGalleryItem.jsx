import React from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false
  };
   
  toggleModal = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}));
  };
  
  render() {
    const { webformatURL, tags, largeImageURL} = this.props;
    const {showModal} = this.state;

    return(
      <>
            <li className={css.ImageGalleryItem} 
            onClick={this.toggleModal}>
              <img className={css.ImageGalleryItemImage}
              src={webformatURL}
              alt={tags} 
              loading="lazy">
              </img>
             
            </li>
       {showModal && 
              <Modal 
              url={largeImageURL}
              alt={tags} 
              onClose={this.toggleModal}/>}
      </>
          )
  }
}; 