import StepsHeader from './StepHeader'
import './styles.css'
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import OrderLocation from './OrderLocation';

function Orders(){
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);

  return(
    <div className="orders-container">
     <StepsHeader />
      <ProductsList products={products}/>
      <OrderLocation />
    </div>
  )
}

export default Orders;