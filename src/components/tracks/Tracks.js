import React, { Component } from 'react';
import {Consumer} from '../../Context';
import Spinner from '../Layout/Spinner';
import Track from '../tracks/Track';
class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value =>{
                    console.log(value);
                    const {track_list, heading} = value;
                    if(track_list === undefined || track_list.length === 0){
                        return <Spinner/>
                    }else{
                        return (
                        <React.Fragment>
                            <h3 className='text-center mb-4'>{heading}</h3>
                            <div className='row'>
                                {
                                    track_list.map(track =>(
                                        <Track key={track.track.track_id} track={track.track}/>
                                    ))
                                }
                            </div>
                        </React.Fragment>
                        )   
                    }
                }}
            </Consumer>
        )
    }
}

export default Tracks
