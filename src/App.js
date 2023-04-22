import Home from './components/Home/home';
import CartContent from "./components/CartContent/CartContent";
import Detail from "./components/Detail/Detail";
import DataProvider from './components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
