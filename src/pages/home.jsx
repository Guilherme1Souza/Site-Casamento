import { Nav } from "../components/Nav";
import ParallaxGallery from "../components/Parallax";
import { useEffect, useState, useRef } from 'react';

import arrayImg from '../images/nest.jpg';
import arrayImg2 from '../images/eyes-two.jpg';
import arrayImg3 from '../images/shaky.jpg';

const imagensPreload = [arrayImg, arrayImg2, arrayImg3];

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '400px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#d19004',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

const preloaderStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '300px',
    height: '300px',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'opacity 0.8s ease-in-out',
  },
  text: {
    marginTop: '20px',
    fontSize: '16px',
  },
};

//Preloader com fade sequencial de imagens
const Preloader = ({ onImageLoad }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev < imagensPreload.length - 1 ? prev + 1 : prev
      );
    }, 1000); // duração entre uma imagem e outra

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={preloaderStyles.wrapper}>
      <div style={preloaderStyles.imageContainer}>
        {imagensPreload.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`preload-${index}`}
            onLoad={onImageLoad}
            style={{
              ...preloaderStyles.image,
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export function Home() {
  const [loaded, setLoaded] = useState(false);
  const [imgsCarregadas, setImgsCarregadas] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef(null);

 useEffect(() => {
  const minDelay = 4000; // 4 segundos
  const startTime = Date.now();

  if (imgsCarregadas === imagensPreload.length) {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(minDelay - elapsedTime, 0);

    setTimeout(() => setLoaded(true), remainingTime);
  }
}, [imgsCarregadas]);

  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) =>
        console.warn('Erro ao tentar tocar o áudio:', err)
      );
    }
    setShowModal(false);
  };

  const handleImageLoad = () => {
    setImgsCarregadas(prev => prev + 1);
  };

  return (
    <>
      {!loaded ? (
        <Preloader onImageLoad={handleImageLoad} />
      ) : (
        <>
          {showModal && (
            <div style={modalStyles.overlay}>
              <div style={modalStyles.modal}>
                <h2>Este site contém música</h2>
                <p>A música começará ao clicar em "OK".</p>
                <button onClick={handleStartMusic} style={modalStyles.button}>
                  OK
                </button>
              </div>
            </div>
          )}

          <Nav />
          <ParallaxGallery />
          <audio ref={audioRef} src="/King.mp3" loop />
        </>
      )}
    </>
  );
}
