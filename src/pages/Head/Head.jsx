import "./index.css"
import headphone1 from "../../assets/headphone2.png"
import headphone2 from "../../assets/headphone3.png"
import headphone3 from "../../assets/headphone4.png"
import speaker1 from "../../assets/speaker.png"
import earphone1 from "../../assets/earphone1.png"
import stick from "../../assets/stick.svg"


function Head() {
  return (<>
    <div className="title-word"><h1>HEADPHONES</h1></div>
    <div className="head container">
      <div className="card-1">
        <div className="img"><img src={headphone1} width={349} height={386} alt="headphone" /></div>
        <div className="title">
          <h3>NEW PRODUCT</h3>
          <h2>XX99 Mark II Headphones</h2>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button>See Product</button>
        </div>
      </div>

      <div className="card-1">
        <div className="title">
          <h2>XX99 Mark I Headphones</h2>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button>See Product</button>
        </div>
        <div className="img"><img src={headphone2} width={296} height={385} alt="headphone" /></div>
      </div>

      <div className="card-1">
        <div className="img"><img src={headphone3} width={372} height={389} alt="headphone" /></div>
        <div className="title">
          <h2>XX59 Headphones</h2>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
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

export default Head