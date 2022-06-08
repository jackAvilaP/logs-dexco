import { useState } from 'react';
import '../styles/Login.css';

const Login = () =>{
    const submit = (e) => {
        e.preventDefault();
    }

    return(
      <div className='container-login'>
       <div className=" login-box">
       <h2>Login</h2>
       <form>
         <div className="user-box">
           <input id="name" type="text" />
           <label> Name </label>
         </div>
         <div className="user-box">
           <input id="password" type="text"  />
           <label>Password </label>
         </div>
       </form>
       <button className='myButton'> Submit</button>
      </div>
    </div>
    );
};

export default Login ;