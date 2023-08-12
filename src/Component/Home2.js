import react, { useEffect } from "react"
import { Icon } from '@iconify/react';
 import AOS from "aos";
 import "aos/dist/aos.css";


function Home2 () {
      
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <div className="home2">
        <div className="home2-1">
        <h1>OUR SOLUTIONS</h1>
        <p className="line"></p>
        <h2>Logistics through innovation, dedication and technology</h2>
        <div className="icons">
            <div className="eachicons" >
            <a href="/service"><Icon className="img" icon="eos-icons:container-outlined" /></a>
            
             <h5>IMPORT LOGISTICS</h5> 
            </div>
            <div  className="eachicons">
            <a href="/service"><Icon className="img"  icon="mdi:truck-cargo-container" /></a>
            
            <h5>EXPORT LOGISTICS</h5>
            </div>
            <div className="eachicons">
            <a href="/service"><Icon className="img"  icon="streamline:shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay" /></a>
            
            <h5>CARGO EXPRESS</h5>
            </div>
            <div className="eachicons" >
            <a href="/service"><Icon className="img"  icon="material-symbols:warehouse-rounded" /></a>
            
            <h5>WAREHOUSE</h5>
            <h5></h5>
            </div>
            <div className="eachicons">
            <a href="/service"><Icon className="img"  icon="streamline:shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery" /></a>
            
            <h5>Information Express</h5>
            
            </div>
            <div className="eachicons">
            <a href="/service"><Icon className="img"  icon="subway:time" /></a>
            
            <h5>Brokerage services</h5>
            
            </div>
            
            </div>
            <div className="home2-button">
            <a href="/calculator"><button>GET DETAILED QUOTE</button></a>
                
            </div>

        </div>
        
        </div>
    )
}

export default Home2;