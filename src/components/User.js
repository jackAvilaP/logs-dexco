
import users from "../img/users2.png";
import logo_dexco from "../img/logo_dexco.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/User.css';


const User = () => {

    return (
        <div className="all-container-user">
            <div className="container-user">
                <header className="header-user">
                    <nav>
                        <div>
                            <img src={logo_dexco} id="logoDexco" />
                        </div>
                        <div className="input-group-sm">
                            <button type="button" className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <input type="text" className="form-control " placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="user-details">
                            <img src={users} />
                            <h4>jackson avila</h4>
                        </div>
                    </nav>
                </header>
                <section>
                    <table className="table table-hover table-sm">
                        <thead>

                            <tr className="bg-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">role</th>
                                <th scope="col">Seccion</th>
                                <th scope="col">Equipment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>xxxxxxxxxxx</td>
                                <td>secadora</td>
                                <td>240M01</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>xxxxxxxxxxx</td>
                                <td>Lijadora</td>
                                <td>441M01</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>xxxxxxxxxxx</td>
                                <td>CC3</td>
                                <td>60M01</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>xxxxxxxxxxx</td>
                                <td>CHHIPER</td>
                                <td>156M02</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>xxxxxxxxxxx</td>
                                <td>HOMBACK</td>
                                <td>xxxx</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Larry</td>
                                <td>xxxxxxxxxxx</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};


export default User;