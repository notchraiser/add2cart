import React from "react";
import "./index.css";
import { ADDTOCART, ADD, SUBTRACT } from "../../constants/actionTypes";

const ProductList = ({ products, items, dispatch }) => {
  return (
    <div className="layout-row wrap justify-content-center flex-70 app-product-list">
      {products.map((product, i) => {
        return (
          <section
            className="w-30"
            data-testid={"product-item-" + i}
            key={product.id}
          >
            <div className="card ma-16">
              <img
                alt="Your Cart"
                src={product.image}
                className="d-inline-block align-top product-image"
              />
              <div className="card-text pa-4">
                <h5 className="ma-0 text-center">{product.name}</h5>
                <p className="ma-0 mt-8 text-center">${product.price}</p>
              </div>

              <div className="card-actions justify-content-center pa-4">
                <button
                  className="addtocart"
                  className="x-small outlined"
                  data-testid="btn-item-add"
                  onClick={(e) => {
                        dispatch({
                        type: ADDTOCART,
                        payload: { item: product.name, quantity: 1 },
                        }) ;                        
                    }                 
                  }
                >
                  Add To Cart
                </button>

                {items.map((cartItem) =>
                  cartItem.item === product.name ? (
                    <div
                      className="layout-row justify-content-between align-items-center"
                      key={cartItem.item}
                    >
                      <button
                        className="x-small icon-only outlined"
                        data-testid="btn-quantity-subtract"
                        onClick={() => {
                          dispatch({ type: SUBTRACT, name: product.name });
                        }}
                      >
                        <i className="material-icons">remove</i>
                      </button>

                      <input
                        type="number"
                        disabled
                        value={cartItem.quantity}
                        className="cart-quantity"
                        data-testid="cart-quantity"
                      />

                      <button
                        className="x-small icon-only outlined"
                        data-testid="btn-quantity-add"
                        onClick={() => {
                          dispatch({ type: ADD, name: product.name });
                        }}
                      >
                        <i className="material-icons">add</i>
                      </button>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

const UpdateMode = {
  ADD: 1,
  SUBTRACT: 1,
};

export default ProductList;
