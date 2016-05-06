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
                                            <Step title="Store">
                                            <StepContent>
                                            <p>This is the content of the step.</p>
                                            </StepContent>
                                            <StepActions>
                                            <Button colored raised data-stepper-next>Continue</Button>
                                            <Button>Cancel</Button>
                                            </StepActions>
                                            </Step>
                                            <Step title="Employee">
                                            <StepContent>
                                            <p>This is step2</p>
                                            </StepContent>
                                            <StepActions>
                                            <Button colored raised data-stepper-next>Continue</Button>
                                            <Button>Cancel</Button>
                                            </StepActions>
                                            </Step>
                                            <Step title="Add style numbers">
                                            <StepContent>
                                            <p>Add the style numbers in this step.</p>
                                            </StepContent>
                                            <StepActions>
                                            <Button colored raised data-stepper-next>Continue</Button>
                                            <Button>Cancel</Button>
                                            </StepActions>
                                            </Step>
                                            <Step title="Edit Uniform allowance" optional>
                                            <StepContent>
                                            <p>Edit uniform allowance</p>
                                            </StepContent>
                                            <StepActions>
                                            <Button colored raised data-stepper-next>Continue</Button>
                                            <Button data-stepper-next>Skip</Button>
                                            </StepActions>
                                            </Step>
                                            <Step title="Confirm">
        <StepContent>
          <p>Edit uniform allowance</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Submit Purchase</Button>
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
