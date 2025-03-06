import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";

const UserPage = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const foundUser = users.find(u => u.name === username);
            setUser(foundUser);
        }
    }, [username]);

    if (!user) return <p>Пользователь не найден</p>;

    return (
        <div className="p-4 max-w-2xl mx-auto text-text">
            <Header/>
            <h2 className="text-xl font-bold">Страница пользователя: {user.name}</h2>
            <h3 className="text-lg font-semibold mt-4">Путешествия:</h3>
            {user.trips && user.trips.length > 0 ? (
                user.trips.map((travel) => (
                    <div key={travel.id} className="border border-border bg-block p-2 mb-2">
                        <p>Местоположение: {travel.location}</p>
                        <p>Стоимость: {travel.cost}</p>
                        <p>Описание: {travel.description}</p>
                        <p>Удобство: {travel.convenience}</p>
                        <p>Безопасность: {travel.safety}</p>
                        <p>Населенность: {travel.population}</p>
                        <p>Растительность: {travel.greenery}</p>
                        {travel.points.map((point, index) => (
                            <p key={index}>
                                Точка {index + 1}: Город: {point.city}, Страна: {point.country}
                            </p>
                        ))}
                    </div>
                ))
            ) : (
                <p>У пользователя пока нет путешествий.</p>
            )}
        </div>
    );
}
export default UserPage;