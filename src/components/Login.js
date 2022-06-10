import { useState } from 'react';
import '../styles/Login.css';

const Login = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState();

  const submit = () => {

  }

  return (
    <div className='container-login'>
      <div className=" login-box">
        <h1>Log in</h1>
        <form>
          <div className="user-box">
            <input id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} required />
            <label> User</label>
          </div>
          <div className="user-box">
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
            <label>Password </label>
          </div>
        </form>
        <button className='myButton'> Submit</button>
      </div>
    </div>
  );
};

export default Login;