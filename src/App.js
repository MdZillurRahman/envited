import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing Page/LandingPage';
import CreateEvent from './Components/Create Event/CreateEvent';
import Events from './Components/Events/Events';
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/create" element={<CreateEvent/>} />
        <Route path="/event" element={<Events/>} />
      </Routes>
      
    </div>
  );
}

export default App;
