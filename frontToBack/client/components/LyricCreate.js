import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
    }

    onSubmit(event){
        event.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content,
                id: this.props.songId
            }
        }).then(() => this.setState({content: ''}));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input
                    value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}/>
            </form>
        );
    }
}

const mutation = gql`
    mutation AddLyric($content:String, $id: ID) {
      addLyricToSong(content:$content, songId:$id) {
        id
        lyrics {
          content
        }
      }
    }
`;

export default graphql(mutation)(LyricCreate);
