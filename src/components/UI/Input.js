// Update to Input.js
import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../styles/UI.css';

const Input = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder = '', 
  required = false,
  noLabel = false,
  validation = {},
  className = '',
  ...rest 
}) => {
  const { register, formState: { errors } } = useFormContext();
  
  // Combine passed validation with required validation if needed
  const rules = required 
    ? { ...validation, required: 'This field is required' } 
    : validation;
  
  return (
    <div className={`input-container ${className}`}>
      {!noLabel && (
        <label className="input-label" htmlFor={name}>
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <input
        id={name}
        className={`input-field ${errors[name] ? 'input-error-field' : ''}`}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        {...rest}
      />
      {errors[name] && (
        <span className="input-error">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default Input;