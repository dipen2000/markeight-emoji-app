import logo from './logo.svg';
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
  "😴" : "Sleepy face"
};

function App() {
  function inputChangeHandler(event){
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input type="text" onChange={inputChangeHandler}/>
    </div>
  );
}

export default App;
