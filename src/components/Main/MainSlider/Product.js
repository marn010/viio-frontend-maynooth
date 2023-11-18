import { Component } from "react";

export default class Product extends Component{
  render(){
    const {data,id,cart} = this.props
    const item = data.carts[cart].products[id]
    return(
      <div className="RoomPic">
        <img src={item?.thumbnail} alt=""  />
      </div>
    )
  }
}