//@ts-check
import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return ( 
   <>
{  
   <BrowserRouter>
       <NavBar />
       <Routes>
         <Route  path='/' element={<ItemListContainer />}/>
         <Route  path='/category/:categoryId' element={<ItemListContainer />}/>
         <Route  path='/item/:itemId' element={<ItemDetailContainer />}/>
         <Route  path='/cart' element={<Cart />}/>
       </Routes>
   </BrowserRouter>
 
}
  
   </>
)}

export default App;