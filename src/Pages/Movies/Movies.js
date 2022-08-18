import React from 'react'
import axios from 'axios'
import './Movies.css'
import { useState, useEffect } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'

import Genre from '../../components/Genre/Genre'
import useGenre from '../../hooks/useGenre'
const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPage, setNumPages] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([])

    const fetchMovies = async () => {

        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=658a147237a83583b2f1a3512e81784d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)

        setContent(data.results);
        setNumPages(data.total_pages);
        //  console.log(data);
    }
    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
    }, [page]);
    return (
        <div>
            <div>
                <div className="pageTitle">Movies</div>
                
                <div className='trending'>
                    {
                        content && content.map((c) =>
                            <div className="trending">
                                {content &&
                                    content.map((c) => (
                                        <SingleContent
                                            key={c.id}
                                            id={c.id}
                                            poster={c.poster_path}
                                            title={c.title || c.name}
                                            date={c.first_air_date || c.release_date}
                                            media_type="movie"
                                            vote_average={c.vote_average}
                                        />
                                    ))}
                            </div>
                        )
                    }
                </div>
                {
                    numOfPage > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPage} />)
                }

            </div>
        </div>
    )
}

export default Movies
