import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';
const API_KEY = 'AIzaSyD7bS__LRBd51gUb5LJebeCLz3dDrOU6QA';

// Create a new component and this component should produce some HTML
// must instantiate a component before rendering it to the DOM



//const == this variable cannot change ever
//JSX is a javascript subset that is interpreted by webpack and babel

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('Michigan Wolverines');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos });
      // works only when the key and the property are the same variable name
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
  	return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos ={this.state.videos} />
      </div>
    );
  }
}

// Take this compent's generate HTML and put it onto the page/into the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
