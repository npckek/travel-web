import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "./Switcher";

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Инициализация состояния пользователя из localStorage или другого источника
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        // Очистка состояния пользователя и localStorage
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="p-4 flex justify-between">
            <div>
                {currentUser ? (
                    <Link to={`/user/${currentUser.name}`} className='text-text text-xl font-bold'>Мой профиль</Link>
                ) : (
                    <div className='text-text text-xl font-bold'>Добро пожаловать</div>
                )}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
                <Switch />
            </div>
            <div>
                {currentUser ? (
                    <button
                        onClick={handleLogout}
                        className='text-text text-xl font-bold'
                    >Выйти из аккаунта</button>
                ) : (
                    <div className='flex justify-between text-text text-xl font-bold'>
                        <Link to={'/login'} className='pr-4'>Войти</Link>
                        <Link to={'/reg'}>Зарегистрироваться</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
