import React from 'react'
import  '../../App.css';
import {Link} from 'react-router-dom'

const Track=(props)=> {
    const {track} = props;
    return (
        <div className='col-md-4'>
            <div className='card mb-4 shadow-sm oru-card-da'>
                <div className='card-body'>
                <h5>{track.artist_name}</h5>
                <p className='card-text'>
                <strong><i className='fas fa-play'></i> Track: {track.track_name}</strong><br></br>
                <strong><i class="fas fa-record-vinyl"></i> Album: {track.album_name}</strong>  
                </p>
                </div>
                <Link to={`lyrics/track/${track.track_id}`} className='btn btn-dark btn-block lyrics-btn'><i className='fas fa-chevron-right'></i>View Lyrics</Link>
            </div>
        </div>
    )
}

export default Track;