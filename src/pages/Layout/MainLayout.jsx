import "./index.css"
import Logo from "../../assets/audiophile.svg"
import Exit from "../../assets/door-open-solid.svg"
import Cart from "../../assets/Combined Shape.svg"
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import userImg from "../../assets/User.png"
import { NavLink, Link } from "react-router-dom"

function MainLayout({children}) {
  function handleExit() {
    localStorage.removeItem('token')
  }
  return (<>
      <div className="mainer">
      <header className="header">
        <div className="container main">  
        <div className="logo"><Link to="/"><img className="first-logo" src={Logo} alt="logo" /></Link></div>
        <div className="search">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/headphones">HEADPHONES</NavLink>
        <NavLink to="/speakers">SPEAKERS</NavLink>
        <NavLink to="/earphones">EARPHONES</NavLink>
        </div>
        <div className="cart">
        <Link to='/login'><img onClick={handleExit} src={Exit} width={23} height={20} alt="go" /></Link>
        <Link to="/cart"><img className="first-logo" src={Cart} alt="logo" /></Link>
      </div>
        </div>
      </header>
      <div className="content">{children}</div>
      <div className="user-card container">
        <div className="title">
        <h2>Bringing you the <span>best</span> audio gear</h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <img src={userImg} width={540} height={588} alt="user" />
      </div>
      <footer>
        <span className="border"></span>
      <div className="mains container">  
        <div className="logos"><Link to="/"><img className="first-logo" src={Logo} alt="logo" /></Link></div>
        <div className="searchs">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/headphones">HEADPHONES</NavLink>
        <NavLink to="/speakers">SPEAKERS</NavLink>
        <NavLink to="/earphones">EARPHONES</NavLink>
        </div>
        </div>
        <div className="navbar container">
          <div className="title">
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          </div>
        <div className="links">
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
        </div>
        </div>
        <p className="adress container">Copyright 2021. All Rights Reserved</p>
      </footer>
    </div>
</>
  )
}

export default MainLayout