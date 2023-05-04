import './App.css';
import NavBar from './components/navbar';
import { Outlet } from 'react-router-dom';
// import { UserContext } from './components/context';

function App() {
  return (
    <div>
    
      {/*  render */}
      <NavBar/>
      <br/>
      <div className="centered">
      <Outlet />
      <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default App;
