import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css'
import {Consumer} from '../../Context';

class Search extends Component {
    state = {
        trackTitle: ''
    } 
    onChange=(e)=>{
        this.setState({trackTitle: e.target.value});
    }
    findTrackOnSubmit=(dispatch,e)   =>{
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(response => {
            //this.setState({track_list: response.data.message.body.track_list})
            console.log(response.data)
            dispatch({type: "SEARCH_TRACKS", payload: response.data.message.body.track_list})
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return(
                        <div className='card card-body mb-4 p-4 search-bar'>
                              <h1 className='display-4 text-center'>Search for any song </h1>  
                              <form onSubmit={this.findTrackOnSubmit.bind(this, dispatch)}>
                              <div className='form-group'>
                                    <input type='text' className='form-control form-control-lg' placeholder='Search for a song..'
                                    name='trackTitle'
                                    value={this.state.trackTitle}
                                    onChange={this.onChange}
                                    />
                              </div>
                              </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;
