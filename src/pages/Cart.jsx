import { useCart } from "../context/useCart.js";
import { Link, useNavigate } from "react-router-dom";
import "./cart.scss"

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handlePlaceOrder = () => {
        navigate("/summary");
    };

    return (
        <div className="cart">
            <h2 className="cart__title">Twój koszyk</h2>
            {cartItems.length === 0 ? (
                <div className="cart__empty">
                    <p>Koszyk jest pusty.</p>
                    <Link to="/menu" className="cart__btn">← Wróć do menu</Link>
                </div>
            ) : (
                <>
                    <ul className="cart__list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart__item">
                                <h3>{item.name}</h3>
                                <p>{item.price} zł / {item.unit}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    className="cart__input"
                                    onChange={e => updateQuantity(item.id, Number(e.target.value))}
                                />
                                <button onClick={() => removeFromCart(item.id)} className="cart__btn cart__btn--remove">Usuń</button>
                            </li>
                        ))}
                    </ul>
                    <p className="cart__total">Razem: {totalPrice.toFixed(2)} zł</p>
                    <div className="cart__actions">
                        <button onClick={clearCart} className="cart__btn cart__btn--clear">Wyczyść koszyk</button>
                        <button onClick={handlePlaceOrder} className="cart__btn cart__btn--order">Złóż zamówienie</button>
                        <Link to="/menu" className="cart__btn">← Wróć do menu</Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;

