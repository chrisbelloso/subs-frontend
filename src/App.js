import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SignupView from './Views/SignupView';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={ <SignupView /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
