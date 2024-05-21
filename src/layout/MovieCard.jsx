import React, { useContext } from "react"; 
import { useNavigate } from "react-router-dom"; // Importă hook-ul useNavigate din React Router pentru navigare între rute
import { AuthContext } from "../context/AuthContext"; 

const IMG_API = "https://image.tmdb.org/t/p/w1280"; // URL-ul de bază pentru imaginile filmelor
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"; // Imaginea implicită în cazul în care nu există un poster pentru film

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => { // Componenta MovieCard care primește câteva prop-uri ale unui film și le utilizează pentru a afișa detaliile filmului
  const { currentUser } = useContext(AuthContext); // Extrage informațiile despre utilizatorul curent din contextul de autentificare
  const navigate = useNavigate(); // Obține funcția de navigare din hook-ul useNavigate

  const getVoteClass = (vote) => { 
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };  

  const recommendMovie = (vote_average) => { 
    if (vote_average >= 8) {
      return "Watch this movie now!";
    } else if (vote_average <= 5) {
      return "Avoid this movie at all costs!";
    } else {
      return null;
    }
  };

  return ( // Returnează codul JSX care reprezintă un card pentru film
    <div
      className="movie" // Clasa CSS pentru stilizarea cardului filmului
      id="container" // ID-ul containerului filmului
      onClick={() => navigate("/details/" + id)} // Atașează funcția de navigare la evenimentul de click pe card pentru a naviga la detalii despre film
    >
      <img
        loading="lazy" // Adaugă atributul loading pentru încărcarea lenesă a imaginii
        src={poster_path ? IMG_API + poster_path : defaultImage} // Setează sursa imaginii în funcție de poster_path sau utilizează imaginea implicită
        alt="movie-card" // Text alternativ pentru imagine
      />
      <div className="flex items-center justify-between text-left p-1 text-white"> {/* Div pentru alinierea elementelor la stânga la titlu */}
        <h5>{title}</h5> {/* Titlul filmului */}
        {currentUser && ( // Verifică dacă utilizatorul este autentificat și afișează rating-ul filmului
            <span className={`tag ${getVoteClass(vote_average)}`}> {/* Clasa de stil pentru rating-ul filmului */}
                {vote_average.toFixed(1)} {/* Rating-ul filmului */}
            </span>
        )}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-y-auto p-4"> {/* Div pentru afișarea detaliilor filmului */}
        <h2>Overview</h2> {/* Titlu pentru rezumatul filmului */}
        <p>{overview}</p> {/* Rezumatul filmului */}
        {recommendMovie(vote_average) && ( // Verifică dacă există un mesaj de recomandare și afișează-l
          <p className="text-red-500 p-2 font-bold bg-gray-700 pulse flex items-center justify-center">{recommendMovie(vote_average)}</p> // Mesajul de recomandare
        )}
      </div>
    </div>
  );
};

export default MovieCard; // Exportă componenta MovieCard pentru a fi utilizată în alte părți ale aplicației
