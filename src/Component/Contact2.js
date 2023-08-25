import react from "react"
import { Icon } from '@iconify/react';

function Contact2 () {
    return (
        <div className="con">
        <div className="con2">
            <div className="con2-1">
            <h1>KEEP IN TOUCH</h1>
            <p className="line"></p>
            <h2>Say hello and send us message.</h2>
                <form action="/" method="post" className="con2-2">
                    <div className="con2-3"> 
                    <input type="text" placeholder=" Full Name " />
                    <input type="text" placeholder="Email Address" />
                    </div>
                    <textarea placeholder="Message" />
                    <button type="submit"> SEND REQUEST </button>
                </form>
            </div>

            <div className="con2-1">
            <h1>OUR OFFICE</h1>
            <p className="line"></p>
            <h2> Feel free to contact us anytime you need our services. </h2>
            <p> Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.
             Credibly innovate granular sources. </p>
             <p> Seamlessly empower fully researched growth UK</p>
             <div className="con2-2">
             <h6> Phone: +44 7845 134587</h6>
             <h6> Phone: +44 7438 079290</h6>
             <h6> Landline: 02036682258</h6>
             <h6> Email:- bisiolusola99@gmail.com</h6>
             <h6> Email:- jonas@speedyspellcargo.co.uk</h6>
             </div>
             
           
             <div className="servCon-3">
            <Icon className="Conicon" icon="ic:outline-facebook" />
            <Icon className="Conicon" icon="formkit:twitter" />
            <Icon className="Conicon" icon="formkit:whatsapp" />
         </div>

            </div>
        </div>
        </div>
    )
}

export default Contact2;