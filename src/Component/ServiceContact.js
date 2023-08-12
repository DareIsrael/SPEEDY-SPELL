import react from "react"
import { Icon } from '@iconify/react';

function ServiceContact () {
    return (
       <div className="servCon">
         <div className="servCon-1">
         <h1> OUR CUSTOMERS SERVICE IS AVAILABLE 24/7 </h1>
         <div className="servCon-2">
         <Icon className="servConicon" icon="fluent:call-12-filled" />
         <h2>+44 7845 134587</h2>
         </div>
         
         <div className="servCon-3">
            <Icon className="servConicon" icon="ic:outline-facebook" />
            <Icon className="servConicon" icon="formkit:twitter" />
            <Icon className="servConicon" icon="formkit:whatsapp" />
         </div>
         </div>
       </div>
    )
}

export default ServiceContact;