import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Layout/Spinner';
import {Link} from 'react-router-dom';

class Lyrics extends Component {
    state={
        track: {},
        lyrics: {}
    }
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(response => {

            this.setState({lyrics: response.data.message.body.lyrics});
            console.log('Lyrics for Song',this.state)
            return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res =>{
            this.setState({track: res.data.message.body.track});
                console.log(this.state)
            })
        })
        .catch(err => console.log(err));
    }
    render(){
        const {track, lyrics} = this.state;
        if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(track).length === 0){
            return <Spinner/>
        }else{
           return (
               <React.Fragment>
                    <Link exact to='/' className='btn btn-dark btn-sm mb-4'>Go Back</Link>
                    <div className='card'>
                        <div className='card-header'>
                            {track.track_name} by <span className='text-secondary'>{track.artist_name}</span>
                        </div>
                        <div className='card-body'>
                            <p className='card-text'>{lyrics.lyrics_body}</p>
                        </div>
                    </div>
               </React.Fragment>
           )
        }
    }
}

export default Lyrics;