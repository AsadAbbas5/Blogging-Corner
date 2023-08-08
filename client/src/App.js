import logo from './logo.svg';
import './App.css';
import NaveBar from './compontents/libarary/NaveBar';
import Home from './compontents/home/Home';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NaveBar/>
      <Container>

      <Home/>
      </Container>
    </div>
  );
}

export default App;
