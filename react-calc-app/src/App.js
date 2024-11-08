import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;