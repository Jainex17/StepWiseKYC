import React from 'react';
import { Upload } from 'lucide-react';

export function IdentityStep({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files?.[0] || null;
      onChange({ ...data, [name]: file });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
          Type of Document
        </label>
        <select
          id="documentType"
          name="documentType"
          value={data.documentType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select document type</option>
          <option value="passport">Passport</option>
          <option value="driverLicense">Driver's License</option>
          <option value="nationalId">National ID</option>
        </select>
      </div>

      <div>
        <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">
          Document Number
        </label>
        <input
          type="text"
          id="documentNumber"
          name="documentNumber"
          value={data.documentNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
          Document Expiry Date
        </label>
        <input
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={data.expiryDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Document</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="documentFile"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
              >
                <span>Upload a file</span>
                <input
                  id="documentFile"
                  name="documentFile"
                  type="file"
                  className="sr-only"
                  onChange={handleChange}
                  accept="image/*,.pdf"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
