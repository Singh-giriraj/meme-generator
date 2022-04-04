import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header--title">Meme Generator</h1>
      <div className="github">
        <img
          // src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          className="github--image"
          alt="icon"
        />
        <a className="github--link" href="https://github.com/Singh-giriraj">
          &copy;Singh-Giriraj
        </a>
      </div>
    </header>
  );
}
