import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../UI/Input';
import RadioGroup from '../UI/RadioGroup';
import '../../styles/FormPages.css';

const AntennaPage = () => {
  const { register } = useFormContext();
  
  return (
    <div className="form-section">
      <h2 className="section-title">ANTENNA SYSTEM</h2>
      
      <div className="form-grid">
        {/* Field 51 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">51</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Height the Antenna on the Tower/Mast (m)" 
              name="antennaHeight" 
              type="number"
              step="0.1"
            />
          </div>
        </div>
        
        {/* Field 52 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">52</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Type of Antenna" 
              name="antennaType" 
            />
          </div>
        </div>
        
        {/* Field 53 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">53</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Antenna Manufacturer" 
              name="antennaManufacturer" 
            />
          </div>
        </div>
        
        {/* Field 54 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">54</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Antenna Model Number" 
              name="antennaModelNumber" 
            />
          </div>
        </div>
        
        {/* Field 55 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">55</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Polarization (tick appropriately)</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="polarization" 
                  options={[
                    { value: 'Vertical', label: 'Vertical' },
                    { value: 'Horizontal', label: 'Horizontal' },
                    { value: 'Circular', label: 'Circular' },
                    { value: 'Elliptical', label: 'Elliptical' }
                  ]}
                  noLabel={true}
                  inline={true}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 56 - HORIZONTAL PATTERN */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">56</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">HORIZONTAL PATTERN</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="horizontalPattern" 
                  options={[
                    { value: 'OmniDirectional', label: 'Omni directional' },
                    { value: 'Directional', label: 'Directional' }
                  ]}
                  noLabel={true}
                  inline={true}
                />
              </div>
            </div>
            
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="Beam width measured at - 3 dB Level" 
                  name="beamWidth3db" 
                />
              </div>
            </div>
            
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="Degrees azimuth for the max gain related to N" 
                  name="degreesAzimuth" 
                />
              </div>
            </div>
            
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="Table of azimuth (DbK) value of the Horizontal Pattern (Attach)" 
                  name="tableAzimuthHorizontal" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 57 - VERTICAL PATTERN */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">57</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="input-label">VERTICAL PATTERN</div>
            
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Mechanical tilt?</div>
                <RadioGroup 
                  label="" 
                  name="mechanicalTilt" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
              <div className="grid-col grid-col-4">
                <div className="input-label">Electrical tilt?</div>
                <RadioGroup 
                  label="" 
                  name="electricalTilt" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
              <div className="grid-col grid-col-4">
                <div className="input-label">Null fill?</div>
                <RadioGroup 
                  label="" 
                  name="nullFill" 
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]}
                  noLabel={true}
                />
              </div>
            </div>
            
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <Input 
                  label="Degree of Tilt" 
                  name="mechanicalTiltDegree" 
                />
              </div>
              <div className="grid-col grid-col-4">
                <Input 
                  label="Degree of Tilt" 
                  name="electricalTiltDegree" 
                />
              </div>
              <div className="grid-col grid-col-4">
                <Input 
                  label="% of filling" 
                  name="nullFillPercentage" 
                />
              </div>
            </div>
            
            <div className="grid-row">
              <div className="grid-col grid-col-12">
                <Input 
                  label="Table of azimuth (DbK) value of the Vertical Pattern (Attach)" 
                  name="tableAzimuthVertical" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 58 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">58</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Gain of the Antenna System" 
              name="antennaSystemGain" 
            />
          </div>
        </div>
        
        {/* Field 59 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">59</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Estimated antenna losses (splitter, harnesses, null fill losses, etc ) (dB)" 
              name="estimatedAntennaLosses" 
              type="number"
              step="0.1"
            />
          </div>
        </div>
        
        {/* Field 60 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">60</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Estimated losses in the feeder (dB)" 
              name="estimatedFeederLosses" 
              type="number"
              step="0.1"
            />
          </div>
        </div>
        
        {/* Field 61 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">61</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Estimated losses in multiplexer (dB)" 
              name="estimatedMultiplexerLosses" 
              type="number"
              step="0.1"
            />
          </div>
        </div>
        
        {/* Field 62 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">62</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Effective Radiated Power (kW)" 
              name="effectiveRadiatedPower" 
              type="number"
              step="0.1"
            />
          </div>
        </div>
        
        {/* Field 63 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">63</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Antenna Catalog (attach)" 
              name="antennaCatalog" 
            />
          </div>
        </div>
        
        {/* STUDIO TO TRANSMITTER LINK Section Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <h3 className="section-subtitle">STUDIO TO TRANSMITTER LINK</h3>
          </div>
        </div>
        
        {/* Field 64 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">64</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Manufacturer" 
              name="stlManufacturer" 
            />
          </div>
        </div>
        
        {/* Field 65 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">65</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Model Number" 
              name="stlModelNumber" 
            />
          </div>
        </div>
        
        {/* Field 66 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">66</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Serial Number" 
              name="stlSerialNumber" 
            />
          </div>
        </div>
        
        {/* Field 67 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">67</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Frequency (MHz)" 
              name="stlFrequency" 
              type="number"
              step="0.1"
            />
          </div>
        </div>
        
        {/* Field 68 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">68</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Polarization" 
              name="stlPolarization" 
            />
          </div>
        </div>
        
        {/* Field 69 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">69</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Description of Signal Reception and or Re-transmission" 
              name="signalDescription" 
            />
          </div>
        </div>
        
        {/* Page number indicator */}
        <div className="grid-row page-indicator">
          <div className="grid-col grid-col-12">
            <div className="page-number">Page 3 of 4</div>
            <div className="version-number">Version B</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntennaPage;