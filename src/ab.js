{content && (
    <div >
        <div className="ContentModal">
            {/* <img
                src={
                    content.poster_path
                        ? `${img_500}/${content.poster_path}`
                        : unavailable
                }
                alt={content.name || content.title}
                className="ContentModal__portrait"
            />
            <img
                src={
                    content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                }
                alt={content.name || content.title}
                className="ContentModal__landscape"
            /> */}
            <div >
                {/* <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                    ).substring(0, 4)}
                    )
                </span>
                {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                )} */}

                <span className="ContentModal__description">
                    {content.overview}
                </span>



                <Button
                    variant="contained"
                    startIcon={< AbcIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                >
                    Watch the Trailer
                </Button>
            </div>
        </div>
    </div>
)}