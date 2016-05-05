import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import '../../node_modules/react-mdl/extra/material.css';
import '../../node_modules/react-mdl/extra/material.js';
import '../../stepper.css';
import { Stepper, Step, StepLabel, StepTitle, StepActions, StepContent } from '../index';
import { Button } from 'react-mdl';

storiesOf('Stepper', module)
  .add('Stepper with non-Step child', () => ( 
     <Stepper>
      <div>Hello</div>
     </Stepper>
  ))
  .add('Linear Stepper', () => (
    <Stepper>
      <Step title="This is Step 1" summary="This is the summary of Step 1">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="This is Step 2" summary="This is the summary of Step 2">
        <StepContent>
          <p>This is step2</p>
        </StepContent>
        <StepActions>
          <Button colored raised>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
    </Stepper>
  ));
  // .add('Non-Linear Stepper', () => (
  //   <Stepper type="non-linear" />
  // ))
  // .add('Stepper Feedback', () => (
  //   <Stepper />
  // ))
  // .add('Editable Steps', () => (
  //   <Stepper />
  // ))
  // .add('Optional Steps', () => (
  //   <Stepper />
  // ))
  // .add('Error State', () => (
  //   <Stepper />
  // ));
