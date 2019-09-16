import React, { Component } from 'react';

import Dog from '../../components/Dog';
import SearchBar from '../../components/SearchBar';
import api from '../../api';

import './styles.css';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      isLoaded: false,
      filteredData: []
    };
  }

  componentDidMount() {
    api.animals.getAnimals()
      .then(response => {
        const {Animals, IsSuccess} = response.data;
        if (IsSuccess) {
          this.setState({dogs: Animals, filteredData: Animals, isLoaded: true});
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateFilter = (filteredData) => {
    this.setState({filteredData});
  }

  render() {
    const {dogs, isLoaded, filteredData} = this.state;

    const dogsArr = filteredData.length ? filteredData.map(dog => {
      return <Dog key={dog.ID} dog={dog} />
    }) : (<div>No results</div>)

    return !isLoaded ? (
      <div>
        Loading...
      </div>
    ) : (
      <div>
        <h1>
          Dogs info
        </h1>
        <SearchBar dogs={dogs} updateFilter={this.updateFilter}/>
        <div className="container">
          {dogsArr}
        </div>
      </div>
    );
  }
}

export default MainPage;
