import { Nav } from "../components/Nav";
import ParallaxGallery from "../components/Parallax";
import { useEffect, useState, useRef } from 'react';

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

export function Home() {
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(true); // modal visível no início

  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) =>
        console.warn('Erro ao tentar tocar o áudio:', err)
      );
    }
    setShowModal(false); // oculta o modal
  };
  return (
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
  <Nav/>
  <ParallaxGallery />
  <audio ref={audioRef} src="/King.mp3" loop />
</>

  );
}