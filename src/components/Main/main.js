import { useEffect, useState } from "react";
import Footer from "../Footer/main";
import Slider from "./MainSlider/MainSlider";
import RoomIdeas from "./MainSlider/RoomIdeas";
import Recomended from "./MainSlider/Recommended";
import ShopByRoom from "./MainSlider/ShopByRoom";
//import { data } from "./MainSlider/data";
import { API_URL } from "../Auth/constants";

import './main.css'
export default function Main() {
  const [data, setData] =useState();
  useEffect(()=>{
    fetch(`${API_URL}/data`,{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res) => {
      //console.log(res);
      return res.json()}
    ).then((data) => {
        //console.log(data);
        setData(data)
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