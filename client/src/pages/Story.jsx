import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Story() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    { id: 1, title: 'Notre Histoire', image: 'image/product.webp', description: 'Découvrez l\'histoire de notre restaurant, de nos débuts à aujourd\'hui.' },
    { id: 2, title: 'Nos Valeurs', image: 'image/product.webp', description: 'Nous mettons un point d\'honneur à servir des produits frais et de qualité.' },
    { id: 3, title: 'L\'équipe', image: 'image/product.webp', description: 'Une équipe passionnée, toujours prête à satisfaire vos papilles.' },
  ];

  // Fonction pour passer à l'image suivante
  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  // Fonction pour passer à l'image précédente
  const prevStory = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  return (
    <main>
    <section className="story">
      <h2>Découvrez Notre Histoire</h2>
      <div className="story-container">
        
        <div className="story-slide">
          <img
            src={stories[currentIndex].image}
            alt={stories[currentIndex].title}
            className="story-image"
          />
          <div className="story-text">
            <h3>{stories[currentIndex].title}</h3>
            <p>{stories[currentIndex].description}</p>
          </div>
        </div>
        <button className="prev" onClick={prevStory}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={nextStory}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
    </main>
  );
}

export default Story;
