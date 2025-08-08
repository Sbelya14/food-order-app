import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import "./summary.scss"

function Summary() {
    const { cartItems } = useCart();

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="summary">
                <p>Koszyk jest pusty. <Link to="/menu" className="summary__link">Wróć do menu</Link></p>
            </div>
        );
    }

    return (
        <div className="summary">
            <h2 className="summary__title">Podsumowanie zamówienia</h2>
            <ul className="summary__list">
                {cartItems.map((item) => (
                    <li key={item.id} className="summary__item">
                        <h3 className="summary__item-name">{item.name}</h3>
                        <p>{item.quantity} × {item.price} zł</p>
                        <p className="summary__item-total">Razem: {(item.price * item.quantity).toFixed(2)} zł</p>
                    </li>
                ))}
            </ul>

            <p className="summary__total">
                <strong>Łącznie do zapłaty: {totalPrice.toFixed(2)} zł</strong>
            </p>

            <div className="summary__buttons">
                <Link to="/cart">
                    <button className="summary__button back">Wróć do koszyka</button>
                </Link>
                <Link to="/order">
                    <button className="summary__button order_sum">Złóż zamówienie</button>
                </Link>
            </div>
        </div>
    );
}

export default Summary;

