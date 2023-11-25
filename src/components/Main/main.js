import { useEffect, useState } from "react";
import axios from 'axios';

import { API_URL } from "../Auth/constants";
import Footer from "../Footer/main";
import Slider from "./MainSlider/MainSlider";
import RoomIdeas from "./MainSlider/RoomIdeas";
import Recomended from "./MainSlider/Recommended";
import ShopByRoom from "./MainSlider/ShopByRoom";
//import { data } from "./MainSlider/data";

import './main.css'
export default function Main() {
  const [data, setData] =useState();
  useEffect(()=>{
    axios({
      method: 'get',
      url: `${API_URL}/data`,
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res) => {
      //console.log(res);
      //console.log("data: ",res.data)
      setData(res.data)
    }
    )
  },[])
  return (
    <div className="Main">
      <h1>MAYNOOTH</h1>
      <img src="" alt="" />
        {data?<Slider data={data}/>:<></>}
        {data?<RoomIdeas data={data} />:<></>}
        {data?<ShopByRoom data={data} />:<></>}
        {data?<Recomended data={data} />:<></>}
      {/*  */}
      

      <Footer />
    </div>
  );
}