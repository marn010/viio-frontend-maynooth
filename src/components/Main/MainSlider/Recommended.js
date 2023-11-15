import Product from "./Product";
import { Component } from "react";

import 'react-multi-carousel/lib/styles.css';
import RecomendedProduct from "./RecomendedProduct";

export default class Recomended extends Component {
  render(){
    const {data}=this.props
    let id=-1;
    return(
      <div className="Recomended">
        <h2>Recomended for you</h2>
          {
            data.map(() => {
              id = id +1;
                return (
                  <div className="hi">
                      <RecomendedProduct id={id} key={id}/>
                  </div>
                );
            })
          }              
      </div>
    )
  }
}
