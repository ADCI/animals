import React, { Component } from 'react';

import InputText from '../UI/InputText'

import './styles.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.timeout =  0;

    this.state = {
      term: ''
    };
  }

  dataSearch = e => {
    const {dogs, updateFilter} = this.props;

    const value = e.target.value.toLowerCase();
    this.setState({term: value})

    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {

      const filter = dogs.filter(dog => {
        return dog.Name.toLowerCase().includes(value);
      });

      updateFilter(filter)
    }, 300);
  };

  render() {
    const {term} = this.state;

    return (
      <InputText
        id='searchbar'
        className='searchbar'
        placeholder='Search grid'
        onChange={this.dataSearch}
        value={term}/>
    );
  }
}

export default SearchBar;
