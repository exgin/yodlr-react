import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <div>
      <Form>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl name='email' type='email' />
          <HelpBlock tooltip>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance='primary'>Register!</Button>
            <Button appearance='default'>
              <NavLink to='/'>Cancel</NavLink>
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Register;
