import React, { useState } from 'react';
import { Navegação, Logo } from "./style";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Navegação>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <FiAlignJustify />
            </div>
            <header className={`header ${menuOpen ? "open" : ""}`}>
                <Logo>
                <img src="/logo.svg" alt="Logo" />
            </Logo>
                <nav className="nav">
                     
                    <ul className="nav-list">
                        <li>
                            <a href="/" className="nav-a-list" onClick={toggleMenu}>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="nav-a-list" onClick={toggleMenu}>
                                Sobre nós
                            </a>
                        </li>
                        <li>
                            <a href="/experience" className="nav-a-list" onClick={toggleMenu}>
                                Presença
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="nav-a-list" onClick={toggleMenu}>
                                Presentes
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="nav-a-list" onClick={toggleMenu}>
                                Registro
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Navegação>
    );
}