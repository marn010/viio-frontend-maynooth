
import './footer.css'
export default function Footer(){
  return(
    <div className="footer">
      <div className="home">
        <a href="/">Home</a>
      </div>
      <a href='/search'>
        <img src="./assets/search.png" alt="" width="40px" height="40px"/>
      </a>
      <a href='/cart'>
        <img src="./assets/cart.png" alt="" width="40px" height="40px"/>
      </a>
      <a href='/favorites' >
        <img src="./assets/fav.png" alt="" width="40px" height="40px"/>
      </a>
      <a href='/login'>
        <img src="./assets/profile.png" alt="" width="40px" height="40px"/>
      </a>
    </div>
  )
}