import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../UI/Input';
import RadioGroup from '../UI/RadioGroup';
import '../../styles/FormPages.css';

const AdminPage = () => {
  const { register } = useFormContext();
  
  return (
    <div className="form-section">
      <h2 className="section-title">ADMINISTRATIVE INFORMATION</h2>
      
      <div className="form-grid">
        {/* Field 1 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">1</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Name of Broadcaster" 
              name="nameOfBroadcaster" 
              required={true}
            />
          </div>
        </div>
        
        {/* Field 2 - Address */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">2</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="address-container">
              <div className="address-header">Address:</div>
              <div className="address-fields">
                <div className="address-row">
                  <div className="address-label">P.O. Box:</div>
                  <Input 
                    label="" 
                    name="poBox" 
                    noLabel={true}
                  />
                </div>
                <div className="address-row">
                  <div className="address-label">Postal Code:</div>
                  <Input 
                    label="" 
                    name="postalCode" 
                    noLabel={true}
                  />
                </div>
                <div className="address-row">
                  <div className="address-label">Town:</div>
                  <Input 
                    label="" 
                    name="town" 
                    noLabel={true}
                  />
                </div>
                <div className="address-row">
                  <div className="address-label">Location</div>
                  <Input 
                    label="" 
                    name="location" 
                    noLabel={true}
                  />
                </div>
                <div className="address-row">
                  <div className="address-label">Street</div>
                  <Input 
                    label="" 
                    name="street" 
                    noLabel={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 3 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">3</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Phone Number (s)" 
              name="phoneNumber" 
              type="tel"
            />
          </div>
        </div>
        
        {/* GENERAL DATA Section Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <h3 className="section-subtitle">GENERAL DATA</h3>
          </div>
        </div>
        
        {/* Field 4 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">4</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Type of Station (Radio (AM/FM) or TV)" 
              name="stationType" 
            />
          </div>
        </div>
        
        {/* Field 5 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">5</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Name of the Transmitting Site" 
              name="transmittingSite" 
            />
          </div>
        </div>
        
        {/* Field 6 - Geographical Coordinates */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">6</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Geographical Coordinates</div>
              </div>
              <div className="grid-col grid-col-4">
                <Input 
                  label="Longitude (dd mm ss) E" 
                  name="longitude" 
                />
              </div>
              <div className="grid-col grid-col-4">
                <Input 
                  label="Latitude (dd mm ss) N/S" 
                  name="latitude" 
                />
              </div>
            </div>
            
            {/* Physical Address */}
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Physical Address</div>
              </div>
              <div className="grid-col grid-col-3">
                <Input 
                  label="Location" 
                  name="physicalLocation" 
                />
              </div>
              <div className="grid-col grid-col-3">
                <Input 
                  label="Street" 
                  name="physicalStreet" 
                />
              </div>
              <div className="grid-col grid-col-2">
                <Input 
                  label="Area" 
                  name="physicalArea" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 8 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">8</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Altitude (m above sea level)" 
              name="altitude" 
              type="number"
            />
          </div>
        </div>
        
        {/* Field 9 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">9</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Name of the Land Owner" 
              name="landOwner" 
            />
          </div>
        </div>
        
        {/* Field 10 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">10</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Others Telecoms Operator on site?</div>
              </div>
              <div className="grid-col grid-col-4">
                <RadioGroup 
                  label="" 
                  name="otherTelecomsOperator" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="If yes, elaborate" 
                  name="otherTelecomsOperatorDetails" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* TOWER Section Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <h3 className="section-subtitle">TOWER</h3>
          </div>
        </div>
        
        {/* Field 11 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">11</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Name of the Tower Owner" 
              name="towerOwner" 
            />
          </div>
        </div>
        
        {/* Field 12 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">12</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Height of the Tower above Ground" 
              name="towerHeight" 
              type="number"
            />
          </div>
        </div>
        
        {/* Field 13 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">13</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Is the tower above a Building Roof?</div>
              </div>
              <div className="grid-col grid-col-4">
                <RadioGroup 
                  label="" 
                  name="towerAboveBuilding" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="If yes, height of the building above ground?" 
                  name="buildingHeight" 
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 14 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">14</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Type of Tower (tick appropriately)</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="towerType" 
                  options={[
                    { value: 'Guyed', label: 'Guyed' },
                    { value: 'Self-Supporting', label: 'Self-Supporting' },
                    { value: 'Others', label: 'Others (specify)' }
                  ]}
                  noLabel={true}
                  inline={true}
                />
              </div>
            </div>
            {/* Add an input field for "Others (specify)" if needed */}
            <div className="grid-row tower-type-others-container">
              <div className="grid-col grid-col-12">
                <Input 
                  label="Others (specify)" 
                  name="towerTypeOthers" 
                  className="tower-type-others"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 15 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">15</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Rust Protection (tick appropriately)</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="rustProtection" 
                  options={[
                    { value: 'Galvanized', label: 'Galvanized' },
                    { value: 'Painted', label: 'Painted' },
                    { value: 'Aluminum', label: 'Aluminum' },
                    { value: 'NoRustProtection', label: 'No Rust Protection' }
                  ]}
                  noLabel={true}
                  inline={true}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 16 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">16</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Year of Tower installation" 
              name="towerInstallationYear" 
              type="number"
              placeholder="YYYY"
            />
          </div>
        </div>
        
        {/* Field 17 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">17</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Name of the Tower Manufacturer" 
              name="towerManufacturer" 
            />
          </div>
        </div>
        
        {/* Field 18 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">18</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Model Number" 
              name="towerModelNumber" 
            />
          </div>
        </div>
        
        {/* Field 19 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">19</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Maximum Wind Load (km/h)" 
              name="maxWindLoad" 
              type="number"
            />
          </div>
        </div>
        
        {/* Field 20 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">20</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Maximum Load Charge (kg)" 
              name="maxLoadCharge" 
              type="number"
            />
          </div>
        </div>
        
        {/* Field 21 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">21</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Has Tower got an Insurance Policy?</div>
              </div>
              <div className="grid-col grid-col-4">
                <RadioGroup 
                  label="" 
                  name="towerInsured" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="If yes provide name of insurer" 
                  name="insurerName" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 22 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">22</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Concrete Base?</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="concreteBase" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 23 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">23</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Lightning Protection provided?</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="lightningProtection" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Page number indicator */}
        <div className="grid-row page-indicator">
          <div className="grid-col grid-col-12">
            <div className="page-number">Page 1 of 4</div>
            <div className="version-number">Version B</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;