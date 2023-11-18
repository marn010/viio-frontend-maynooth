
import { useEffect } from "react";
import Reviews from "./reviews";
import { useLocation, useNavigate } from "react-router-dom";

import './main.css'
export default function Product(){
  const navigate = useNavigate();
  useEffect(()=>{
    const isUser=localStorage.getItem("user")
    if(!isUser) navigate('/main')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  let { state } = useLocation();
  console.log(state);
  const cart = state.cart;
  const id = state.id;
  const item = state.data?.carts[cart].products[id]
  return (
    <div className="productBox">
      <img src={item.thumbnail} alt=""/>
      <h2>{item.title}</h2>
      <div className="itemPrice">
        <p>
          Rp. {item.price} {item.discountPercentage}% OFF
          
        </p>
        <del><small>Rp. {item.discountedPrice}</small></del>
        <p>
          {item.total} Sold
        </p>
      </div>
      <div className="Colors">
        <p>
          Select variation (6 Color)
        </p>
        <img src="./assets/color.png" alt="" />
        <img src="./assets/color.png" alt="" />
        <img src="./assets/color.png" alt="" />
        <img src="./assets/color.png" alt="" />
        <img src="./assets/color.png" alt="" />
        <img src="./assets/color.png" alt="" />
      </div>
      <div className="description">
        <h3>
          Description
        </h3>
        <p>Pariatur elit proident quis mollit elit enim nostrud ipsum minim. Velit aute elit exercitation officia deserunt quis. Nisi voluptate et fugiat commodo occaecat do amet nostrud nisi id labore nostrud deserunt nostrud. Duis ad proident reprehenderit tempor cillum. Veniam ipsum veniam voluptate dolor enim Lorem officia. Id eu proident consectetur laboris consequat cillum cupidatat esse sunt eiusmod commodo in. Lorem dolore amet excepteur magna irure pariatur id eiusmod sit dolor ad eu.</p>
      </div>
      
      <div className="reviews">
        <h3>
          Reviews
        </h3>
        <Reviews/>
      </div>
    </div>
  )
}