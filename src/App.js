import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Timeline from './components/timeline'
import Teams from './components/teams'
function App() {
  return (
    <>

  <Navbar/>
   <Header/>
    <About/>
  <Timeline/>
  <Teams/>
  <Footer/>
    </>
  );
}

export default App;
