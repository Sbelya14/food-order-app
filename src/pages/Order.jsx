import { useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
import "./order.scss";

function Order() {
    const { cartItems, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        postalCode: "",
        city: "",
        street: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (formData.name.trim().length < 2) {
            newErrors.name = "Imię musi mieć co najmniej 2 znaki.";
        }

        if (!/^\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Telefon musi zawierać dokładnie 9 cyfr.";
        }

        if (!/^\d{2}-\d{3}$/.test(formData.postalCode)) {
            newErrors.postalCode = "Kod pocztowy musi być w formacie 12-345.";
        }

        if (formData.city.trim().length < 2) {
            newErrors.city = "Miejscowość musi mieć co najmniej 2 znaki.";
        }

        if (formData.street.trim().length < 2) {
            newErrors.street = "Ulica musi mieć co najmniej 2 znaki.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const fullAddress = `${formData.postalCode}, ${formData.city}, ${formData.street}`;

        console.log("Zamówienie złożone:", {
            name: formData.name,
            phone: formData.phone,
            address: fullAddress,
        }, cartItems);

        clearCart();
        setFormData({
            name: "",
            phone: "",
            postalCode: "",
            city: "",
            street: "",
        });
        setErrors({});
        navigate("/thank-you");
    };

    return (
        <div className="order">
            <h2 className="order__title">Formularz zamówienia</h2>
            <form onSubmit={handleSubmit} className="order__form">
                {[
                    { label: "Imię", name: "name", type: "text" },
                    { label: "Telefon", name: "phone", type: "tel" },
                    { label: "Kod pocztowy", name: "postalCode", type: "text", placeholder: "np. 15-123" },
                    { label: "Miejscowość", name: "city", type: "text" },
                    { label: "Ulica i numer", name: "street", type: "text" },
                ].map(({ label, name, type, placeholder }) => (
                    <div key={name} className="order__field">
                        <label>{label}:</label>
                        <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={formData[name]}
                            onChange={handleChange}
                            className={errors[name] ? "error" : ""}
                        />
                        {errors[name] && <p className="order__error">{errors[name]}</p>}
                    </div>
                ))}

                <button type="submit" className="order__button">Potwierdź zamówienie</button>
            </form>
        </div>
    );
}

export default Order;
