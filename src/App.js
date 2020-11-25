import React, { useState, useEffect, useReducer} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";
import { reducer, initialItems } from './reducer/reducer';

const title = "HackerShop";

const App = () => {
    
    const [items, dispatch] = useReducer(reducer, initialItems); 
    const [products, setProducts] = useState([]);    
    useEffect(()=>{
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        setProducts(products);

    },[])

    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row shop-component">
                <ProductList products={products} items={items} dispatch={dispatch} />
                <Cart items={items}/>
            </div>
        </div>
    )
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
