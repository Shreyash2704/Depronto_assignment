import './App.css';
import Blogs from './components/Blogs';
import Feedback from './components/Feedback';
import Introduction from './components/Introduction';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App bg-light">
      <Introduction />
      <Projects />
      <Blogs />
      <Feedback /><hr></hr>
    </div>
  );
}

export default App;
