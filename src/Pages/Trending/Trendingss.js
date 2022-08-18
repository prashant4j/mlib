import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        // const { data } = await axios.get(
        //     `https://api.themoviedb.org/3/trending/all/day?api_key=658a147237a83583b2f1a3512e81784d&page=${page}`
        // );
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=658a147237a83583b2f1a3512e81784d`
        );
        console.log("hello");
        console.log(data);
        setContent(data.results);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return (
        <div>
            <span className="PageTitle">Trending</span>
        </div>
    )
}

export default Trending
