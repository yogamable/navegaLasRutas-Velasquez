import { Link } from "react-router";

function Cart(){
    return (
        <div className="divCart">
            <Link to="/carro" className="cartLink">
                <i className="bi bi-cart fs-2"></i>
            </Link>
        </div>
    )
}

export default Cart