import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

function Home() {
    const navigate = useNavigate();

    return (
        <main className="home">
            <section className="hero">
                <h1>Grillowa energia na Twój stół!</h1>

                <div className="hero__images">
                    <img src="/assets/images.jpeg" alt="Grillowa potrawa 1" />
                    <img src="/assets/kebab.jpg" alt="Grillowa potrawa 2" />
                </div>

                <button onClick={() => navigate("/menu")}>Zobacz menu</button>

                <div className="hero__images">
                    <img src="/assets/uUMJxxLFSk.webp" alt="Grillowa potrawa 3" />
                    <img src="/assets/Курячі-крила-в-медово-соєвому-соусі-500x375.jpg" alt="Grillowa potrawa 4" />
                </div>
            </section>

            <section className="about">
                <h2>O nas</h2>
                <p>
                    Jesteśmy jedynym dostawcą mięsa z prawdziwego ogniska w Białymstoku.
                    Najlepsze mięso z grilla – soczyste, aromatyczne, tak pyszne, że aż palce
                    oblizujesz! Nasze potrawy to tradycja i smak, który pamiętasz na długo.
                </p>
            </section>

            <section className="bestsellers">
                <h3>Nasze bestsellery</h3>

                <div className="bestsellers__list">
                    <div className="bestsellers__item">
                        <img src="/assets/rebra1.jpg" alt="Potrawa 1" />
                        <p>Żeberka z ognia.<br/>
                            Delikatne, soczyste żeberka przygotowywane na specjalnym mangalu nad prawdziwym ogniem.
                            Marynowane w naszym autorskim sosie, który wydobywa z mięsa pełnię smaku.
                            Aromat? Obłędny.
                            Smak? Jeszcze lepszy.
                            Tego nie da się zapomnieć!</p>
                    </div>

                    <div className="bestsellers__item">
                        <img src="/assets/szaszl.jpg" alt="Potrawa 2" />
                        <p>Szaszłyk z karkówki.<br/>
                            Delikatna karkówka wieprzowa, starannie zamarynowana w naszej autorskiej mieszance przypraw.
                            Grillowana nad prawdziwym ogniem, dzięki czemu zyskuje wyjątkowy aromat i soczystość.
                            Idealna propozycja dla miłośników klasycznego smaku z nutą ognia.</p>
                    </div>
                </div>
            </section>

            <section className="kontakt">
                <h2>Kontakt</h2>
                <p>📍 ul. Stroma 39/19, 15-662 Białystok</p>
                <p>📞 +48 721 241 835</p>
                <p>📧 plomiensmaku@gmail.com</p>
                <p>⏰ Pn–Nd: 12:00 – 22:00</p>
            </section>
        </main>
    );
}

export default Home;
;