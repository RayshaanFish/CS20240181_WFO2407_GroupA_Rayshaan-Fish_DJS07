import memesData from "../memesData.js";

function Meme() {
  //   const [memeImage, setmemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <label>
          Top text
          <input type="text" placeholder="Top text" className="form--input" />
        </label>
        <label>
          Bottom text
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
        </label>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
    </main>
  );
}

export default Meme;
