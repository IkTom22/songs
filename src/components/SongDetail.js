import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    return <div>Song Detail</div>
};

const mapStateToProps = (state) => {
    //don't have to call the key name 'selectedSong'
    return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);