// Necessary for react.createElemenet
import React, { Component} from 'react';

//create a class called SearchBar and give it access to all of the
//function of a React component
//Class based components are used when we need to be able to
//keep track of state over time
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Search for new videos here:'}
  }

  // render is a method/function
  // every class must have a render function
  // if there's only one argument you can drop the curly braces with the => syntax
  render() {
    return (
      <div className="search-bar">
        <input
          //This makes it a controlled component, it's value is now set by state
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
