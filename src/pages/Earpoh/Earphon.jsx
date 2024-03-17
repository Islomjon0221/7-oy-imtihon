import speaker1 from "../../assets/speaker.png"
import earphone1 from "../../assets/earphone1.png"
import headphone2 from "../../assets/headphone3.png"
import stick from "../../assets/stick.svg"
import "./index.css"

function Earphon() {
  return (
    <>
      <div className="title-word"><h1>EARPHONES</h1></div>
      <div className="earphone container">
        <div className="card-1">
          <div className="img"><img src={earphone1} width={296} height={298} alt="headphone" /></div>
          <div className="title">
            <h3>NEW PRODUCT</h3>
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            <button>See Product</button>
          </div>
        </div>

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
      </div>
    </>
  )
}

export default Earphon