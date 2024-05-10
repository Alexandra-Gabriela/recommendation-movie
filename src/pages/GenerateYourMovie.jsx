import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/GenerateMovie/Card'
import Loading from '../components/GenerateMovie/Loading'


const types = ["movie"];

function GenerateYourMovie() {
    const [filter, setFilter] = useState("prime");
    const [type, setType] = useState("movie");
    const [data, setdata] = useState();
    const [page, setpage] = useState(1);
    const [shownMovie, setShownMovie] = useState(null);
    const [shuffle, setshuffle] = useState(true);

useEffect(()=>{
async function fetchData() {
try{
    const url = 'https://streaming-availability.p.rapidapi.com/shows/%7Bid%7D?series_granularity=episode&output_language=en'
    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c8a8e2ce2amsh8be6791c137a71cp16c4d4jsnafb4580475dc',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };  

	const response = await fetch(url, options);
	const result = await response.json();
    if (data && data.results && data.results.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.results.length);
                    setShownMovie(data.results[randomIndex]);
    }
} catch (error) {
	console.error(error);
}
}
  fetchData(); // Apelează funcția fetchData pentru a obține datele despre film
}, [filter, type, shuffle]);


return (
    <div>
        <div className="container mx-auto min-h-screen px-2 mb-6">
        <div className="mx-auto min-h-screen flex flex-col justify-start items-center mt-16">
            <p className="change text-4xl font-semibold relative">
            <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-900 bg-clip-text text-transparent absolute top-0 left-0 w-full h-full">Hello, dear!</span>
            </p>
            <p>
            <span className="text-2xl bg-gradient-to-r from-red-700 via-red-500 to-red-300 bg-clip-text text-transparent ">Now you can generate a movie to watch</span>
            </p>

            <div onClick={() => setshuffle(!shuffle)} className="shuffle">
            Shuffle {type}
            </div>
            {shownMovie ? <Card movie={shownMovie} type={type} /> : <Loading />}
        </div>
        </div>
    </div>
    );
    }

export default GenerateYourMovie;
