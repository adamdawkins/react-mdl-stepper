import React from 'react';
import { storiesOf } from '@kadira/storybook';
import '../../node_modules/react-mdl/extra/material.css';
import '../../node_modules/react-mdl/extra/material.js';
import '../../stepper.css';
import '../../demo.css';
import { Stepper, Step, StepActions, StepContent } from '../index';
import { List, ListItem, ListItemContent, ListItemAction, Grid, Cell, Textfield, Button, Card, CardTitle, CardText, CardActions, Icon} from 'react-mdl';

storiesOf('Stepper', module)
  .add('Uniform Ad Purchase', () => (

        <Stepper>
          <Step editable
            title="Employee"
            summary="Select the Employee"
            completedSummary="Emily Johnston, 4312"
          >
          <StepContent>
            <Card>
              <Grid>
                <Cell col={2}>
                  <Textfield label="Employee Number" />
                </Cell>
                <Cell col={6}>
                  <Button colored raised>Search</Button>
                </Cell>
              </Grid>
            </Card>
          </StepContent>
          <StepActions>
            <Button>Cancel</Button>
            <Button colored raised data-stepper-next>Continue</Button>
          </StepActions>
        </Step>
          <Step editable
            title="Styles"
            summary="Add the styles purchased for uniform"
            completedSummary="2 styles, £178"
          >
          <StepContent>
            <Grid>
              <List>
        <ListItem twoLine>
          <ListItemContent subtitle="Style Number: 23008692">Elle Print Trapeze Maxi Dress</ListItemContent>
          <ListItemAction>
            <a href="#"><Icon name="delete"/></a>
          </ListItemAction>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent subtitle="Style Number: 001008568">Ivory Tape Yarn Sleeveless Tee</ListItemContent>
          <ListItemAction>
            <a href="#"><Icon name="delete"/></a>
          </ListItemAction>
        </ListItem>
              </List>
            </Grid>
              <form>
            <Grid>
              <Cell col={6}>
                <Textfield label="Style number" />
              </Cell>
              <Cell col={6}>
                <Button colored raised>Add</Button>
              </Cell>
            </Grid>
              </form>
          </StepContent>
          <StepActions>
            <Button>Cancel</Button>
            <Button colored raised data-stepper-next>Continue</Button>
          </StepActions>
        </Step>
        <Step optional editable
          title="Apply partial discount"
          summary="Optional"
          skippedSummary="Skipped"
          completedSummary="Uniform allowance used: £85.31"
          >
          <StepContent />
          <StepActions>
            <Button>Cancel</Button>
            <Button colored raised data-stepper-next>Continue</Button>
            <Button data-stepper-skip>Skip</Button>
          </StepActions>
        </Step>
        <Step title="Confirm" summary="Check everything's correct, and submit the uniform purchase">
          <StepActions>
            <Button colored raised data-stepper-next>Submit</Button>
          </StepActions>
        </Step>
        </Stepper>
));
storiesOf('Stepper', module)
  .add('Linear Stepper', () => (
    <Stepper>
      <Step title="Title of Step 1" summary="Summary of Step 1">
        <StepContent>
          <p>This is the content of the step.</p>
        </StepContent>
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="Title of Step 2">
        <StepContent />
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="Title of Step 3">
        <StepContent />
        <StepActions>
          <Button colored raised data-stepper-next>Continue</Button>
          <Button>Cancel</Button>
        </StepActions>
      </Step>
      <Step title="Title of Step 4">
        <StepContent />
        <StepActions>
          <Button colored raised data-stepper-next>Action</Button>
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
  .add('Editable Steps', () => (
    <Stepper>
      <Step editable
        title="Title of Step 1"
        summary="You can edit this step later"
      >
        <StepContent />
        <StepActions>
         <Button colored raised data-stepper-next>Continue</Button>
         <Button>Cancel</Button>
        </StepActions>
     </Step>
     <Step title="Title of Step 2" >
       <StepContent />
       <StepActions>
         <Button colored raised data-stepper-next>Continue</Button>
         <Button>Cancel</Button>
       </StepActions>
     </Step>
     <Step title="Title of Step 3" >
       <StepContent />
       <StepActions>
         <Button colored raised data-stepper-next>Continue</Button>
         <Button>Cancel</Button>
       </StepActions>
     </Step>
     <Step title="Title of Step 4" >
       <StepContent />
       <StepActions>
         <Button colored raised data-stepper-next>Continue</Button>
         <Button>Cancel</Button>
       </StepActions>
     </Step>
   </Stepper>
  ))
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
  //
