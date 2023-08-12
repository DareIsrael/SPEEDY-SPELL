import react from "react" 

function Register () {
    return  (

        <div className="log-p">

<div className="log-d">
          <h1>SPEEDY-SPELL</h1>
           <h2>We can handle any size of load, to-and-from anyplace, 
           and within any service time frame, giving you our
            very best and bringing a win-win situation to the table..</h2>
         </div>

     <div className= "register"  >
        <h1>Create an account</h1>

        <form action="onSubmit" method="Post">
        <label>First Name</label>
        <input type="text" placeholder=" First Name" />
        <label>Last Name</label>
        <input type="text"  placeholder="Last Name"/>
        <label>Email Address</label>
        <input type="text" placeholder="Email"/>
        <label>Password</label>
        <input type="Password" placeholder="Password"/>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password"/>
        <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
    </div>

        </div>
       

       
    
        
    )
}

export default Register 