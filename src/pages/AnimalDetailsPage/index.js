import React, { Component } from 'react';
import moment from 'moment';

import InputText from '../../components/UI/InputText';
import Radio from '../../components/UI/Radio';
import AutoCompleteInput from '../../components/UI/AutoCompleteInput';
import CustomDatePicker from '../../components/UI/CustomDatePicker';
import Button from '../../components/UI/Button';
import api from '../../api';

import './styles.css';

class AnimalDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: '',
      birthdate: null,
      colorID: null,
      raceID: null,
      colors: [],
      races: [],
      color: '',
      race: '',
      isDangerous: true,
      isLoaded: false,
      errorMessage: null
    };
  }

  componentDidMount() {
    const {id} = this.state;

    api.animals.getAnimalDetails(id)
      .then(response => {
        const {AnimalDetails, IsSuccess} = response.data;

        if (IsSuccess) {
          this.setState({name: AnimalDetails.Name, colorID: AnimalDetails.ColorID, raceID: AnimalDetails.RaceID, birthdate: AnimalDetails.Birthdate, isDangerous: AnimalDetails.IsDangerous});
        }

        api.animals.getColors()
          .then(response => {
            const {Colors, IsSuccess} = response.data;

            if (IsSuccess) {
              this.setState({colors: Colors});
            }

            api.animals.getRaces()
              .then(response => {
                const {Races, IsSuccess} = response.data;
                if (IsSuccess) {
                  this.setState({races: Races, isLoaded: true});
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }

  handleChangeDangerous = (event) => {
    const newValue = event.target.value === 'true' ? true : false;
    this.setState({isDangerous: newValue});
  }

  handleColor = selectedOption => {
    this.setState({ color: selectedOption.Name, colorID: selectedOption.ID });
  };

  handleRace = selectedOption => {
    this.setState({ race: selectedOption.Name, raceID: selectedOption.ID });
  };

  handleBirthdate = (event) => {
    const changedDate = moment(event.target.value, 'YYYY-MM-DD').format("DD/MM/YYYY 00:00:00");
    this.setState({birthdate: changedDate});
  }

  handleSave = (event) => {
    const {id, name, raceID, colorID, birthdate, isDangerous} = this.state;

    api.animals.saveAnimalDetails(id, name, raceID, colorID, birthdate, isDangerous)
      .then(response => {
        const {IsSuccess, ErrorMessage} = response.data;

        if (IsSuccess) {
          this.handleCancel();
        } else {
          this.setState({errorMessage: ErrorMessage})
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleCancel = () => {
    this.props.history.goBack()
  }

  render() {
    const {isLoaded, name, isDangerous, colors, colorID, races, raceID, birthdate, errorMessage} = this.state;

    return !isLoaded ? (
      <div>
        Loading...
      </div>
    ) : (
      <div>
        <h1>
          Edit animal
        </h1>
        <div>
          <InputText
            id='name'
            className='name'
            placeholder='' label='Name:'
            onChange={this.handleChangeName}
            value={name}/>
          <AutoCompleteInput
            id='colors'
            className='colors'
            label='Color:'
            onChange={this.handleColor}
            value={colorID}
            options={colors}
            placeholder=''/>
          <AutoCompleteInput
            id='races'
            className='races'
            label='Race:'
            onChange={this.handleRace}
            value={raceID}
            options={races}
            placeholder=''/>
          <CustomDatePicker
            id='birthdate'
            className='birthdate'
            label='Birthdate:'
            onChange={this.handleBirthdate}
            value={birthdate}/>
          <Radio id='dangerous'
            className='dangerous'
            label='isDangerous:'
            onChange={this.handleChangeDangerous}
            value={name}
            radioButtons={[{
              label: 'Yes',
              value: true
            },{
              label: 'No',
              value: false
            }]}
            selectedOption={isDangerous}/>
            <div className="actions">
              <Button label="Save" onClick={this.handleSave} />
              <Button label="Cancel" onClick={this.handleCancel} />
            </div>
            {errorMessage ? (<div className="error-message">{errorMessage}</div>) : null}
        </div>
      </div>
    );
  }
}

export default AnimalDetailsPage;
