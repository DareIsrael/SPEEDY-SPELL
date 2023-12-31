import react, { useState } from "react";
import { Icon } from '@iconify/react';

function AirCargo2 () {

    const [kmPrice, setKwprice] = useState(0);
     function kmP (event) {
        setKwprice(event.target.value)
     }

    return (
          <div className="truck">
          <div className="truck-1">
              <div className="truck-2">
                <h1>Get your quote instantly</h1>
                <p className="line"></p>
                <p>Offering robust synopses using agile
                 frameworks for high-level overviews and iterative techniques.</p>
                <div className="truck-3">
                    <form action="/" method="post">
                        <label>Height (cm)</label><br></br>
                        <select>
                        <option>Select...</option>
                        <option>100cm+</option>
                        <option>200cm+</option>
                        <option>500cm+</option>
                        <option>800cm+</option>
                     </select><br></br>
                        <label>Width(cm)</label> <br></br>
                        <select>
                        <option>Select...</option>
                        <option>100cm+</option>
                        <option>200cm+</option>
                        <option>500cm+</option>
                        <option>800cm+</option>
                     </select><br></br>
                        <label>Depth</label><br></br>
                        <select>
                        <option>Select...</option>
                        <option>100cm+</option>
                        <option>200cm+</option>
                        <option>500cm+</option>
                        <option>800cm+</option>
                     </select><br></br>
                    
                     <label> Commodity Type</label>  <br></br>
                     <select>
                        <option>Select...</option>
                        <option>General Merchandise</option>
                        <option>Fragile Goods</option>
                        <option>Fine Arts</option>
                        <option>Hazardous Goods</option>
                     </select><br></br>

                     <label>Distance(km)</label> <br></br>
                     <div className="truck-input">
                     <span>0(km)</span>
                     <input type="range" min="20-40" max="1000" onChange={kmP} value={kmPrice}></input>
                     <span>{kmPrice}(km)</span>
                     </div>
                     <div className="truck-price">
                        
                        <div className="truck-price2">
                        <p><span className="truck-span">Total</span> ${kmPrice}.00</p>
                        </div>
                     </div>
                     
                    
                    <div className="truck-form">
                    <h5>Consignor</h5>
                    <div className="truck-form2">
                     
                     <input type="text" placeholder="Name"></input>
                     <input type="text" placeholder="Email"></input>
                     <input type="text" placeholder="Phone Number"></input>
                     <input type="text" placeholder="Address"></input>
                     <input type="text" placeholder="Preferred Service"></input>
                     <input type="text" placeholder="Preferred Service time"></input>
                    </div>
                    <h5>Consignee</h5>
                    <div className="truck-form2">
                     
                     <input type="text" placeholder="Name"></input>
                     <input type="text" placeholder="Email"></input>
                     <input type="text" placeholder="Phone Number"></input>
                     <input type="text" placeholder="Address"></input>
                     <input type="text" placeholder="Post Code"></input>
                     <input type="text" placeholder="Preferred Service time"></input>
                    </div>

                    <textarea placeholder="Message"></textarea>
                    </div>
                    <button type="submit">Submit</button>


                    </form>
                </div>
              </div>



              <div className="truck-4">
               <img src="images/plane1.jpeg"></img>
               <div className="truck-5">
               
                <div className="truck-6">
                <Icon className="truck-icon" icon="ic:twotone-perm-device-information" />
                    <div>
                    <h2>Details</h2>
                    <p>Submit the service details.</p>
                    </div>
                    
                </div>
                <div className="truck-6">
                <Icon className="truck-icon" icon="carbon:request-quote" />
                  <div>
                  <h2>Quote</h2>
                    <p>Get cost estimate about our service.</p>
                  </div>
                    
                </div>
                <div className="truck-6">
                <Icon className="truck-icon" icon="solar:book-linear" />
                    <div>
                    <h2>Book</h2>
                    <p>Book prefered service time.</p>
                    </div>
                    
                </div>
                <div className="truck-6">
                <Icon className="truck-icon" icon="bxs:contact" />
                <div>
                    <h2>Contact</h2>
                    <p>We will contact you for additional info.</p>
                </div>
                    
                </div>
               </div>
              </div>
              </div>
          </div>
    )
}

export default AirCargo2;