import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>

            );
        });
    }


    render() {
        // this.props === {songs: state.songs}
        // console.log(this.props);

        return <div className="ui divided list">{this.renderList()}</div>;
    }
};

// By convention we call it mapStateToProps() function but you can call it anything you like
//Getting info from the Provider from the Store
const mapStateToProps = state => {
    // console.log(state);
    // return state;
    return { songs: state.songs };
};

// always use 'connect' to update the store
export default connect(
    mapStateToProps,
    // selectSong: selectSong
    //ES6 version
    { selectSong }
)(SongList);