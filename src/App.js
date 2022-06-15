import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const getStoreData = async () => {
    try {
      const req = await axios.get('https://fakestoreapi.com/products');
      const res = await req.data
      setProducts(res);
    }
    catch (err) {console.log(err)}
  }
  let shortenedList = products.slice(0, 5)

  const addToCart = (id) => {
    let addCard = shortenedList.find(item => item.id === id);
    setCart(prevState => [...prevState, addCard]);
    console.log(cart);
  }

  return (
    <div className="App">
      <button onClick={() => getStoreData()}>Get Data</button>
      <Card 
        addToCart={addToCart}
        products={shortenedList}
      />
    </div>
  );
}

export default App;
