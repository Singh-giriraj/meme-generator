import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
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
    setInit(1);
    return setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  const [init, setInit] = React.useState(0);

  function handleChange(event) {
    const { name, value } = event.target;
    return setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function ShowMeme() {
    return (
      <section className="meme">
        <img src={meme.randomImage} alt="random meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </section>
    );
  }
  function ShowHowTo() {
    return (
      <section className="HowTo">
        <h1>how to generate meme?</h1>
        <p>
          Type your meme text and then click on the <span>get meme image</span>{" "}
          Button
        </p>
        <p>You will see the generated meme here!</p>
      </section>
    );
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
          <span>{init ? "get new meme image" : "get meme image"}</span>
        </button>
      </section>
      {init ? <ShowMeme /> : <ShowHowTo />}
    </main>
  );
}
