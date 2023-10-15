import './App.css';
import Header from './components/header';
import Home from './components/home';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sidebar/>
    </div>
  );
}

export default App;
