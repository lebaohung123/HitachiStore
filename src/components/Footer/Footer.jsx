import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            magni distinctio dolores? Minima animi dignissimos quo fugiat modi
            unde esse nemo placeat error, reprehenderit sapiente eaque porro, in
            repudiandae ab.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            unde voluptatem deleniti molestiae, voluptates placeat aspernatur
            non mollitia nam fugit suscipit, excepturi reiciendis accusamus,
            repellat rerum! Ab sapiente atque sequi!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">HitachiStore</span>
          <span className="copyright">Copyright 2023, All Rights Reserved</span>
        </div>
        <div className="right">
          <img
            src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
