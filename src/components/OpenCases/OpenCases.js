import React from 'react';
import { Dropdown } from '@carbon/react';
import './_open-cases.scss';
import { FluidForm } from 'carbon-components-react';
import { unstable__FluidDropdown as FluidDropdown } from '@carbon/react';
import { unstable__FluidMultiSelect as FluidMultiSelect } from '@carbon/react';
import { ToggletipLabel } from '@carbon/react';
import { ToggletipButton } from '@carbon/react';
import { Toggletip } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import { ToggletipContent } from '@carbon/react';

//variables 
var fechaCorte = 'Viernes 18/08/2023'; 

const OpenCases = () => (
    <div className='box-container'>
      <h3 id ='openC'> Open Cases </h3>
      <div className='filaDropDowns'> 
        <div id = 'dropdownContainer'> 
          <FluidDropdown
            className="test-class"
            id="default-3"
            invalidText="Error message that is really long can wrap to more lines but should not be excessively long."
            itemToString={item => item ? item.text: ''}
                  items={[
                    { id: 'option-5', text: 'Option 5' , label: 'texto' },
                    { id: 'option-6', text: 'Option 6' },
                  ]}
            label= {fechaCorte}
            playgroundWidth={400}
            titleText={<><ToggletipLabel>Fecha de corte</ToggletipLabel><Toggletip align="top-left"><ToggletipButton label="Show information"><Information /></ToggletipButton><ToggletipContent><p>La fecha de corte se refiere a</p></ToggletipContent></Toggletip></>}
            warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
          />
        </div>
        <div id = 'dropdownContainer'> 
          <FluidMultiSelect
            className="test-class"
            id="default-3"
            invalidText="Error message that is really long can wrap to more lines but should not be excessively long."
            itemToString={item => item ? item.text: ''}
                  items={[
                    { id: 'option-5', text: 'Option 5' , label: 'texto' },
                    { id: 'option-6', text: 'Option 6' },
                  ]}
            label= 'Mostrar todo'
            playgroundWidth={400}
            titleText={<><ToggletipLabel>Severidad</ToggletipLabel><Toggletip align="top-left"><ToggletipButton label="Show information"><Information /></ToggletipButton><ToggletipContent><p>La fecha de corte se refiere a</p></ToggletipContent></Toggletip></>}
            warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
          />
        </div>
        <div id = 'dropdownContainer'> 
          <FluidDropdown
            className="test-class"
            id="default-3"
            invalidText="Error message that is really long can wrap to more lines but should not be excessively long."
            itemToString={item => item ? item.text: ''}
                  items={[
                    { id: 'option-5', text: 'Option 5' , label: 'texto' },
                    { id: 'option-6', text: 'Option 6' },
                  ]}
            label= 'Jueves 12/09/2022'
            playgroundWidth={400}
            titleText={<><ToggletipLabel>Comparacion</ToggletipLabel><Toggletip align="top-left"><ToggletipButton label="Show information"><Information /></ToggletipButton><ToggletipContent><p>La fecha de corte se refiere a</p></ToggletipContent></Toggletip></>}
            warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
          />
        </div>
      </div>
    </div>
);


export default OpenCases;
