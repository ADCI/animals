import React, { Component } from 'react';
import Select from 'react-select'

class AutoCompleteInput extends Component {

  render() {
    const {id, className, label, placeholder, value, onChange, options} = this.props;

    return (
      <div className={className}>
        {label ? (<label className={`${className}__label`} htmlFor={id}>
          {label}
        </label>) : null}
        <Select
          value={options.filter(({ID}) => ID === value)}
          className={`${className}__autocomplete`}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          getOptionLabel={({Name}) => Name}
          getOptionValue={({ID}) => ID}
        />
      </div>
    );
  }
}

export default AutoCompleteInput;
