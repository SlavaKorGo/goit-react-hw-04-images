import React, {useState} from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem ({ webformatURL, tags, largeImageURL}) {
 
  const [showModal, setShowModal] = useState(false)
   
  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
 
    return(
      <>
            <li className={css.ImageGalleryItem} 
            onClick={onOpenModal}>
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
              onClose={onCloseModal}/>}
      </>
          )
  
}; 

