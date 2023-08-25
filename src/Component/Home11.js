import react from "react"

function Home11 () {
    return (
        <div className="home11">

        <div className="home-opacity"></div>

<form action="/" method="post"  >
<div className="home11-0">
<h1>Get a quick offer</h1>

</div>
  <div className="home11-1">
  <label typeof="name">YOUR NAME</label>
  <input type="text" placeholder="Your name"></input>
  <label typeof="name">EMAIL</label>
  <input type="text" placeholder="Email address"></input>
  </div>

  <div className="home11-1">
  
  <label typeof="name">TRUCKLOAD</label>
  <select id="Truckload">
  <option value="select">select</option>
  <hr></hr>
  <option value="straight">Straight Truck</option>
  <hr></hr>
  <option value="dry">Dry Van</option>
  <hr></hr>
  <option value="step">Step Deck</option>
  </select>
    <label typeof="name" >COMMODITY</label>
    <select className="select" id="Truckload">
  <option value="select">select</option>
  <hr></hr>
  <option value="soft">Soft Commodity</option>
  <hr></hr>
  <option value="petrol">Petroleum</option>
  <hr></hr>
  <option value="agric">Agricultural Products</option>
  </select>
  </div>
  
  <button type="submit" className="home11-btn">GET A QUOTE</button>
  
</form>
</div>
    )
}

export default Home11;