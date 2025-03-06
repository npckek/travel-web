import React, {useCallback, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {nanoid} from "nanoid";

const Register = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [trips, setTrips] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => user.email === email);
        const existingName = users.find((user) => user.name === name);
        const id = nanoid(10);


        if (password !== "" && password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        if (existingUser) {
            setError("User already exists!");
            return;
        }

        if (existingName) {
            setError("Username already taken!");
            return;
        }

        const newUser = { id, email, password, name, trips };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");

        setTimeout(() => {
            navigate("/login");
        }, 1500);
    }, [id, name, email, password, confirmPassword, trips, navigate]);

    return (
        <div className="min-w-min w-1/3 flex-col mx-auto">
            <h2 className="text-center text-xl text-text font-bold my-4">Регистрация</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Подтвердите пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        aria-label="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" aria-label="Confirm" className='w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Подтвердить</button>
            </form>
            <Link to="/login" className=' flex justify-center py-2 px-4 text-text '>
                <button aria-label="Login">Уже есть аккаунт?</button>
            </Link>
        </div>
    )
};

export default Register;