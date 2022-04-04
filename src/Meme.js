import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeData, setAllMemeData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((resData) => setAllMemeData(resData.data.memes));
  }, []);

  function getNewImage() {
    const randomNumber = Math.floor(Math.random() * allMemeData.length);
    const url = allMemeData[randomNumber].url;
    return setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <section className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getNewImage}>
          <span>Get new meme image</span>
        </button>
      </section>
      <section className="meme">
        <img src={meme.randomImage} alt="random meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
