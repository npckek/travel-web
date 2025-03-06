import React, {useCallback, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const updateCurrentUser = useCallback((newUser) => {
        setCurrentUser(newUser);
        localStorage.setItem("currentUser", JSON.stringify(newUser));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            updateCurrentUser(user);
            alert("Login successful!");

            setTimeout(() => {
                navigate("/");
            }, 1000);

        } else {
            setError("Invalid email or password!");
        }
    }, [email, password, navigate, updateCurrentUser]);


    return (
        <div className="max-w-sm mx-auto">
            <h2 className="text-center text-xl font-bold m-4 text-text">Авторизация</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        id="email"
                        placeholder="Почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Войти
                </button>
            </form>
            <Link to="/register" className=' flex justify-center py-2 px-4 text-text  '>
                <button aria-label="register" > Ещё нет аккаунта?</button>
            </Link>
        </div>
    )
};

export default Login;