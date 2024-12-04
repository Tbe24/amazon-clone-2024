import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CarouselEffect from "./components/carousel/Carousel";
import Category from './components/Category/Category';
import Product from './components/product/Product';


function App() {
 

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App
