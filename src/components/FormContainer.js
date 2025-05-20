import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormHeader from './UI/FormHeader';
import FormFooter from './UI/FormFooter';
import '../styles/Form.css';


const FormContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current page based on URL
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/admin':
        return 1;
      case '/transmitter':
        return 2;
      case '/antenna':
        return 3;
      case '/other-info':
        return 4;
      default:
        return 1;
    }
  };
  
  const currentPage = getCurrentPage();
  const totalPages = 4;
  
  // Load saved form data from localStorage if available
  const getSavedFormData = () => {
    const savedData = localStorage.getItem('tvInspectionFormData');
    return savedData ? JSON.parse(savedData) : {
      // Administrative Information
      nameOfBroadcaster: '',
      poBox: '',
      postalCode: '',
      town: '',
      phoneNumber: '',
      stationType: '',
      transmittingSite: '',
      coordinates: '',
      altitude: '',
      landOwner: '',
      others: '',
      towerOwner: '',
      towerHeight: '',
      towerAboveBuilding: '',
      towerType: '',
      towerInstallationYear: '',
      powerInstallation: '',
      powerMode: '',
      maxWindLoad: '',
      maxLoading: '',
      towerInsured: '',
      concreteBase: '',
      lightningProtection: '',
      
      // Transmitter Information
      towerGrounded: '',
      towerWarnings: '',
      othersTransmitter: '',
      transmitterMake: '',
      transmitterModel: '',
      transmitterSerial: '',
      nominalPower: '',
      rfOutputType: '',
      frequency: '',
      transmitterStability: '',
      harmonicLevel: '',
      spuriousLevel: '',
      internalAudioLimiter: '',
      internalSecretCode: '',
      transmitterCatalog: '',
      transmitterType: '',
      filterManufacturer: '',
      filterModel: '',
      filterSerial: '',
      filterFrequency: '',
      
      // Antenna System
      antennaHeight: '',
      antennaType: '',
      antennaPower: '',
      antennaManufacturer: '',
      polarization: '',
      antennaGain: '',
      horizontalPattern: '',
      verticalPattern: '',
      feedingLineType: '',
      feedingLineLength: '',
      feedingLossesDb: '',
      effectiveRadiatedPower: '',
      antennaCatelog: '',
      estimatedLosses: '',
      
      // Other Information
      observations: '',
      technicalPersonnelName: '',
      technicalPersonnelPosition: '',
      technicalPersonnelDate: '',
      inspectorName: '',
      inspectorDate: ''
    };
  };
  
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: getSavedFormData()
  });

  // Save form data to localStorage whenever it changes
  const formValues = methods.watch();
  useEffect(() => {
    localStorage.setItem('tvInspectionFormData', JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Send data to Django backend
    fetch('http://your-django-backend-url/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        alert('Form submitted successfully!');
        // Optionally clear the form after submission
        // localStorage.removeItem('tvInspectionFormData');
        // methods.reset();
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      switch (currentPage) {
        case 1:
          navigate('/transmitter');
          break;
        case 2:
          navigate('/antenna');
          break;
        case 3:
          navigate('/other-info');
          break;
        default:
          break;
      }
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      switch (currentPage) {
        case 2:
          navigate('/admin');
          break;
        case 3:
          navigate('/transmitter');
          break;
        case 4:
          navigate('/antenna');
          break;
        default:
          break;
      }
      window.scrollTo(0, 0);
    }
  };

  // Form validation before navigation
  const validateAndNavigate = (direction) => {
    const currentFields = getFieldsForCurrentPage();
    
    methods.trigger(currentFields).then(isValid => {
      if (isValid) {
        if (direction === 'next') {
          nextPage();
        } else {
          prevPage();
        }
      } else {
        // Form is invalid, show error message
        alert('Please fix the errors before proceeding.');
      }
    });
  };
  
  // Get fields that belong to the current page for validation
  const getFieldsForCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return [
          'nameOfBroadcaster', 'poBox', 'postalCode', 'town', 'phoneNumber', 
          'stationType', 'transmittingSite', 'coordinates', 'altitude', 
          'landOwner', 'others', 'towerOwner', 'towerHeight', 
          'towerAboveBuilding', 'towerType', 'towerInstallationYear', 
          'powerInstallation', 'powerMode', 'maxWindLoad', 'maxLoading', 
          'towerInsured', 'concreteBase', 'lightningProtection'
        ];
      case 2:
        return [
          'towerGrounded', 'towerWarnings', 'othersTransmitter',
          'transmitterMake', 'transmitterModel', 'transmitterSerial',
          'nominalPower', 'rfOutputType', 'frequency', 'transmitterStability',
          'harmonicLevel', 'spuriousLevel', 'internalAudioLimiter',
          'internalSecretCode', 'transmitterCatalog', 'transmitterType',
          'filterManufacturer', 'filterModel', 'filterSerial', 'filterFrequency'
        ];
      case 3:
        return [
          'antennaHeight', 'antennaType', 'antennaPower', 'antennaManufacturer',
          'polarization', 'antennaGain', 'horizontalPattern', 'verticalPattern',
          'feedingLineType', 'feedingLineLength', 'feedingLossesDb',
          'effectiveRadiatedPower', 'antennaCatelog', 'estimatedLosses'
        ];
      case 4:
        return [
          'observations', 'technicalPersonnelName', 'technicalPersonnelPosition',
          'technicalPersonnelDate', 'inspectorName', 'inspectorDate'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="form-container">
      <FormHeader />
      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="form-page-indicator">
            <div className="page-info">
              <span>Page {currentPage} of {totalPages}</span>
            </div>
            <div className="form-id">
              <span>CA/F/FSM/17</span>
            </div>
          </div>
          
          <Outlet /> {/* This is where the page components will be rendered */}
          
          <FormFooter 
            currentPage={currentPage} 
            totalPages={totalPages} 
            prevPage={() => validateAndNavigate('prev')}
            nextPage={() => validateAndNavigate('next')}
            onSubmit={methods.handleSubmit(onSubmit)}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default FormContainer;