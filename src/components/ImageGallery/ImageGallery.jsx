import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

export const ImageGallery = ({images}) => {
    return (
        <ul className={css.ImageGallery}> 
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        ))}
        </ul>
    )
}; 


