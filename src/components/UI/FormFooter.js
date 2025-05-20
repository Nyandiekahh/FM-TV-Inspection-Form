import React from 'react';
import '../../styles/UI.css';

const FormFooter = ({ currentPage, totalPages, prevPage, nextPage, onSubmit }) => {
  return (
    <div className="form-footer">
      <div className="footer-buttons">
        {currentPage > 1 && (
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={prevPage}
          >
            Previous
          </button>
        )}
        
        {currentPage < totalPages ? (
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={nextPage}
          >
            Next
          </button>
        ) : (
          <button 
            type="submit" 
            className="btn btn-success"
          >
            Submit
          </button>
        )}
      </div>
      
      <div className="page-counter">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default FormFooter;