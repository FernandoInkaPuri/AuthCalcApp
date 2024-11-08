import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;