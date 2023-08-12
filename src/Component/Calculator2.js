import react from "react"
import { Icon } from '@iconify/react';

function Calculator2 () {
    return (
       <div className="Cal">
        <div className="Cal-1">
        <div className="Cal-2">
        <Icon className="Cal-Icon" icon="ri:truck-line" />
        <h1>Trucking Cost Calculator</h1>
        <a href="/trucking"> <button>GET QUOTE</button> </a>
        
        </div>

        <div className="Cal-3">
        <Icon className="Cal-Icon" icon="jam:plane" />
        <h1>Air Cargo Cost Calculator</h1>
        <a href="/aircargo"> <button>GET QUOTE</button> </a>
        </div>

        <div className="Cal-4">
        <Icon className="Cal-Icon" icon="majesticons:ship-line" />
        <h1>Ocean Cargo Cost Calculator</h1>
        <a href="/oceancargo"> <button>GET QUOTE</button> </a>
        </div>

        <div className="Cal-5">
        <Icon className="Cal-Icon" icon="material-symbols:trolley-outline" />
        <h1> Courier Service Cost Calculator</h1>
        <a href="/Couriercargo"> <button>GET QUOTE</button> </a>
        </div>

        </div>
       </div>
    )
}

export default Calculator2;