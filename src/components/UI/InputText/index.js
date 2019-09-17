import React, { Component } from 'react';

import './styles.css';

class InputText extends Component {
  render() {
    const {id, className, label, placeholder, value, onChange} = this.props;

    return (
      <div className={className}>
        {label ? (<label className={`${className}__label`} htmlFor={id}>
          {label}
        </label>) : null}
        <input
          id={id}
          value={value}
          type="text"
          className={`${className}__input`}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default InputText;
