import { Link } from "react-router";
import Cart from "./Cart";

function NavBar(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand active" aria-current="page" to="/"><img className="imgLogo" src="/src/img/logo.png"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center align-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex gap-5">
                            <Link className="nav-link" to="/categoria/agendas">Agendas</Link>
                            <Link className="nav-link" to="/categoria/lapices">Lapices</Link>
                            <Link className="nav-link" to="/categoria/stickers">Stickers</Link>
                        </div>
                    </div>
                    <div className="cart d-flex align-content-center">
                        <Cart  />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar