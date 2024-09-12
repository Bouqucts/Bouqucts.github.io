import '../App.css';
import me from "../img/RiskyPrihadi.png";

const MyHome  = () => {
    return (
        <>
  <main>
  <div className="wrapper">
      <div className="namasaya">
        <p>Risky Prihadi</p>
      </div>
      <div className="Kotak"></div>
      <div className="garis"></div>
      <div class="julukan">
        <a href class="videographer">VideoGrapher</a>
        <a href class="dan">&</a>
        <a href class="photographer">PhotoGrapher</a>
      </div>
       <div><img alt="FotoHome" src={me} class="fotoaing"/></div>
  </div>
  </main>


        </>
    )
}

export default MyHome ;