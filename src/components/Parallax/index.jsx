import React, { useEffect, useState, useRef } from 'react';
import { GalleryWrapper, Row, Image, Overlay, OverlayContent, OverlayText, OverlaySubtext } from './style';

import arrayImg from '../../images/dance.jpg';
import arrayImg2 from '../../images/eyes-two.jpg';
import arrayImg3 from '../../images/eyes.jpg';
import arrayImg4 from '../../images/hands.jpg';
import arrayImg5 from '../../images/hero.jpg';
import arrayImg6 from '../../images/home.jpg';
import arrayImg7 from '../../images/hug.jpg';
import arrayImg8 from '../../images/kiss-four.jpg';
import arrayImg9 from '../../images/kiss-three.jpg';
import arrayImg10 from '../../images/kiss-two.jpg';
import arrayImg11 from '../../images/kiss.jpg';
import arrayImg12 from '../../images/nest-negative.jpg';
import arrayImg13 from '../../images/nest.jpg';
import arrayImg14 from '../../images/shaky.jpg';
import arrayImg15 from '../../images/sorrindo-negative.jpg';
import arrayImg16 from '../../images/sorrindo.jpg';
import { Logo } from '../Nav/style';


const imageRows = [
  [arrayImg, arrayImg2, arrayImg3, arrayImg4, arrayImg5, arrayImg6],
  [arrayImg7, arrayImg8, arrayImg9, arrayImg10, arrayImg11, arrayImg12],
  [arrayImg13, arrayImg14, arrayImg15, arrayImg16, arrayImg, arrayImg2],

];


const ParallaxGallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.3 }
      );
  
      if (ref.current) observer.observe(ref.current);
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>    
    <GalleryWrapper ref={ref} isVisible={isVisible}>
      <Overlay />
      {imageRows.map((images, index) => (
        <Row
          key={index}
          style={{
            transform: `translateX(${(scrollY * 0.25) * (index % 2 === 0 ? 1 : -1)}px)`
          }}
        >
          {images.map((src, idx) => (
            <Image key={idx} src={src} alt={`Imagem ${idx}`} />
          ))}
        </Row>
      ))}
    </GalleryWrapper>
    </>
  );
};

export default ParallaxGallery;
