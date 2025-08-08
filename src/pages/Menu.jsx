import { useState, useEffect } from "react";
import { useCart } from '../context/useCart.js';
import "./menu.scss"
import { useNavigate } from 'react-router-dom';

function Menu() {
    const [items, setItems] = useState([]);
    const { addToCart } = useCart();
    const navigate = useNavigate(); // dodaj to

    useEffect(() => {
        fetch('./src/data/menu.json')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            }).catch(err => console.error(err));
    }, [])

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <>
            <div className="menu">
                {
                    items.map((item) => (
                        <div key={item.id} className="menu__item">
                            <img src={item.image} alt={item.name} />
                            <div className="menu__info">
                                <h3>{item.name}</h3>
                                <p className="menu__desc">{item.description}</p>
                                <p className="menu__price">{item.price} zł / {item.unit}</p>
                                <button onClick={() => handleAddToCart(item)}>Dodaj do koszyka</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="menu__footer">
                <button className="menu__cart-btn" onClick={goToCart}>
                    🛒 Przejdź do koszyka
                </button>
            </div>
        </>
    )
}


export default Menu;