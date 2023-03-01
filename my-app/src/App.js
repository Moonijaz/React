
import './App.css';
import Header from './Components/Header';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Achievement from './Components/Achievement';
import Skills from './Components/Skills';

function App() {
  return (
  <>
  <header>
    <h1>Resume</h1>
  </header>
  <Header/>
  <Education/>
  <Experience/>
  <Achievement/>
  <Skills/>
  </>
  )
}

export default App;
