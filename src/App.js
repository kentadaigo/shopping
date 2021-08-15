import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TopWrapper from './component/TopWrapper';
import MainWrapper from './component/MainWrapper';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TopWrapper />
      <MainWrapper />
      <Footer />
    </div>
  );
}

export default App;
