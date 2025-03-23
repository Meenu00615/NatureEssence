import React from 'react';
import ProductCard from './ProductCard';
import './Gallery.css';

const images = [
  { src: '2 (1).jpg', title: 'Image 1', description: 'Description 1' },
  { src: '2 (2).jpg', title: 'Image 2', description: 'Description 2' },
  { src: '1(10).jpeg', title: 'Image 3', description: 'Description 3' },
  { src: '4 (1).jpeg', title: 'Image 4', description: 'Description 4' },
  { src: '3(11).jpeg', title: 'Image 5', description: 'Description 5' },
  { src: '6.jpeg', title: 'Image 6', description: 'Description 6' },
  { src: '5.jpeg', title: 'Image 7', description: 'Description 7' },
  { src: '2 (3).jpg', title: 'Image 8', description: 'Description 8' },
  { src: '2 (4).jpg', title: 'Image 9', description: 'Description 9' },
  { src: '2 (5).jpg', title: 'Image 12', description: 'Description 12' },
  { src: '2 (6).jpg', title: 'Image 13', description: 'Description 13' },
  { src: '2 (7).jpg', title: 'Image 7', description: 'Description 14' },
  { src: '2 (8).jpg', title: 'Image 8', description: 'Description 15' },
  { src: '2 (9).jpg', title: 'Image 9', description: 'Description 16' },
  { src: '2 (10).jpg', title: 'Image 10', description: 'Description 17' },
  { src: '2 (11).jpg', title: 'Image 11', description: 'Description 18' },
  { src: '2 (12).jpg', title: 'Image 12', description: 'Description 19' },
  { src: '1 (1).jpg', title: 'Image 13', description: 'Description 20' },
  { src: '1 (2).jpg', title: 'Image 14', description: 'Description 21' },
  { src: '1 (3).jpg', title: 'Image 15', description: 'Description 22' },
  { src: '1 (4).jpg', title: 'Image 16', description: 'Description 23' },
  { src: '1 (5).jpg', title: 'Image 17', description: 'Description 24' },
  { src: '1 (6).jpg', title: 'Image 18', description: 'Description 25' },
  { src: '1 (7).jpg', title: 'Image 19', description: 'Description 26' },
  { src: '1 (10).jpg', title: 'Image 20', description: 'Description 27' },
  { src: '3 (1).jpeg', title: 'Image 21', description: 'Description 28' },
  { src: '3 (2).jpeg', title: 'Image 22', description: 'Description 29' },
  { src: '3 (3).jpeg', title: 'Image 23', description: 'Description 30' },
  { src: '3 (4).jpeg', title: 'Image 24', description: 'Description 31' },
  { src: '3 (5).jpeg', title: 'Image 25', description: 'Description 32' },
  { src: '3 (6).jpeg', title: 'Image 26', description: 'Description 33' },
  { src: '3 (7).jpeg', title: 'Image 27', description: 'Description 34' }
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ProductCard
          key={index}
          src={image.src}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
