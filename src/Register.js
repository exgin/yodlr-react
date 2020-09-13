import React, { useState } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { NavLink } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const INIT_STATE = {
    email: '',
    firstName: '',
    lastName: '',
  };
  const [text, setText] = useState(INIT_STATE);

  const history = useHistory();

  const [mutate] = useMutation(
    (text) => axios.post('http://localhost:3001/users'),
    { text },
    {
      onSuccess: () => {
        setText(INIT_STATE);
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(text.email, text.firstName, text.lastName);
    setText(INIT_STATE);
    history.push('/');
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl name='email' type='email' />
          <HelpBlock tooltip>Required</HelpBlock>

          <ControlLabel>First Name</ControlLabel>
          <FormControl name='firstName' type='text' />
          <HelpBlock tooltip>Required</HelpBlock>

          <ControlLabel>Last Name</ControlLabel>
          <FormControl name='lastName' type='text' />
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
