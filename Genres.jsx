import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(Object.values(genres).filter((g) => g.id !==genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(Object.values(selectedGenres).filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    }


    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=658a147237a83583b2f1a3512e81784d&language=en-US`
        );

        setGenres(data.genres);
    };

    console.log(genres);
    // console.log(`GENRES: ${genres}`);

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        };
        // eslint-disable-next-line
    }, []);


    let result = Object.values(genres);
    console.log(result)


    return (

        <div style={{ padding: "6px 0px" }}>

            {/* {result && result.map((item) => ( */}
            {result.map((item) => (

                <Chip
                    label={item.name}
                    style={{ margin: "2px" }}
                    size="small"
                    color="primary"
                    key={item.id}
                    clickable
                    onDelete={() => handleRemove(item)}
                />
            ))}
                    

            {/* { result && result.map((item) => ( */}
            {result.map((item) => (
      
                <Chip
                    label={item.name}
                    style={{ margin: "2px" }}
                    size="small"
                    // color="primary"
                    key={item.id}
                    clickable
                   onClick={() => handleAdd(item)}
                //    onDelete={() => handleRemove(item)}
                />
           )) } 
            
        </div>
    );
};

export default Genres;