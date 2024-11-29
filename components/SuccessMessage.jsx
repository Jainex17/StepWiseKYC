import React from 'react';
import { CheckCircle } from 'lucide-react';

export function SuccessMessage({ visible }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 transform transition-all duration-300 ease-in-out animate-fade-in">
        <div className="flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Form submitted successfully!</h2>
          <p className="mt-2 text-gray-600">Thank you for completing the KYC verification.</p>
        </div>
      </div>
    </div>
  );
}
