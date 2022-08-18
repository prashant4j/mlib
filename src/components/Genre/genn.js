import React from 'react'

import axios from 'axios'
import { useEffect } from 'react'




const fetchGenres = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=658a147237a83583b2f1a3512e81784d&language=en-US`
    );

    setGenres(data.genres);
};
