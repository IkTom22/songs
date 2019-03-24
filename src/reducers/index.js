import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All star', duration: '4:30' },
        { title: "I Want It That Way", duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

// now the other file can get combined reducers 
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})