import react, { useState } from "react";
import Cart from "./Cart";
import Cart2 from "./Cart2";

function Shop2() {

    const [drag, setDrag] = useState (0);
     const [drag2, setDrag2] = useState ("No products in the cart.");
     const [drag3, setDrag3] = useState("")
    function DragPrice (event) {
        return (
            setDrag (event.target.value)
        )
    }
    
    function addup () {
        setDrag2(oldList => [...oldList, <Cart />]);
    }

    function addup2 () {
     setDrag3 (oldList => [...oldList, <Cart2 /> ]);
    }


    return (
        <div className="shop2-1">
           <div className="shop2-2">
            <div className="shop2-3">
                {/* ........ */}
            <div className="shop2-4">

            <div className="shop2-5">
            <img src="images/cat1.jpeg"></img>
            <hr></hr>
            <h1>Daf, 7.5 tones</h1>
            <p className="line"></p>
            <p>#12,000,000</p>
            <button onClick={addup2}>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/cat2.jpeg"></img>
            <hr></hr>
            <h1>Toyota Ice</h1>
            <p className="line"></p>
            <p>#6,500,000</p>
            <button onClick={addup}>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/cat3.jpeg"></img>
            <hr></hr>
            <h1>Volvo Tipper</h1>
            <p className="line"></p>
            <p>#16,000,000</p>
            <button>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/cat4.jpeg"></img>
            <hr></hr>
            <h1>Fold Transist Van</h1>
            <p className="line"></p>
            <p>#4,500,000</p>
            <button>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/cat5.jpeg"></img>
            <hr></hr>
            <h1>Daf, 7.5 tones</h1>
            <p className="line"></p>
            <p>#12,000,000</p>
            <button>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/cat6.jpeg"></img>
            <hr></hr>
            <h1>Bright man</h1>
            <p className="line"></p>
            <p>$20.00</p>
            <button>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/laptop.jpeg"></img>
            <hr></hr>
            <h1>Bright man</h1>
            <p className="line"></p>
            <p>%20.00</p>
            <button>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/laptop.jpeg"></img>
            <hr></hr>
            <h1>Bright man</h1>
            <p className="line"></p>
            <p>$20.00</p>
            <button>ADD TO CART</button>
            </div>

            <div className="shop2-5">
            <img src="images/laptop.jpeg"></img>
            <hr></hr>
            <h1>Bright man</h1>
            <p className="line"></p>
            <p>$20.00</p>
            <button>ADD TO CART</button>
            </div>
             
            </div>
             
                {/* ........ */}

            <div className="shop2-6">
             <div className="shop2-7">
               <div className="shop2-8">
               <h1>Cart</h1>
               <p className="line"></p>
                <p>{drag2}</p>
                <p>{drag3}</p>
               </div>

               <div className="shop2-8">
               <h1>Filter by Price</h1>
               <p className="line"></p>
               <input type="range" value={drag} onChange={DragPrice} ></input>
               <p>Price : ${drag}.00</p>
               <button>Filter</button>
               </div>

                           {/* FEATURE */}


               <div className="shop2-9">
               <h1>Featured Products</h1>
               <p className="line"></p>
             

               <div className="shop2-10">
               <img src="images/cat2.jpeg"></img>
               <div className="shop-11">
               <h2>Toyota Ice</h2>
               <p className="line"></p>
               <span className="star">★★★</span><span>☆☆</span>
               <p>$6,500,000.00</p>
               </div>
               <hr></hr>
               </div>

               <div className="shop2-10">
               <img src="images/cat5.jpeg"></img>
               <div className="shop-11">
               <h2>Daf, 7.5 tones</h2>
               <p className="line"></p>
               <span className="star">★★★★</span><span>☆</span>
               <p>$12,000000</p>
               </div>
               <hr></hr>
               </div>

               <div className="shop2-10">
               <img src="images/cat4.jpeg"></img>
               <div className="shop-11">
               <h2>Fold Transist Van</h2>
               <p className="line"></p>
               <span className="star">★★★★</span><span>☆</span>
               <p>$4,500,000</p>
               </div>
               <hr></hr>
               </div>

               </div>
                

               </div>

            </div>

            </div>
           </div>
        </div>
    )
}

export default Shop2;