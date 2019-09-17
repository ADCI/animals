import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const {id, className, label, onChange, radioButtons, selectedOption} = this.props;

    const radio = radioButtons.map((radio, index) => {
      return (
        <label className={`${className}__label`} key={index}>
          <input
            value={radio.value}
            type="radio"
            className={`${className}__input`}
            onChange={onChange}
            checked={selectedOption === radio.value}
          />
          {radio.label}
        </label>
      )
    });

    return (
      <div className={className}>
        {label ? (<label className={`${className}__label`} htmlFor={id}>
          {label}
        </label>) : null}
        {radio}
      </div>
    );
  }
}

export default Radio;
