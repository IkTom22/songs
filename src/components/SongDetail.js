import React from 'react';
import { connect } from 'react-redux';

// instead of passing 'props', destructure {song}
const SongDetail = ({ song }) => {

    if (!song) {
        return <div>Select a song</div>
    }
    // console.log(props);
    return (

        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>

        </div>
    );
};

const mapStateToProps = (state) => {
    //don't have to call the key name 'selectedSong'
    // This is the props info goes to SongDetail
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);