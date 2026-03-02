import './App.css';
import Header from "./components/Header";
import Content from './components/Content';
import { BrowserRouter, Route } from 'react-router';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Content />

    </BrowserRouter>
    
  )
}

export default App
