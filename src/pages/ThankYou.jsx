import { Link } from "react-router-dom";
import "./thankyou.scss";

function ThankYou() {
    return (
        <div className="thankyou">
            <h2>Dziękujemy za zamówienie!<br/> Smacznego 🍽️</h2>
            <p>Twoje zamówienie zostało przyjęte i wkrótce trafi do Ciebie.</p>
            <Link to="/menu" className="thankyou__link">Wróć do menu</Link>
        </div>
    );
}

export default ThankYou;
