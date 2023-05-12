# UMB React Project - Select Dropdown Component with Number Visualization and Form

In this test, you will be creating a select dropdown component using React that fetches data from an API and displays the list of CPT codes in a dropdown menu. When a user selects a CPT code from the dropdown, two additional components should render: a display of the average cost associated with that code and a form to submit a new cost.

You will be asked to create a video demonstrating the requested functionality and explaining which libraries you used and why.  Please keep this in mind as you are developing this probject.

>Current Procedural Terminology, more commonly known as CPT, refers to a medical code set created and maintained by the American Medical Association — and used by physicians, allied health professionals, nonphysician practitioners, hospitals, outpatient facilities, and laboratories to represent the services and procedures they perform.

## All data should be accessed through the following API endpoints
   ```
   GET    /api/cptCodes
   GET    /api/cptCodes/:id
   GET    /api/costs
   GET    /api/costs/:id
   GET    /api/cptCodes?_embed=costs
   GET    /api/cptCodes/:id?_embed=costs
   GET    /api/cptCodes/:id/costs
   POST   /api/costs
   POST   /api/cptCodes/:id/costs
   ```
# Requirements

1. Create a select component for CPT code.  Options should be the "code" from the cptCode data and are fetched using the API.

2. When a CPT code is selected, a separate component should display the average cost associated with that code.  This should be the "cost" entry under the "costs" endpoint.

3. When a CPT code is selected, a form should become available to enter a new cost for the selected CPT.  The form should post data through the API.  For example: 

   HTTP
   ```
   POST   http://localhost:3001/api/costs
   ```
   Body
   ```json
   { 
      "cptCodeId": 1, 
      "cost": 305.0, 
      "facilityType": "Physician's Office", 
      "copay": 20.0 
   }
   ```

   Or

   HTTP
   ```
   POST   http://localhost:3001/api/cptCodes/1/costs
   ```
   Body
   ```json
   { 
      "cost": 305.0, 
      "facilityType": "Physician's Office", 
      "copay": 20.0 
   }

5. All components should be well-structured and easy to understand. It should also be responsive and user-friendly.

6. A short video (max 5 minutes) explaining your process and choice of libraries.  In addition, please address these specific topics in your video:

   - Explain the process of creating a custom React component while providing detail about the lifestyle methods and props involved.
   - How you handle state management in a React application.

## Guidelines

1. You can use any React library of your choosing to create the components.

2. Use React hooks like useState and useEffect to manage the component state and data fetching.

3. You are free to use any CSS framework, custom CSS, or styled component library you wish.

4. You can use any additional libraries or tools as needed to complete the task.

5. Your code should be clean, well-structured, and maintainable.

## Submission

1. Clone this repository.

2. Implement the select dropdown, average cost, and form components according to the requirements.

3. Record a short video (maximum 5 minutes) explaining your process and the libraries you used.  Please save the video in a MP4 or MPEG format and include in the repository.

4. Send UMB the link to your repository.

# Vite.js Project with JSON Server

This is a simple project that uses Vite.js and fetches data from a mock JSON server.

## Prerequisites

Make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/umb/umb-react-project.git
   ```

2. Navigate to the project directory:

   ```
   cd umb-react-project
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the JSON server:

   ```
   npm run server
   ```

5. In a separate terminal window, start the Vite.js development server:

   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to confirm the application running.

