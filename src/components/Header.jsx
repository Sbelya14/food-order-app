import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./header.scss";

function Header() {
    const { cartItems } = useCart();
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header__left">
                <img
                    src="/assets/Płomień%20Smaku%20–%20Grilowa%20Energia.png"
                    alt="Płomień smaku"
                    className="header__logo"
                />
                <h1 className="header__title">Płomień Smaku</h1>
            </div>

            <button className="header__hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`header__nav ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Główna</Link>
                <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
                <Link to="/cart" onClick={() => setIsOpen(false)}>Koszyk ({totalQuantity})</Link>
                <Link to="/summary" onClick={() => setIsOpen(false)}>Podsumowanie</Link>
                <Link to="/order" onClick={() => setIsOpen(false)}>Zamówienie</Link>
            </nav>
        </header>
    );
}

export default Header;

