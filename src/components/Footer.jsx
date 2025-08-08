import React from "react";
import "./footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__left">
                <img
                    src="/assets/Płomień%20Smaku%20–%20Grilowa%20Energia.png"
                    alt="Płomień smaku"
                />
                <h1>Płomień Smaku</h1>
            </div>

            <div className="footer__right">
                <p>📞 +48 721 241 835</p>
                <p>📧 plomiensmaku@gmail.com</p>
                <p>⏰ Pn–Nd: 12:00 – 22:00</p>
            </div>
        </footer>
    );
}

export default Footer;
