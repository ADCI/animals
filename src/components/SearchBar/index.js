import React, { Component } from 'react';

import './styles.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  dataSearch = e => {
    const {dogs, updateFilter} = this.props;

    const value = e.target.value.toLowerCase();

    this.setState({term: value})

    const filter = dogs.filter(dog => {
      return dog.Name.toLowerCase().includes(value);
    });

    updateFilter(filter)
  };

  render() {
    const {term} = this.state;

    return (
      <div className="searchbar">
        <input
          value={term}
          type="text"
          className="searchbar__input"
          placeholder="Search grid"
          onChange={this.dataSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
