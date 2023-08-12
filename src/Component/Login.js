import react, { useState } from "react"



function Login () {
     
     
    return (
    <div className="log-p">
      <div className="log-d">
      <h1>SPEEDY-SPELL</h1>
          <h2>We can handle any size of load, to-and-from anyplace, 
          and within any service time frame, giving you our
           very best and bringing a win-win situation to the table.</h2>
      </div>



    <div className= "login-page"  >

    <h1>Login to your account</h1>

    <form action="onSubmit" method="Post">
    <label>Email</label>
    <input type="text" placeholder="✉️ Email" />
    <label>Password</label>
    <input type="Password" placeholder="🔒 Password" />
    <button type="submit">Login</button>
    </form>
    <p><a href="/register">Create</a> an account</p>

    </div>
        </div>
        
        
         
          
        
         
         
    )
    }

    export default Login;