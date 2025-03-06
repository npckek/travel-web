import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import Header from "./Header";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};
const center = { lat: 55.751244, lng: 37.618423 }; // Москва по умолчанию
const GOOGLE_MAPS_API_KEY = "INSERT_YOUR_API_KEY";

const TravelApp = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [travels, setTravels] = useState([]);
    const [users, setUsers] = useState([]);
    const [newTravel, setNewTravel] = useState({
        location: "",
        lat: null,
        lng: null,
        city: "",
        country: "",
        cost: "",
        convenience: 3,
        safety: 3,
        population: 3,
        greenery: 3,
        points: [],
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) setCurrentUser(JSON.parse(storedUser));

        const storedTravels = localStorage.getItem("travels");
        if (storedTravels) setTravels(JSON.parse(storedTravels));

        const storedUsers = localStorage.getItem("users");
        if (storedUsers) setUsers(JSON.parse(storedUsers));
    }, []);

    useEffect(() => {
        localStorage.setItem("travels", JSON.stringify(travels));
    }, [travels]);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleAddTravel = () => {
        if (!currentUser) return alert("Пожалуйста, войдите в систему");
        const travel = { ...newTravel, id: nanoid(), user: currentUser.name };
        setTravels([...travels, travel]);
        setNewTravel({ location: "", cost: "", convenience: 3, safety: 3, population: 3, greenery: 3, points: [] });

        const updatedUsers = users.map(user =>
            user.id === currentUser.id ? { ...user, trips: [...user.trips, travel] } : user
        );
        setUsers(updatedUsers);

        const updatedCurrentUser = { ...currentUser, trips: [...currentUser.trips, travel] };
        setCurrentUser(updatedCurrentUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
    };

    const handleDeleteTravel = (id) => {
        setTravels(travels.filter(travel => travel.id !== id));
    };

    const reverseGeocode = async (lat, lng) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.results.length > 0) {
                const addressComponents = data.results[0].address_components;
                const city = addressComponents.find(component => component.types.includes("locality"))?.long_name || "";
                const country = addressComponents.find(component => component.types.includes("country"))?.long_name || "";
                return { city, country };
            } else {
                console.error("No results found for the given coordinates.");
                return { city: "", country: "" };
            }
        } catch (error) {
            console.error("Error fetching geocode data:", error);
            return { city: "", country: "" };
        }
    };

    const addPoint = async (lat, lng) => {
        const { city, country } = await reverseGeocode(lat, lng);
        setNewTravel(prevState => ({
            ...prevState,
            points: [...prevState.points, { lat, lng, city, country }]
        }));
    };


    return (
        <div className="p-4 max-w-2xl mx-auto text-text">
            <Header/>
            <h2 className="text-xl font-bold mt-4">Добавить путешествие</h2>
            <input className="border border-border bg-block p-2 w-full mb-2"  name="location" placeholder="Местоположение" value={newTravel.location} onChange={(e) => setNewTravel({ ...newTravel, location: e.target.value })} />
            <input className="border border-border bg-block p-2 w-full mb-2" name="cost" placeholder="Стоимость" value={newTravel.cost} onChange={(e) => setNewTravel({ ...newTravel, cost: e.target.value })} />
            <textarea className="border border-border bg-block p-2 w-full mb-2" name="description" placeholder="Описание" value={newTravel.description} onChange={(e) => setNewTravel({ ...newTravel, description: e.target.value })} />
            <div className='flex flex-col p-4'>
                <label>Удобство передвижения:</label>
                <input type="range" min="1" max="10" name="convenience" value={newTravel.convenience} onChange={(e) => setNewTravel({ ...newTravel, convenience: Number(e.target.value) })} />
                <label>Безопасность:</label>
                <input type="range" min="1" max="10" name="safety" value={newTravel.safety} onChange={(e) => setNewTravel({ ...newTravel, safety: Number(e.target.value) })} />
                <label>Населенность:</label>
                <input type="range" min="1" max="10" name="population" value={newTravel.population} onChange={(e) => setNewTravel({ ...newTravel, population: Number(e.target.value) })} />
                <label>Растительность:</label>
                <input type="range" min="1" max="10" name="greenery" value={newTravel.greenery} onChange={(e) => setNewTravel({ ...newTravel, greenery: Number(e.target.value) })} />

            </div>


            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5} onClick={(e) => addPoint(e.latLng.lat(), e.latLng.lng())}>
                    {newTravel.points.map((point, index) => (
                        <Marker key={index} position={{ lat: point.lat, lng: point.lng }} />
                    ))}
                </GoogleMap>
            </LoadScript>

            <div className='flex items-center justify-center p-4'>
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAddTravel}>
                    Добавить
                </button>
            </div>


            <h2 className="text-xl font-bold mt-4">Список путешествий</h2>
            {travels.map((travel) => (
                <div key={travel.id} className="border border-border bg-block p-2 mb-2">
                    <p><strong>
                        <Link to={`/user/${travel.user}`}>
                            {travel.user}
                        </Link>
                    </strong></p>
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
                    {currentUser && currentUser.name === travel.user && (
                        <button className="bg-red-500 text-white px-2 py-1 rounded mt-2" onClick={() => handleDeleteTravel(travel.id)}>
                            Удалить
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TravelApp;
