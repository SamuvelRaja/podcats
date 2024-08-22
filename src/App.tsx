
import './App.css';
import Mynav from './components/Mynav';
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <div>
      <Outlet/>
      <Mynav/>
    </div>
  )
}

export default App;
