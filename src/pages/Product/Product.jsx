import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=Compress&cS=tinysrgbáw=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinys%20rgb&w=1600&%20lazy=load",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$1999</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae impedit
          veniam esse voluptatibus laboriosam, quibusdam reprehenderit magnam
          minus itaque sequi maiores nam consequuntur suscipit nihil amet
          quisquam necessitatibus iste porro.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((pre) => pre === 1 ? 1 : pre -1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((pre) => pre + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr/>
        <div className="details">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
