import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { ShoppingCart } from "lucide-react";

// const 

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const uniqueProducts = [...new Set(products.map((x) => x.name))];
  console.log("Products", uniqueProducts);
  console.log(uniqueProducts.find((productName) => productName === name));
  const renderFilteredProductCards = (items, index ) => {
    console.log("items", items);
    return (
      <div key={items.id + index} className="product-card">
        <h3>{items.name}</h3>
        <p>${items.price}</p>
        <button
          onClick={() => dispatch(addToCart(items))}
          className="add-to-cart">
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    );
  };
  
  const renderAllProductCards = ({ product, index }) => {
    return (
      <div key={product.id + index} className="product-card">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart">
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    );
  };
  
  const renderProductCardOrDisplayError = (products, name) =>{
    if(name=="")
    {
      return products.map((product,index)=>renderAllProductCards({product,index}))
    }
    else{
      return <span>No Product Exists</span>
    }
  }
  return (
    <div className="products-container">
      <div className="product-container-filter">
        <h2>Available Products</h2>
        {/* <select name="filterButton" className='filterButton' onChange={(e)=>setName(e.target.value)}>
        <option value="All">All</option>
        <option value="Headphones">Headphone</option>
        <option value="Laptop">Laptop</option>
        <option value="Mouse">Mouse</option>
      </select> */}
        <input
          type="text"
          placeholder="Search the product"
          onChange={(e) => setName(e.target.value)}
            
          
        />
      </div>


      <div className="products-grid">
        {uniqueProducts.find((productName) => productName.includes(name)) ? (
          products
            .filter((pro) => pro.name.includes(name))
            .map((product, index) =>
              renderFilteredProductCards(product, index)
            )
        ) : renderProductCardOrDisplayError(products,name)}
      </div>
    </div>
  );
};

export default ProductList;
