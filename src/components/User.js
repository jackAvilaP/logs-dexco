
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <input type="text" className="form-control " placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div>
                            <img src={users} />
                            <h4>jackson avila</h4>
                        </div>
                    </nav>
                </header>
                <section>
                    <table className="table table-hover table-sm">
                        <thead>

                            <tr className="bg-dark">
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    )
};


export default User;