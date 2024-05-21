import React, { useState, useContext } from 'react'; 
import { AuthContext } from '../context/AuthContext'; 
import axios from 'axios'; 
import MovieByActor from '../layout/MovieByActor'; 
const API_KEY = '62ffac58c57333a136053150eaa1b587'; // Cheia API pentru accesul la serviciul de căutare după actor

const ActorSearch = () => { // Definirea componentei ActorSearch
    const [actorName, setActorName] = useState(''); // Starea pentru numele actorului introdus în câmpul de căutare
    const [movies, setMovies] = useState([]); // Starea pentru lista de filme returnate de căutare
    const [loading, setLoading] = useState(false); // Starea care indică dacă se încarcă datele
    const [error, setError] = useState(null); // Starea pentru gestionarea erorilor în timpul căutării
    const { currentUser } = useContext(AuthContext); // Extrage informațiile despre utilizatorul curent din contextul de autentificare

    // Funcția pentru a căuta filmele după un actor folosind API-ul
    const fetchActorMovies = async (actorName) => {
        setLoading(true); // Setează starea de încărcare la adevărat

        try {
            const response = await axios.get(`https://actor-movie-api1.p.rapidapi.com/getid/${actorName}`, { // Efectuează o cerere GET către API-ul de căutare după actor
                params: { apiKey: API_KEY }, // Parametrii cererii
                headers: {
                    'X-RapidAPI-Key': 'c8a8e2ce2amsh8be6791c137a71cp16c4d4jsnafb4580475dc', // Cheia de acces pentru RapidAPI
                    'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com', // Host-ul pentru RapidAPI
                },
            });

            setMovies(response.data || []); // Setează rezultatele căutării în starea de filme sau un tablou gol dacă nu există date
        } catch (error) {
            setError('Failed to fetch movies. Please try again.'); // Setează eroarea în cazul în care căutarea a eșuat
        } finally {
            setLoading(false); // Setează starea de încărcare la fals
        }
    };

    // Funcție pentru gestionarea căutării
    const handleSearch = async (event) => {
        event.preventDefault(); // Previne comportamentul implicit al formularului
        setLoading(true); // Setează starea de încărcare la adevărat
        setError(null); // Resetează eroarea la null
        await fetchActorMovies(actorName); // Apelul funcției de căutare a filmelor după actor
        setLoading(false); // Setează starea de încărcare la fals
    };

    // Returnează JSX-ul pentru a afișa formularul de căutare și rezultatele căutării
    return (
        <div className="flex flex-col items-center min-h-screen pt-10"> {/* Div-ul principal care conține întreaga componentă */}
            <form className="flex justify-center p-2 pad-50" onSubmit={handleSearch}> {/* Formularul de căutare */}
                <input
                    type="search"
                    className="w-600 h-8 p-1 m-2 border-b-2 border-gray-300 outline-none rounded-full placeholder-gray-500 focus:ring-2 focus:ring-gray-300 hover:ring-2 hover:ring-gray-300" // Clasele CSS pentru stilizarea câmpului de căutare
                    placeholder="Enter actor name..." // Textul de substituire pentru câmpul de căutare
                    value={actorName} // Valoarea câmpului de căutare
                    onChange={(e) => setActorName(e.target.value)} // Funcția pentru actualizarea stării câmpului de căutare în timp real
                />
                <button className="btn-danger-bordered rounded-full" type="submit" disabled={loading}> {/* Butonul de căutare */}
                    {loading ? 'Searching...' : 'Search'} {/* Textul butonului, care se schimbă în funcție de starea de încărcare */}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>} {/* Afișează mesajul de eroare în cazul în care căutarea a eșuat */}
            <MovieByActor movies={movies} loading={loading} currentUser={currentUser} /> {/* Componenta MovieByActor care afișează filmele găsite */}
        </div>
    );
};

export default ActorSearch; // Exportă componenta ActorSearch pentru a putea fi utilizată în alte părți ale aplicației
