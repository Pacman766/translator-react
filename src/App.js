import { useState } from 'react';
import './app.scss';

function App() {
  const [id, setId] = useState(0);
  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [cards, setCards] = useState([]);

  const onChange = (key, value) => {
    setWord({
      [key]: value,
    });
  };

  const addCard = () => {
    const newCard = {
      id: id + 1,
      value: {
        word: word.slice(),
        translate: translate.slice(),
      },
    };
    setCards({
      id: newCard.id,
      word: '',
      translate: '',
      cards: [...cards, newCard],
    });
  };

  return (
    <div className="App">
      <h1>Карточки англ слов</h1>
      Введите слово
      <div className="container">
        <input
          placeholder="type in english"
          type="text"
          className="english"
          value={word}
          onChange={(e) => onChange('word', e.target.value)}
        />
        <input
          placeholder="введите на русском"
          type="text"
          className="russian"
          value={translate}
          onChange={(e) => onChange('translate', e.target.value)}
        />
        <button сlassName="btn add-btn" onClick={() => addCard()}>
          {' '}
          Добавить
        </button>
        <div>
          {cards.map((card) => {
            return (
              <div key={card.id} className="card">
                {card.value.word}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
