import React from 'react';
import '../../styles/UI.css';

const FormHeader = () => {
  return (
    <div className="form-header">
      <div className="header-content">
        <div className="header-title">
          <h1>FM & TV Inspection Form</h1>
          <p>Communications Authority of Kenya</p>
        </div>
        <div className="header-logo">
          {/* Replace with actual logo */}
          <div className="ca-logo">CA</div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;