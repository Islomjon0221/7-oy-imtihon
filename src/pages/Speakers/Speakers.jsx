import "./index.css"
import speaker2 from "../../assets/speaker3.png"
import headphone2 from "../../assets/headphone3.png"
import speaker1 from "../../assets/speaker.png"
import earphone1 from "../../assets/earphone1.png"
import stick from "../../assets/stick.svg"

function Speakers() {
  return (
    <>
      <div className="title-word"><h1>SPEAKERS</h1></div>
      <div className="speaker container">
        <div className="card-1">
          <div className="img"><img src={speaker1} width={291} height={350} alt="headphone" /></div>
          <div className="title">
            <h3>NEW PRODUCT</h3>
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            <button>See Product</button>
          </div>
        </div>

        <div className="card-1">
          <div className="title">
            <h2>ZX7 SPEAKER</h2>
            <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
            <button>See Product</button>
          </div>
          <div className="img"><img src={speaker2} width={268} height={385} alt="headphone" /></div>
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

export default Speakers