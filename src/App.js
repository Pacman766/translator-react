import { useState } from 'react';
import './app.scss';

function App() {
  const [id, setId] = useState(0);
  const [word, setWord] = useState('');
  const [translate, settranslate] = useState('');
  const [cards, setCards] = useState([]);

  // const onChange = (e) => {
  //   e.target.value
  // }

  return (
    <div className="App">
      <h1>Карточки англ слов</h1>
      <div className="container">
        <input placeholder='type in english' type="text" className="english" value={word} />
        <input placeholder='введите на русском' type="text" className="russian" onChange={(e) => onChange('word', e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
