import React from 'react'
import { img_300, unavailable } from '../../conflg/config'
import "./SingleContent.css";
// import { Badge } from '@mui/icons-material';
import CustomPagination from '../Pagination/CustomPagination';
import Badge from '@mui/material/Badge';
import ContentModal from '../ContenModal/ContentModal';

// import { Badge } from "@material-ui/core";
const SingleContent = (
    {
        id, poster, title, date, media_type, vote_average
    }
) => {
    return (
        <>
            <ContentModal media_type={media_type} id={id}>
                <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
                <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
                <b className='.title'>{title}</b>
                <span className='subTitle'> {media_type === "tv" ? "TV Series" : "Movie"}
                    <span className='subTitle'>{date}</span>
                </span>

            </ContentModal>
            {/* //   <CustomPagination /> */}
        </>
    )
}

export default SingleContent