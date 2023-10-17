import React from 'react';
import { Dropdown } from '@carbon/react';
import './_open-cases.scss';
import { FluidForm } from 'carbon-components-react';
import { unstable__FluidDropdown as FluidDropdown } from '@carbon/react';
import { ToggletipLabel } from '@carbon/react';
import { ToggletipButton } from '@carbon/react';
import { Toggletip } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import { ToggletipContent } from '@carbon/react';

const OpenCases = () => (
  <div>
    <div className='box-container'>
  <FluidDropdown
    className="test-class"
    id="default"
    invalidText="Error message that is really long can wrap to more lines but should not be excessively long."
    itemToString={item => item ? item.text: ''}
    items={[
      {
        id: 'option-0',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        label: 'esto es un label'
      },
      {
        id: 'option-1',
        text: 'Option 1'
      },
      {
        id: 'option-2',
        text: 'Option 2'
      },
      {
        disabled: true,
        id: 'option-3',
        text: 'Option 3 - a disabled item'
      },
      {
        id: 'option-4',
        text: 'Option 4'
      },
      {
        id: 'option-5',
        text: 'Option 5'
      }
    ]}
    label="Choose an option"
    playgroundWidth={400}
    titleText="Label"
    warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
  />
  <br />
  <FluidDropdown
    className="test-class"
    id="default-3"
    invalidText="Error message that is really long can wrap to more lines but should not be excessively long."
    itemToString={item => item ? item.text: ''}
          items={[
            { id: 'option-5', text: 'Option 5' , label: 'texto' },
            { id: 'option-6', text: 'Option 6' },
          ]}
    label="Choose an option"
    playgroundWidth={400}
    titleText={<><ToggletipLabel>Label</ToggletipLabel><Toggletip align="top-left"><ToggletipButton label="Show information"><Information /></ToggletipButton><ToggletipContent><p>Additional field information here.</p></ToggletipContent></Toggletip></>}
    warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
  />
    </div>
  </div>
);


export default OpenCases;
