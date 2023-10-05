import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Veuillez saisir des valeurs pour effectuer des calculs');
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <Screen input={input} />
        <div className='rang'>
          <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
        <div className='rang'>
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        <div className='rang'>
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
        <div className='rang'>
          <Button handleClic={result}>=</Button>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>/</Button>
        </div>
        <div className='rang'>
          <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
