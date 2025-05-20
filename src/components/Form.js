import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import AdminPage from './FormPages/AdminPage';
import TransmitterPage from './FormPages/TransmitterPage';
import AntennaPage from './FormPages/AntennaPage';
import OtherInfoPage from './FormPages/OtherInfoPage';
import FormHeader from './UI/FormHeader';
import FormFooter from './UI/FormFooter';
import '../styles/Form.css';

const Form = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    // Here you would send the data to your Django backend
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
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <AdminPage />;
      case 2:
        return <TransmitterPage />;
      case 3:
        return <AntennaPage />;
      case 4:
        return <OtherInfoPage />;
      default:
        return <AdminPage />;
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
          
          {renderPage()}
          
          <FormFooter 
            currentPage={currentPage} 
            totalPages={totalPages} 
            prevPage={prevPage} 
            nextPage={nextPage} 
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;