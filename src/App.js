import {useState} from 'react';
import './App.css';

let emojiDatabase = {
  "😎" : "cool",
  "🤩" : "starstruck",
  "😉" : "wink",
  "🤔" : "Thinking",
  "😊" : "Happy face",
  "😢" : "Teary eyes",
  "😂" : "LOL",
  "😍" : "Heart eyes",
  "😮" : "Shocked",
  "😴" : "Sleepy face",
  "😀" : "Smiley",
  "😋" : "Savoring Food",
  "😅" : "Happy sweat",
  "🤗" : "Hug",
  "😣" : "Helpless",
  "🙄" : "Eye roll",
  "😑" : "Straight face",
  "😙" : "Kissy",
  "🤑" : "Money face",
  "🤯" : "Mind blown",
  "🤐" : "Mouth zipped",
  "😶" : "Speechless",
  "🤮" : "About to throw up",
  "😇" : "Angel",
  "😠" : "Angry",
  "🥶" : "Frozen",
  "🤓" : "Nerd"
};

let emojiArr = Object.keys(emojiDatabase);
function App() {

  const [meaning , setMeaning] = useState("");
  function inputChangeHandler(event){
    let emojiMeaning = emojiDatabase[event.target.value];
    console.log(emojiMeaning);
    if(event.target.value === ""){
      emojiMeaning = "";
      setMeaning(emojiMeaning);
    }
    if(emojiMeaning === undefined){
      emojiMeaning = "We don't have that emoji in our database";
      setMeaning(emojiMeaning);
    }
    setMeaning(emojiMeaning);
  }

  function clickEmojiHandler(event){
      let clickedEmoji = event.target.innerText;
      let emojiMeaning = emojiDatabase[clickedEmoji];
      setMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <h1 className="heading">Emoji Dictionary</h1>
      <input type="text" className="input-ele" onChange={inputChangeHandler}  placeholder="type in the emoji here"/>
      <h2 className="font-change">Meaning : {meaning}</h2>
      <h2 className="font-change">Emojis we know!</h2>
      <div className="emojiContainer">
      {
          emojiArr.map((item)=>{
            return <span className="emoji" onClick={clickEmojiHandler}>{item}</span>
          })
      }
      </div>
      
    </div>
  );
}

export default App;
