// import './App.css';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import AlbumFeature from './features/Album';
import ErrorsRouter from './features/Todo/components/TodoErrors';
import HomePage from './features/Todo/components/TodoHomePage';
import DetailPage from './features/Todo/pages/DetailPage';
import ListPage from './features/Todo/pages/ListPage';
import Header from './components/Header';
import productsApi from './api/productApi';
import { data } from './container/Header/data';
import Footer from './components/Footer';
import ProductFeature from './features/TodoProducts';

function App() {
  const [dataProduct, setdataProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productsApi.getAll();
      setdataProduct(productList);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  let showData =
    dataProduct ? (
      <ProductFeature data={dataProduct} />
    ) : (
      <ErrorsRouter />
    );
    console.log('data',showData);
  return (
    <div className="App">
      <Header data={data} is_login />
      {/* co data tra ve thi show */}
      {showData}

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/todos">Todo</Link>
            </li>
            <li>
              <Link to="/albums">albums</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="*" element={<ErrorsRouter />} />
          <Route path="/" element={<HomePage />} />

          <Route path="todos" element={<ListPage />}>
            <Route path="listpage" element={<HomePage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
          <Route path="albums" element={<AlbumFeature />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
