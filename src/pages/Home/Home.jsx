import earphone from "../../assets/earphone.png"
import speaker1 from "../../assets/speaker.png"
import earphone1 from "../../assets/earphone1.png"
import stick from "../../assets/stick.svg"
import headphone2 from "../../assets/headphone3.png"
import "./index.css"

function Home() {
  return (
    <>
      <div className="top-header">
        <div className="title">
          <h3>NEW PRODUCT</h3>
          <h1>XX99 Mark II Headphones</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button>See Product</button>
        </div>
        <div className="img"></div>
      </div>
      <div className="home container">
        <div className="pages">
          <div className="page">
            <img className="body-img" src={headphone2} width={122} height={160} alt="headphone" />
            <div className="card-page">
              <h3>HEADPHONES</h3>
              <h4>Shop <img src={stick} alt="strelka" /></h4>
            </div>
          </div>

          <div className="page">
            <img className="body-img" src={speaker1} width={121} height={146} alt="headphone" />
            <div className="card-page">
              <h3>SPEAKERS</h3>
              <h4>Shop <img src={stick} alt="strelka" /></h4>
            </div>
          </div>

          <div className="page">
            <img className="body-imgs" src={earphone1} width={125} height={126} alt="headphone" />
            <div className="card-page">
              <h3>EARPHONES</h3>
              <h4>Shop <img src={stick} alt="strelka" /></h4>
            </div>
          </div>
        </div>
        <div className="card-1">
          <img src={speaker1} width={400} height={493} alt="Speaker" />
          <div className="title">
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button>See Product</button>
          </div>
        </div>
        <div className="card-2">
          <div className="title">
            <h2>ZX7 SPEAKER</h2>
            <button>See Product</button>
          </div>
          <div className="img"></div>
        </div>

        <div className="card-3">
          <img src={earphone} width={540} height={320} alt="" />
          <div className="title">
            <h2>YX1 EARPHONES</h2>
            <button>See Product</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home