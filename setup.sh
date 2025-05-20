#!/bin/bash

# Continue with OtherInfoPage.js
cat >> src/components/FormPages/OtherInfoPage.js << 'EOL'
  return (
    <div className="form-section">
      <h2 className="section-title">OTHER INFORMATION</h2>
      
      <div className="form-grid">
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <Textarea 
              label="Any Other Observations" 
              name="observations" 
              rows="5"
            />
          </div>
        </div>
        
        <h3 className="section-subtitle">Technical Personnel</h3>
        
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <Input 
              label="Name of Technical Personnel" 
              name="technicalPersonnelName" 
            />
          </div>
        </div>
        
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <Input 
              label="Position of Technical Personnel" 
              name="technicalPersonnelPosition" 
            />
          </div>
        </div>
        
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <Input 
              label="Date" 
              name="technicalPersonnelDate" 
              type="date"
            />
          </div>
        </div>
        
        <h3 className="section-subtitle">CA Inspector</h3>
        
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <Input 
              label="Name of CA Inspection Personnel" 
              name="inspectorName" 
            />
          </div>
        </div>
        
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <Input 
              label="Date" 
              name="inspectorDate" 
              type="date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfoPage;
EOL

# Create CSS files
cat > src/styles/App.css << 'EOL'
/* App.css - Main application styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.app {
  display: flex;
  justify-content: center;
  padding: 20px;
}

/* Responsive font sizes */
html {
  font-size: 16px;
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

/* Utility classes */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
.mt-4 { margin-top: 1.5rem; }
.mt-5 { margin-top: 2rem; }

.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 2rem; }

.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-3 { padding-top: 1rem; padding-bottom: 1rem; }
.py-4 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
.py-5 { padding-top: 2rem; padding-bottom: 2rem; }

.px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-3 { padding-left: 1rem; padding-right: 1rem; }
.px-4 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-5 { padding-left: 2rem; padding-right: 2rem; }

/* Form elements */
.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group {
  margin-bottom: 1rem;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Button styles */
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #0066cc;
  border-color: #0066cc;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #004c99;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

/* Grid system */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
.col-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
.col-3 { flex: 0 0 25%; max-width: 25%; }
.col-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
.col-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
.col-6 { flex: 0 0 50%; max-width: 50%; }
.col-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
.col-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
.col-9 { flex: 0 0 75%; max-width: 75%; }
.col-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
.col-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
.col-12 { flex: 0 0 100%; max-width: 100%; }

/* Responsive columns */
@media (min-width: 576px) {
  .col-sm-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  .col-sm-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
  .col-sm-3 { flex: 0 0 25%; max-width: 25%; }
  .col-sm-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-sm-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
  .col-sm-6 { flex: 0 0 50%; max-width: 50%; }
  .col-sm-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
  .col-sm-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
  .col-sm-9 { flex: 0 0 75%; max-width: 75%; }
  .col-sm-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
  .col-sm-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
  .col-sm-12 { flex: 0 0 100%; max-width: 100%; }
}

@media (min-width: 768px) {
  .col-md-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  .col-md-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
  .col-md-3 { flex: 0 0 25%; max-width: 25%; }
  .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-md-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
  .col-md-6 { flex: 0 0 50%; max-width: 50%; }
  .col-md-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
  .col-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
  .col-md-9 { flex: 0 0 75%; max-width: 75%; }
  .col-md-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
  .col-md-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
  .col-md-12 { flex: 0 0 100%; max-width: 100%; }
}

@media (min-width: 992px) {
  .col-lg-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  .col-lg-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
  .col-lg-3 { flex: 0 0 25%; max-width: 25%; }
  .col-lg-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-lg-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
  .col-lg-6 { flex: 0 0 50%; max-width: 50%; }
  .col-lg-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
  .col-lg-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
  .col-lg-9 { flex: 0 0 75%; max-width: 75%; }
  .col-lg-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
  .col-lg-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
  .col-lg-12 { flex: 0 0 100%; max-width: 100%; }
}
EOL

cat > src/styles/Form.css << 'EOL'
/* Form.css - Styles for the form container */

.form-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.form-page-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
}

.page-info {
  font-weight: 500;
  color: #333;
}

.form-id {
  color: #666;
  font-size: 0.9rem;
}

/* Form sections */
.form-section {
  padding: 20px;
}

.section-title {
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #e9ecef;
  color: #000;
  font-weight: 600;
  border-radius: 4px;
}

/* Radio button groups */
.radio-group {
  display: flex;
  gap: 15px;
  margin-top: 5px;
}

.radio-option {
  display: flex;
  align-items: center;
}

.radio-option input[type="radio"] {
  margin-right: 5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-container {
    border-radius: 0;
    box-shadow: none;
  }
  
  .form-section {
    padding: 15px;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 8px;
  }
}
EOL

cat > src/styles/FormPages.css << 'EOL'
/* FormPages.css - Styles for individual form pages */

.form-grid {
  width: 100%;
}

.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
  margin-bottom: 15px;
}

.grid-col {
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
}

/* Responsive grid columns */
.grid-col-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
.grid-col-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
.grid-col-3 { flex: 0 0 25%; max-width: 25%; }
.grid-col-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
.grid-col-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
.grid-col-6 { flex: 0 0 50%; max-width: 50%; }
.grid-col-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
.grid-col-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
.grid-col-9 { flex: 0 0 75%; max-width: 75%; }
.grid-col-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
.grid-col-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
.grid-col-12 { flex: 0 0 100%; max-width: 100%; }

/* Required field indicator */
.required-mark {
  color: #dc3545;
  margin-left: 3px;
}

/* Section styles */
.section-title {
  font-size: 1.25rem;
  background-color: #e9ecef;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 4px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #495057;
  margin: 15px 0 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #dee2e6;
}

/* Table styles for some sections */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.data-table th,
.data-table td {
  padding: 8px;
  border: 1px solid #dee2e6;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  text-align: left;
}

.data-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

/* Textarea styles */
.textarea-container {
  margin-bottom: 15px;
}

.textarea-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.textarea-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
}

.textarea-field:focus {
  border-color: #0066cc;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 102, 204, 0.25);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-col-6,
  .grid-col-4,
  .grid-col-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .data-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
EOL

cat > src/styles/UI.css << 'EOL'
/* UI.css - Styles for UI components */

/* Form Header */
.form-header {
  background-color: #0066cc;
  color: white;
  padding: 15px 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title h1 {
  margin: 0;
  font-size: 1.5rem;
}

.header-title p {
  margin: 5px 0 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.ca-logo {
  background-color: white;
  color: #0066cc;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Form Footer */
.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #eee;
}

.footer-buttons {
  display: flex;
  gap: 10px;
}

.page-counter {
  color: #666;
  font-size: 0.9rem;
}

/* Custom Input */
.input-container {
  margin-bottom: 15px;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.input-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-field:focus {
  border-color: #0066cc;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 102, 204, 0.25);
}

.input-error {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 5px;
}

/* Radio Group */
.radio-group-container {
  margin-bottom: 15px;
}

.radio-group-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.radio-options {
  display: flex;
  gap: 15px;
}

.radio-option {
  display: flex;
  align-items: center;
}

.radio-option input[type="radio"] {
  margin-right: 5px;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .header-title h1 {
    font-size: 1.2rem;
  }
  
  .ca-logo {
    width: 40px;
    height: 40px;
  }
  
  .footer-buttons {
    flex-direction: column;
    gap: 8px;
  }
  
  .btn {
    width: 100%;
  }
}
EOL

# Start the app
echo "All files created successfully! Now run the following commands to start your app:"
echo "cd tv-inspection-form"
echo "npm start"