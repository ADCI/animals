import React, { Component } from 'react';
import moment from 'moment';

class CustomDatePicker extends Component {
  render() {
    const {id, className, label, value, onChange} = this.props;
    const curentDate = moment(value, 'DD/MM/YYYY hh:mm:ss').format("YYYY-MM-DD");

    return (
      <div className={className}>
        {label ? (<label className={`${className}__label`} htmlFor={id}>
          {label}
        </label>) : null}
        <input
          id={id}
          value={curentDate}
          type="date"
          className={`${className}__input`}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default CustomDatePicker;
