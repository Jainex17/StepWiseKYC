# StepWiseKYC

StepWiseKYC is a user-friendly, multi-step KYC form built with Next.js, Tailwind CSS, and Lucide React. This project provides a smooth and intuitive user experience for collecting and verifying user information.

## Features

- **Multi-Step Form Structure**:
  - Step 1: Collect personal information (name, email, phone, date of birth, gender, and marital status).
  - Step 2: Address details, including street, city, state, postal code, and country.
  - Step 3: Identity verification with file upload, document type, and expiry date.

- **Summary and Review**:
  - Displays a categorized summary of user inputs.
  - Allows easy navigation back to previous steps for editing.

- **User Experience**:
  - Progress bar to indicate the current step.
  - Smooth transitions between steps.
  - Input validation and state persistence across steps.

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn package manager

### Installation
   ```bash
   git clone https://github.com/yourusername/kyc-form-wizard.git
   cd kyc-form-wizard
   npm install
   npm run dev
   ```