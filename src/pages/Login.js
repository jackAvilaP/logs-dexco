import { useState } from 'react';
import '../styles/Login.css';

const Login = () =>{
    const submit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='containerLogin'>
         <div className=' login-box'>
              <h2>Login</h2>
            <form onSubmit={submit} >
              <div className='user-box'>
               <label>Name </label>
               <input id='name' type='text' />
              </div>
              <div className='user-box'>
               <label>Password </label>
               <input id='password' type='text'/>
              </div>
            </form>
          <button>Submit</button>
         </div>
        </div>
    );
};

export default Login ;