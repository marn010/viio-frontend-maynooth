import Footer from "../Footer/main";
import Slider from "./MainSlider/MainSlider";
import Recomended from "./MainSlider/Recommended";
import RoomIdeas from "./MainSlider/RoomIdeas";
import ShopByRoom from "./MainSlider/ShopByRoom";
import { data } from "./MainSlider/data";

import './main.css'
export default function Main() {
  return (
    <div className="Main">
      <h1>MAYNOOTH</h1>
      <img src="" alt="" />
      <Slider data={data}/>
      <RoomIdeas data={data} />
      <ShopByRoom data={data} />
      <Recomended data={data} />

      <Footer />
    </div>
  );
}