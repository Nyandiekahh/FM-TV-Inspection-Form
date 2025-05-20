import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../UI/Input';
import '../../styles/FormPages.css';

const OtherInfoPage = () => {
  const { register } = useFormContext();
  
  const Textarea = ({ label, name, ...rest }) => {
    return (
      <div className="textarea-container">
        <label className="textarea-label" htmlFor={name}>
          {label}
        </label>
        <textarea
          id={name}
          className="textarea-field"
          {...register(name)}
          {...rest}
        />
      </div>
    );
  };

  return (
    <div className="form-section">
      <h2 className="section-title">OTHER INFORMATION</h2>
      
      <div className="form-grid">
        {/* Field 70 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">70</span>
          </div>
          <div className="grid-col grid-col-11">
            <Textarea 
              label="Any Other Observations" 
              name="observations" 
              rows="5"
            />
          </div>
        </div>
        
        {/* Field 71 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">71</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Name of Technical Personnel responsible for Maintenance" 
              name="technicalPersonnelName" 
            />
          </div>
        </div>
        
        {/* Field 72 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">72</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="contact-info-container">
              <div className="contact-header">Name of Contact Personnel of Broadcaster</div>
              <div className="contact-fields">
                <div className="contact-row">
                  <div className="contact-label">Name:</div>
                  <Input 
                    label="" 
                    name="contactName" 
                    noLabel={true}
                  />
                </div>
                <div className="contact-row">
                  <div className="contact-label">Address:</div>
                  <Input 
                    label="" 
                    name="contactAddress" 
                    noLabel={true}
                  />
                </div>
                <div className="contact-row">
                  <div className="contact-label">Tel No:</div>
                  <Input 
                    label="" 
                    name="contactTel" 
                    noLabel={true}
                  />
                </div>
                <div className="contact-row">
                  <div className="contact-label">E-mail:</div>
                  <Input 
                    label="" 
                    name="contactEmail" 
                    noLabel={true}
                    type="email"
                  />
                </div>
              </div>
              <div className="signature-container">
                <div className="signature-row">
                  <div className="signature-col">
                    <Input
                      label="Sign"
                      name="contactSignature"
                    />
                  </div>
                  <div className="signature-col">
                    <Input
                      label="Date"
                      name="contactDate"
                      type="date"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 73 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">73</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="input-label">Name of CA Inspection Personnel</div>
            <div className="ca-personnel-container">
              <div className="ca-personnel-row">
                <div className="signature-row">
                  <div className="signature-col">
                    <Input
                      label="Sign"
                      name="caSignature1"
                      noLabel={true}
                    />
                  </div>
                  <div className="signature-col">
                    <Input
                      label="Date"
                      name="caDate1"
                      type="date"
                      noLabel={true}
                    />
                  </div>
                </div>
              </div>
              <div className="ca-personnel-row">
                <div className="signature-row">
                  <div className="signature-col">
                    <Input
                      label="Sign"
                      name="caSignature2"
                      noLabel={true}
                    />
                  </div>
                  <div className="signature-col">
                    <Input
                      label="Date"
                      name="caDate2"
                      type="date"
                      noLabel={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Page number indicator */}
        <div className="grid-row page-indicator">
          <div className="grid-col grid-col-12">
            <div className="page-number">Page 4 of 4</div>
            <div className="version-number">Version B</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfoPage;