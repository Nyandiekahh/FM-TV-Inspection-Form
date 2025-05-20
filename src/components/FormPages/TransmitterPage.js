import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../UI/Input';
import RadioGroup from '../UI/RadioGroup';
import '../../styles/FormPages.css';

const TransmitterPage = () => {
  const { register } = useFormContext();
  
  return (
    <div className="form-section">
      <div className="form-grid">
        {/* Field 24 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">24</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Is the Tower electrically grounded?</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="towerGrounded" 
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
        
        {/* Field 25 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">25</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Aviation warning light provided?</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="aviationWarningLight" 
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
        
        {/* Field 26 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">26</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Others Antennas on the Tower?</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="otherAntennas" 
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
                  name="otherAntennasDetails" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* TRANSMITTER Section Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <h3 className="section-subtitle">TRANSMITTER</h3>
          </div>
        </div>
        
        {/* Field 27 - A. EXCITER Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">27</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="input-label">A. EXCITER</div>
          </div>
        </div>
        
        {/* Field 28 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">28</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Manufacturer" 
              name="exciterManufacturer" 
            />
          </div>
        </div>
        
        {/* Field 29 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">29</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Model Number" 
              name="exciterModelNumber" 
            />
          </div>
        </div>
        
        {/* Field 30 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">30</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Serial Number" 
              name="exciterSerialNumber" 
            />
          </div>
        </div>
        
        {/* Field 31 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">31</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-6">
                <Input 
                  label="Nominal Power (W)" 
                  name="exciterNominalPower" 
                  type="number"
                />
              </div>
              <div className="grid-col grid-col-6">
                <Input 
                  label="Actual Reading" 
                  name="exciterActualReading" 
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* B. AMPLIFIER Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-1"></div>
          <div className="grid-col grid-col-11">
            <div className="input-label">B. AMPLIFIER</div>
          </div>
        </div>
        
        {/* Field 32 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">32</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Manufacturer" 
              name="amplifierManufacturer" 
            />
          </div>
        </div>
        
        {/* Field 33 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">33</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Model Number" 
              name="amplifierModelNumber" 
            />
          </div>
        </div>
        
        {/* Field 34 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">34</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Serial Number" 
              name="amplifierSerialNumber" 
            />
          </div>
        </div>
        
        {/* Field 35 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">35</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-6">
                <Input 
                  label="Nominal Power (W)" 
                  name="amplifierNominalPower" 
                  type="number"
                />
              </div>
              <div className="grid-col grid-col-6">
                <Input 
                  label="Actual Reading" 
                  name="amplifierActualReading" 
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Field 36 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">36</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="RF output connector type" 
              name="rfOutputType" 
            />
          </div>
        </div>
        
        {/* Field 37 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">37</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Frequency Range" 
              name="frequencyRange" 
            />
          </div>
        </div>
        
        {/* Field 38 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">38</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Transmit Frequency (MHz or TV Channel Number)" 
              name="transmitFrequency" 
            />
          </div>
        </div>
        
        {/* Field 39 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">39</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Frequency Stability (ppm)" 
              name="frequencyStability" 
            />
          </div>
        </div>
        
        {/* Field 40 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">40</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Harmonics Suppression Level (dB)" 
              name="harmonicsSuppressionLevel" 
              type="number"
            />
          </div>
        </div>
        
        {/* Field 41 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">41</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Spurious Emission Level (dB)" 
              name="spuriousEmissionLevel" 
              type="number"
            />
          </div>
        </div>
        
        {/* Field 42 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">42</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Internal Audio Limiter</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="internalAudioLimiter" 
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
        
        {/* Field 43 (continued) */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">43</span>
          </div>
          <div className="grid-col grid-col-11">
            <div className="grid-row">
              <div className="grid-col grid-col-4">
                <div className="input-label">Internal Stereo Coder</div>
              </div>
              <div className="grid-col grid-col-8">
                <RadioGroup 
                  label="" 
                  name="internalStereoCoder" 
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
        
        {/* Field 44 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">44</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Transmitter Catalog (attach)" 
              name="transmitterCatalog" 
            />
          </div>
        </div>
        
        {/* Field 45 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">45</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Transmit Bandwidth (-26dB)" 
              name="transmitBandwidth" 
            />
          </div>
        </div>
        
        {/* FILTER Section Header */}
        <div className="grid-row">
          <div className="grid-col grid-col-12">
            <h3 className="section-subtitle">FILTER</h3>
          </div>
        </div>
        
        {/* Field 46 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">46</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Type (Band Pass Filter or Notch Filter)" 
              name="filterType" 
            />
          </div>
        </div>
        
        {/* Field 47 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">47</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Manufacturer" 
              name="filterManufacturer" 
            />
          </div>
        </div>
        
        {/* Field 48 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">48</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Model Number" 
              name="filterModelNumber" 
            />
          </div>
        </div>
        
        {/* Field 49 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">49</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Serial Number" 
              name="filterSerialNumber" 
            />
          </div>
        </div>
        
        {/* Field 50 */}
        <div className="grid-row">
          <div className="grid-col grid-col-1">
            <span className="field-number">50</span>
          </div>
          <div className="grid-col grid-col-11">
            <Input 
              label="Frequency (MHz) or TV Channel Number" 
              name="filterFrequency" 
            />
          </div>
        </div>
        
        {/* Page number indicator */}
        <div className="grid-row page-indicator">
          <div className="grid-col grid-col-12">
            <div className="page-number">Page 2 of 4</div>
            <div className="version-number">Version B</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransmitterPage;