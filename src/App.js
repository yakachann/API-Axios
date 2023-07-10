import { useState } from 'react';
import axios from 'axios';

function App() {
  //quoteは状態変数、setQuoteは状態変数の値を更新するための関数
  const [quote, setQuote] = useState('');
  const getQuote = () => {
    axios.get('http://api.quotable.io/random').then(res => {
      console.log(res.data.content);
      setQuote(res.data.content);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div className='App'>
      <button onClick={getQuote}>Get Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default App;