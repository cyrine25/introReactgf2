import './App.css';
import First, { Fourth } from './components/First';
import { Second, Third } from './components/Second';
function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
    </div>
  );
}

export default App;
