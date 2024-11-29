"use client";

import React, { useState } from 'react';
import { StepIndicator } from '../components/StepIndicator';
import { PersonalInfoStep } from '../components/PersonalInfoStep';
import { AddressStep } from '../components/AddressStep';
import { IdentityStep } from '../components/IdentityStep';
import { ReviewStep } from '../components/ReviewStep';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { STEPS } from '../utils/formSteps';
import { initialFormData } from '../utils/initialData';
import { SuccessMessage } from '@/components/SuccessMessage';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(STEPS.PERSONAL);
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = () => {
    switch (currentStep) {
      case STEPS.PERSONAL:
        setCurrentStep(STEPS.ADDRESS);
        break;
      case STEPS.ADDRESS:
        setCurrentStep(STEPS.IDENTITY);
        break;
      case STEPS.IDENTITY:
        setCurrentStep(STEPS.REVIEW);
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case STEPS.ADDRESS:
        setCurrentStep(STEPS.PERSONAL);
        break;
      case STEPS.IDENTITY:
        setCurrentStep(STEPS.ADDRESS);
        break;
      case STEPS.REVIEW:
        setCurrentStep(STEPS.IDENTITY);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === STEPS.REVIEW) {
      setShowSuccess(true);
    } else {
      handleNext();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.PERSONAL:
        return (
          <PersonalInfoStep
            data={formData.personal}
            onChange={(data) => setFormData({ ...formData, personal: data })}
          />
        );
      case STEPS.ADDRESS:
        return (
          <AddressStep
            data={formData.address}
            onChange={(data) => setFormData({ ...formData, address: data })}
          />
        );
      case STEPS.IDENTITY:
        return (
          <IdentityStep
            data={formData.identity}
            onChange={(data) => setFormData({ ...formData, identity: data })}
          />
        );
      case STEPS.REVIEW:
        return (
          <ReviewStep
            data={formData}
            onEdit={(step) => setCurrentStep(step)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">KYC Verification</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please complete all steps to verify your identity
          </p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <div className="bg-white shadow rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            <div className="mt-8 flex justify-between">
              {currentStep !== STEPS.PERSONAL && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
              )}
              <button
                type="submit"
                className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === STEPS.REVIEW ? (
                  'Submit'
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <SuccessMessage visible={showSuccess} />
    </div>
  );
}
