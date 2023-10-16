import React from 'react';
import { Dropdown } from '@carbon/react';
import './_open-cases.scss';

const OpenCases = () => (
  <div>
    <div className='box-container'>
        <p> Open Cases</p>
    <div className="open-cases-container">
      <div className="dropdown-container">
        <Dropdown
          id="dropdown1"
          titleText="Dropdown 1"
          label="Dropdown Label 1"
          items={[
            { id: 'option-1', text: 'Option 1' },
            { id: 'option-2', text: 'Option 2' },
          ]}
        />
      </div>

      <div className="dropdown-container">
        <Dropdown
          id="dropdown2"
          titleText="Dropdown 2"
          label="Dropdown Label 2"
          items={[
            { id: 'option-3', text: 'Option 3' },
            { id: 'option-4', text: 'Option 4' },
          ]}
        />
      </div>

      <div className="dropdown-container">
        <Dropdown
          id="dropdown3"
          titleText="Dropdown 3"
          label="Dropdown Label 3"
          items={[
            { id: 'option-5', text: 'Option 5' },
            { id: 'option-6', text: 'Option 6' },
          ]}
        />
      </div>
    </div>
    </div>
  </div>
);

export default OpenCases;
