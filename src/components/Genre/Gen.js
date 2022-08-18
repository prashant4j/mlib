import React from 'react'
import Chip from '@mui/material/Chip';
import axios from 'axios'
import { useEffect } from 'react'
const Gen = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

    const FetchGenres = async () => {

        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre//list?api_key=658a147237a83583b2f1a3512e81784d&language=en-US`
            // https://api.themoviedb.org/3/genre/movie/list?api_key=658a147237a83583b2f1a3512e81784d&language=en-US
        );
        setGenres(data.genres);
    };
    console.log(genres);
    useEffect(() => {
        FetchGenres();
        return () => {
            setGenres({})
        }
    }, [])
    // const x = genres.map((genre) => (
    //     console.log(genre)
    // ))
    // console.log(x);
    console.log(typeof (genres))
    return (
        <>
            <div>

            </div>
        </>
    )
}

export default Gen
