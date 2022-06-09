import { useState } from 'react';
import '../styles/CheckIn.css';

const CheckIn = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {

    }

    return (
        <div className='container-CheckIn'>
            <div className="CheckIn-box">
                <h1>Check in</h1>
                <form>

                    <div className="CheckInUser-box">
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
                        <label>full Name </label>
                    </div>

                    <div className="CheckInUser-box">
                        <input type="text" onChange={(e) => setUser(e.target.value)} value={user} required />
                        <label>User </label>
                    </div>

                    <div className="CheckInUser-box">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        <label>Email </label>
                    </div>


                    <div className="CheckInUser-box">
                        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                        <label>Password </label>
                    </div>

                </form>
                <button className='myButton'> Register</button>
            </div>
        </div>
    );
};

export default CheckIn;