import logo from './logo.svg';
import './App.css';
import NaveBar from './compontents/libarary/NaveBar';
import Home from './compontents/home/Home';
import { Container } from '@mui/material';
import Footer from './compontents/section/subscriptionSection/footer/Footer';
import Posts from './compontents/posts/Posts';

function App() {
  return (
    <div className="App">
      <NaveBar />
      <Container>
        {/* <Home /> */}
        <Posts/>
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
