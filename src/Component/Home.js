import react from "react"
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Bottom from "./Bottom";
import Home11 from "./Home11";
import BottomIcon from "./BottomIcon";
import Login from "./Login";

function Home () {
    return (
        <div>
            
            <Home1 />
            {/* <Login /> */}
            <Home11 />
            <Home2 />
            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />
            <Home7 />
            <Bottom />
            <BottomIcon />

            
        </div>
    )
}

export default Home;