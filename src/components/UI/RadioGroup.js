// Update to RadioGroup.js
import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../styles/UI.css';

const RadioGroup = ({ 
  label, 
  name, 
  options, 
  required = false,
  noLabel = false,
  inline = false,
  ...rest 
}) => {
  const { register, formState: { errors } } = useFormContext();
  
  const rules = required ? { required: 'This field is required' } : {};
  
  return (
    <div className="radio-group-container">
      {!noLabel && (
        <label className="radio-group-label" htmlFor={name}>
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <div className={`radio-options ${inline ? 'radio-options-inline' : ''}`}>
        {options.map((option) => (
          <label key={option.value} className="radio-option">
            <input
              type="radio"
              value={option.value}
              {...register(name, rules)}
              {...rest}
            />
            {option.label}
          </label>
        ))}
      </div>
      {errors[name] && (
        <span className="input-error">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default RadioGroup;