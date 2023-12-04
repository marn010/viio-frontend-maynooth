import RecomendedProduct from "./RecomendedProduct";


import 'react-multi-carousel/lib/styles.css';

export default function Recomended (props){
  
  const {data}=props;
  
  
    
    let id=-1;
    return(
      <div className="Recomended">
        <h2>Recomended for you</h2>
          {
            data?.carts[0].products.map((item,key) => {
              id = id +1;
                return (
                  <div className="RecomendedProduct" key={key}>
                      <RecomendedProduct id={key} key={id} data={data}/>
                  </div>
                );
            })
          }              
      </div>
    )
}
