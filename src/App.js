import { BrowserRouter as CreateElement, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Layout from './components/Layout';
import './style.css';

function App() {
  return (
    <CreateElement>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </CreateElement>
  );
}

export default App;
