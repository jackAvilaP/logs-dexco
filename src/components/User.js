import users from "../img/users2.png";
import '../styles/User.css';
const User =()=>{
    return(
        <div className="container-user">
            <header className="header-user">
                <nav>
                    <div>
                        <img src={users}/>
                    </div>
                    <div>
                        <h2>jakc</h2>
                    </div>
                </nav>
            </header>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    )
};

export default User;