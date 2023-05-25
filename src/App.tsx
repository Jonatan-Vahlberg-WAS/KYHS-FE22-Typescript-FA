import React from 'react';
import logo from './logo.svg';
import './App.css';
import { database } from './utils/firebase';
import { onValue, ref } from 'firebase/database';

function App() {

  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const productsRef = ref(database, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const _products: Product[] = Object.entries(data).map(([id, product]:[string, any]) => ({
        id,
        ...product,
      }));
      setProducts(_products);
    });
  }, []);

  console.log(products);

  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.name}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
