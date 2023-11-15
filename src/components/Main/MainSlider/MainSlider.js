import Carousel from "react-multi-carousel";
import Product from "./Product";
import { Component } from "react";

import 'react-multi-carousel/lib/styles.css';

export default class Slider extends Component {
  render(){
    const { data } = this.props;
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
  return (
      <Carousel
        autoPlay={true}
        autoPlaySpeed={4000}
        arrows={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        draggable={true}
        customTransition="all 1s "
        transitionDuration={900}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="" /*carousel-item-padding*/
        centerMode={false}
        renderDotsOutside={false}
      >
        {
          data.map(() => {
            id = id +1;
              return (
                <div className="ProductBox">
                    <Product id={id}/>
                </div>
              );
          })
        }
      </Carousel>
  );
  }
}
