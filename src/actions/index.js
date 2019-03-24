// Action creator
// put 'export' before the acton name because there may be more actions to export
// there is no 'default' to export
export const selectSong = song => {
    // Return an action ( plain js object)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

