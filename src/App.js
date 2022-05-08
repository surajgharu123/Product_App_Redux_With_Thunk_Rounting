import './App.css';
//import ProductApp from './components/product_app';
import ProductAppFunc from './func_components/product_app_func';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProductFormFunc from './func_components/edit_product_func';
import { useSelector } from 'react-redux';

function App() {
  let selected_product = useSelector((state)=> state.selectedProduct);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductAppFunc></ProductAppFunc>} />
          <Route path="/EditForm" element={<EditProductFormFunc  product={selected_product}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
