import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/GenerateMovie/Card'
import Loading from '../components/GenerateMovie/Loading'


const types = ["movie", "series"];

function GenerateYourMovie() {
    const [filter, setfilter] = useState("prime");
    const [type, settype] = useState("movie");
    const [data, setdata] = useState();
    const [page, setpage] = useState(1);
    const [shownmovie, setshownmovie] = useState();
    const [shuffle, setshuffle] = useState(true);

    const [openmenu, setopenmenu] = useState(false);

    useEffect(() => {
    setshownmovie();
    if (data) {
      setpage(Math.floor(Math.random() * data?.total_pages + 1));
    } else {
      setpage(Math.floor(Math.random() * 30 + 1));
    }
        const options = {
            method: "GET",
            url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
            params: {
                country: "us",
                service: filter,
                type: type,
                genre: "18",
                page: page,
            },
            headers: {
                "X-RapidAPI-Key": "bf34c6b856msh03178a0fe823966p103884jsnad3b8dfcf8dd",
                "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
            },
            };
            axios
            .request(options)
            .then((response) => {
                setdata(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, [filter, type, shuffle]);
        useEffect(() => {
            const b = Math.floor(Math.random() * 7);
            data?.results.map((movie, index) => {
            if (index == b) {
                setshownmovie(movie);
                return;
            }
            });
        }, [data]);
    return (
        <div>
            <div className="container mx-auto min-h-screen px-2 mb-6">
            <div className= "mx-auto min-h-screen flex flex-col justify-start items-center mt-16">
    <p className="change text-4xl font-semibold relative">
        <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-900 bg-clip-text text-transparent absolute top-0 left-0 w-full h-full">Hello, dear!</span>
    </p>
    <p>
        <span className="text-2xl bg-gradient-to-r from-red-700 via-red-500 to-red-300 bg-clip-text text-transparent ">Now you can generate a movie to watch</span>
    </p>

        <div onClick={() => setshuffle(!shuffle)} className="shuffle">
        Shuffle {type}
    </div>
        {shownmovie && <Card movie={shownmovie} type={type} />}
        {!shownmovie && <Loading />}
    </div>
        </div>
        </div>
        
    );
}

export default GenerateYourMovie;
