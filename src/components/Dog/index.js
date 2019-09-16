import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './styles.css';

class Dog extends Component {
  render() {
    const {dog} = this.props;

    return (
      <Link className="dog" to={`/${dog.ID}`} >
        <div>Name: {dog.Name}</div>
        <div>Race: {dog.Race}</div>
        <div>Color: {dog.Color}</div>
        <div>Birthdate: {dog.Birthdate}</div>
        <div>isDangerous: {dog.IsDangerous ? 'Yes' : 'No'}</div>
      </Link>
    );
  }
}

export default Dog;
