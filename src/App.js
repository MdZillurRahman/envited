import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing Page/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
