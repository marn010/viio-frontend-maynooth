import Carousel from "react-multi-carousel";
import Product from "./Product";

import 'react-multi-carousel/lib/styles.css';
import { Component} from "react";


export default class RoomIdeas extends Component {  
  render(){
  const data = this.props.data
  const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
  };
  let id =-1;
  const cart=2;
  return (
    <div>
      <h3>
        Room Ideas
      </h3>
      <Carousel
        autoPlay={false}
        autoPlaySpeed={4000}
        arrows={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        draggable={true}
        customTransition="all 1s "
        transitionDuration={900}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="" 
        centerMode={false}
        renderDotsOutside={false}
      >
        {
          data?.carts[0].products.map((item,key) => {
            id = id +1;
              return (
                <div className="IdeasBox" key={key}>
                    { <Product id={id} key={id} data={data} cart={cart}/>}
                </div>
              );
          })
        }
      </Carousel>
    </div>
      
  );
}
}
/*
{console.log(data)}
        {
          data?.carts[0].products.map((item,key) => {
            id = id +1;
              return (
                <div className="ProductBox" key={key}>
                    { <Product id={id} key={id} data={data}/>}
                </div>
              );
          })
        }
*/