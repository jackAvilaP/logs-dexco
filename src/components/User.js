
import users from "../img/users2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/User.css';


const User = () => {

    return (
        <div className="all-container-user">
            <h2>Bitacora de aseguramiento</h2>
            <div className="container-user">
                <header className="header-user">
                    <nav>
                        <div>
                            <img src={users} />
                        </div>
                        <div>
                            <h2>jackson avila</h2>
                        </div>
                    </nav>
                </header>
                <table className="table table-hover table-sm">
                    <thead>

                        <tr class="bg-dark">
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
            </div>
        </div>
    )
};


export default User;