import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quote';

function App() {
  return (
    <BrowserRouter>
      <Calculator />
      <Quotes />
    </BrowserRouter>
  );
}

export default App;
