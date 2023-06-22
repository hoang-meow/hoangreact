// import './App.css';
import React, { useEffect } from 'react';
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


function App() {


  useEffect(() => {
    const params = {
      _limit :10,
    };
    const fetchProducts  = async () => {
      const productList = await productsApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  },[]);
  return (

   
    <div className="App">
     
      <Header data={data} is_login/>
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
