import { Component } from "react";
import { Link } from "react-router-dom";

export default class RecomendedProduct extends Component{
  render(){
    const {data,id} = this.props
    const cart =2;
    const item = data.carts[cart].products[id]
    return(
      <div className="RecomendedRoomPic">
        <Link to={"/product"} state={{data:data,id:id,cart:cart}}>
          <img src={item?.thumbnail} alt=""   />
        </Link>
        <div className="itemInfo">
          <p>{item.title}<br/></p>
          <p>Rp. {item.price}</p>
        </div>
      </div>
    )
  }
}