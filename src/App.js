import React, { Component } from 'react';
import './marketplace.css'
import hijab from './assets/hijab.jpg'
import baju from './assets/baju.jpg'
import favicon from './assets/favicon.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    // useHistory,
    Redirect,
    // useLocation,
    useParams,
    withRouter
} from 'react-router-dom';

function marketplace() {
    return (
        <Router>
            <div className="header">
                <img src={favicon} alt="" />
                <AuthButton />

                <ul>
                    <li className="TopBar-1" id="TB1">
                        <Link className="Link-1" to="/home">Home</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link-1" to="/sale">Sale</Link>
                    </li>
                </ul>


                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/sale" component={Sale} />
                </Switch>
            </div>
        </Router>
    )
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p id="logout">Welcome!
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/home"));
                }}>
                <p>Sign out</p>
            </button>
        </p>
    ) : (
            <p id="warning-log" >
                You are not Log in!
            </p>
        )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

function Home() {
    return (
        <div className="Home">
            <h2 align="center">Katalog Barang</h2>
            <div className="grid">
                <div className="row">
                    <div className="col-sm">
                        <img src={hijab} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Hijab</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={hijab} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Hijab</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={hijab} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Hijab</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={hijab} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Hijab</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={baju} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Pakaian</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={baju} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Pakaian</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={baju} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Pakaian</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={baju} alt="Gambar Thumbnail Artikel" />
                        <h3 align="center">Pakaian</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Sale() {

    let { path, url } = useRouteMatch();

    return (
        <div className="header-2">
            {/* <h2>Data Barang</h2> */}
            <ul>
                <li className="TopBar-2">
                    <Link to={`${url}/DataHijab`}>Data Hijab</Link>
                </li>
                <li className="TopBar-2">
                    <Link to={`${url}/DataPakaian`}>Data Pakaian</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/:dataId`}>
                    <DataBody />
                </Route>
            </Switch>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();

    if (dataId === "DataHijab") {
        return (
            <div className="Data-Hijab">
                <h1>{dataId}</h1>
                <div className="table-hijab">
                    <table border="1">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Gambar</th>
                            <th>Model</th>
                            <th>Stok</th>
                            <th>Harga</th>
                        </tr>
                        <tr>
                            <td>Hijab</td>
                            <td><img src={hijab} alt="hijab"/></td>
                            <td>Pashmina</td>
                            <td>200</td>
                            <td>150.000</td>
                        </tr>
                        <tr>
                            <td>Hijab</td>
                            <td><img src={hijab} alt="hijab"/></td>
                            <td>Pashmina</td>
                            <td>200</td>
                            <td>150.000</td>
                        </tr>
                        <tr>
                            <td>Hijab</td>
                            <td><img src={hijab} alt="hijab"/></td>
                            <td>Pashmina</td>
                            <td>200</td>
                            <td>150.000</td>
                        </tr>
                        <tr>
                            <td>Hijab</td>
                            <td><img src={hijab} alt="hijab"/></td>
                            <td>Pashmina</td>
                            <td>200</td>
                            <td>150.000</td>
                        </tr>
                        <tr>
                            <td>Hijab</td>
                            <td><img src={hijab} alt="hijab"/></td>
                            <td>Pashmina</td>
                            <td>200</td>
                            <td>150.000</td>
                        </tr>
                    </table>
                </div>
            </div >
        )
    } else if (dataId === "DataPakaian") {
        return (
            <div className="Data-Pakaian">
                <h1>{dataId}</h1>
                <div className="table-hijab">
                    <table border="1">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Gambar</th>
                            <th>Stok</th>
                            <th>Harga</th>
                        </tr>
                        <tr>
                            <td>Pakaian</td>
                            <td><img src={baju} alt="pakaian"/></td>
                            <td>200</td>
                            <td>500.000</td>
                        </tr>
                        <tr>
                            <td>Pakaian</td>
                            <td><img src={baju} alt="pakaian"/></td>
                            <td>200</td>
                            <td>500.000</td>
                        </tr>
                        <tr>
                            <td>Pakaian</td>
                            <td><img src={baju} alt="pakaian"/></td>
                            <td>200</td>
                            <td>500.000</td>
                        </tr>
                        <tr>
                            <td>Pakaian</td>
                            <td><img src={baju} alt="pakaian"/></td>
                            <td>200</td>
                            <td>500.000</td>
                        </tr>
                        <tr>
                            <td>Pakaian</td>
                            <td><img src={baju} alt="pakaian"/></td>
                            <td>200</td>
                            <td>500.000</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
                <p>You must log in to view the page</p>
                <br />
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default marketplace;