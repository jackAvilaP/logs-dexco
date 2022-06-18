
import '../styles/Login.css';
import { useForm } from '../Hooks/useForm';


const Login = () => {

  const { formstate, onResetForm, onInputChage, username,
    password } = useForm({
      username: "",
      password: ""
    });


  return (
    <div className='container-login'>
      <div className=" login-box">
        <h1>Log in</h1>
        <form>
          <div className="user-box">
            <input id="name" type="text" name='username' onChange={onInputChage} value={username} required />
            <label> User</label>
          </div>
          <div className="user-box">
            <input id="password" type="password" name='password' onChange={onInputChage} value={password} required />
            <label>Password </label>
          </div>
        </form>
        <button className='myButton' onClick={onResetForm}> Submit</button>
      </div>
    </div>
  );
};

export default Login;