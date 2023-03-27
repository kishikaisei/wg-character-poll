import './App.css';
import React, { useState } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./assets/portraits', false, /\.png$/));
// const imageNames = images.map((item) => 
//   item.split('/').pop().split('.')[0]
// )

function handleVote(image) {
  console.log(image);
}
function App() {
  //const initialVotes = {};
  //imageNames.forEach(character => {
  //  initialVotes[character] = 0;
  //});

  //const [votes, setVotes] = useState(initialVotes);

  //function handleVote(choice) {
  //  setVotes(prevState => ({
  //    ...prevState,
  //    [choice]: prevState[choice] + 1
  //  }));
  //}

  return (
    <form action="" method="post" id="poll_form">
      <div>
        <label for="poll_title">Title</label>
        <input type="text" name="poll_title" id="poll_title" />
      </div>
      <div>
        <label for="poll_duration">Duration</label>
        <input type="number" name="poll_duration" id="poll_duration" min="15" max="1800" step="1" value="60" />
      </div>
  
      {images.map((image) => (
        <label>
          <input type="radio" name="test" value="small" checked />
          <img
            className='hero'
            key={image}
            src={image}
            alt="Hero"
            onClick={() => handleVote(image.split('/').pop().split('.')[0])}
          />
        </label>
      ))}
      <input type="submit" value="Create Poll" />
    </form>
  );
}

export default App;
