import React from 'react';
import { storiesOf } from '@kadira/storybook';
import '../../node_modules/react-mdl/extra/material.css';
import '../../node_modules/react-mdl/extra/material.js';
import '../../stepper.css';
import { Stepper, Step, StepActions, StepContent } from '../index';
import { Button } from 'react-mdl';

storiesOf('Stepper', module)
  .add('Linear Stepper', () => (
    <Stepper>
      <Step title="Delivery Address">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="Billing Address">
        <StepContent />
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="Payment Details">
        <StepContent />
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="Confirmation">
        <StepContent>
          <p>Place your order</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Order</Button>
        </StepActions>
       </Step>
    </Stepper>
  ))
  // .add('Non-Linear Stepper', () => (
  //   <Stepper type="non-linear" />
  // ))
  // .add('Stepper Feedback', () => (
  //   <Stepper />
  // ))
  // .add('Editable Steps', () => (
  //   <Stepper />
  // ))
  .add('Optional Steps', () => (
    <Stepper>
      <Step title="Step 1">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="An optional step 2" summary="optional" optional>
        <StepContent>
          <p>This is step2</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
          <Button data-stepper-skip>Skip</Button>
        </StepActions>
      </Step>
      <Step title="Step 3">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
    </Stepper>
  ))
  .add('Completed Step Summary',  () => (
    <Stepper>
      <Step title="The step with only a completed summary" completedSummary="This step is completed">
        <StepContent>
          <p> You might want to summarize user input from here, e.g. in a checkout process.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="This step summary changes on completion" summary="Please do something here" completedSummary="This step is completed">
        <StepContent>
          <p> You might want to summarize user input from here, e.g. in a checkout process.</p>
        </StepContent>
          <StepActions>
            <Button colored raised data-stepper-next>Continue</Button>
            <Button>Cancel</Button>
          </StepActions>
      </Step>
    </Stepper>
  ))
  .add('Skipped Step Summary', () => (
    <Stepper>
      <Step title="Step 1">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step optional
        title="An optional step 2"
        summary="optional"
        completedSummary="Completed"
        skippedSummary="Skipped"
      >
        <StepContent>
          <p>This is step2</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
          <Button data-stepper-skip>Skip</Button>
        </StepActions>
      </Step>
      <Step title="Step 3">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
    </Stepper>
  ));
  // .add('Error State', () => (
  //   <Stepper />
  // ));
