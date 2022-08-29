import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://cutewallpaper.org/24/netflix-png/red-73b72-large-75e03-netflix-1d583-logo-05222-text-b1307-free-a405b-image-cfeb6-pxpng.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://ih1.redbubble.net/image.618379802.1473/flat,800x800,075,f.u2.jpg" alt="usuario" />
                </a>
            </div>
        </header>
    )
}