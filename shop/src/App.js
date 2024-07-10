
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Slider from "./pages/Slider";

import EndCard from "./pages/EndCard";



function App() {
  return (
    <div className="App">
      <Header></Header>
   
      <Slider></Slider>
     
      <EndCard></EndCard>
      <Footer/>
    </div>
  );
}

export default App;
